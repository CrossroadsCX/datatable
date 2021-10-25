import React, { useEffect, useState } from 'react';
import { Row, Column } from 'react-table';
import { OptionTypeBase } from 'react-select';
import { find } from 'lodash'

import { SelectCell } from './SelectCell';

export type EditableCellProps = {
  value: any
  row: Row,
  column: Column,
  isEditable: boolean,
  onChange: (columnId: string, value: any) => void
}

const getOptionLabel = (value: any, options: OptionTypeBase[]): string => {
  const option = find(options, { value })
  return option?.label
}

// Select option typeguard
const isSelectOption = (value: OptionTypeBase | string | number): value is OptionTypeBase => {
  if (typeof value === 'object' && value?.label) return true

  return false
}

export const EditableCell: React.FC<EditableCellProps> = ({
  value: initialValue,
  // row: { index },
  column: { id, options },
  isEditable,
  onChange,
}) => {
  const [value, setValue] = useState(initialValue);
  const [initialRender, setInitialRender] = useState(true);

  const onLocalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: newValue } = event.target;
    setValue(newValue);
  };

  const onSelectChange = (selectOption: OptionTypeBase) => {
    const { value: newValue } = selectOption;

    setValue(newValue);
    if (id) {
      onChange(id, newValue)
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
      />
    </div>
  );
};
