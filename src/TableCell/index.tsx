import React, { useEffect, useState } from 'react';
import { Row, Column } from 'react-table';
import { OptionTypeBase } from 'react-select';
import { find } from 'lodash'

import { SelectCell } from './SelectCell';

export type EditableCellProps = {
  value: string
  row: Row,
  column: Column,
  isEditable: boolean,
  onChange: (columnId: string, value: unknown) => void, 
  selectable: boolean
  index: number,
}

const getOptionLabel = (value: unknown, options: OptionTypeBase[]): string => {
  const option = find(options, { value })
  return option?.label
}

// Select option typeguard
// const isSelectOption = (value: OptionTypeBase | string | number): value is OptionTypeBase => {
//   if (typeof value === 'object' && value?.label) return true

//   return false
// }

export const EditableCell: React.FC<EditableCellProps> = ({
  value: initialValue,
  // row: { index },
  column: { id, options, inputType },
  isEditable,
  onChange,
  index,
  selectable
}) => {
  const [value, setValue] = useState(initialValue);
  const [initialRender, setInitialRender] = useState(true);

  const onLocalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: newValue } = event.target;
    setValue(newValue);
  };

  const onSelectChange = (selectOption: OptionTypeBase | null) => {
    if(selectOption){
      const { value: newValue } = selectOption;
      setValue(newValue);
      if (id) {
        onChange(id, newValue)
      }
    }
  };

  useEffect(() => {
    if (id && !initialRender) {
      onChange(id, value);
    }

    setInitialRender(false);
  }, [value, id]);

  if (!isEditable) {
    // If this is a selectable cell
    if (options) {
      return (
        <>{getOptionLabel(value, options)}</>
      )
    }

    return (
      <>{value}</>
    );
  }

  if (options && options.length > 0) {
    return (
      <div>
        <SelectCell
          options={options}
          handleChange={onSelectChange}
          /*
            The focus needs to be on the first input of the Row, 
            but datatable has two options, when the select option 
            is activated (cell #1) and when not (cell #0), 
            so it evaluates that with the cell index to determine 
            if the input will be focusable.
          */
          setFocus={index == (selectable ? 1 : 0) ? true : false}
        />
      </div>
    );
  }

  return (
    <div>
      <input
        className="border-b border-blue-400"
        value={value || ''}
        onChange={onLocalChange}
        type={inputType ? inputType : 'text'}
        /*
          The focus needs to be on the first input of the Row, 
          but datatable has two options, when the select option 
          is activated (cell #1) and when not (cell #0), 
          so it evaluates that with the cell index to determine 
          if the input will be focusable.
        */
        autoFocus={index == (selectable ? 1 : 0) ? true : false}
      />
    </div>
  );
};
