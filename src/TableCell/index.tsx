import React, { useEffect, useState } from 'react';
import { Row, Column } from 'react-table';
import { OptionTypeBase } from 'react-select';

import { SelectCell } from './SelectCell';

export type EditableCellProps = {
  value: any
  row: Row,
  column: Column,
  isEditable: boolean,
  onChange: (columnId: string, value: any) => void
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
  };

  useEffect(() => {
    if (id && !initialRender) {
      onChange(id, value);
    }

    setInitialRender(false);
  }, [value, id]);

  if (!isEditable) return (<>{initialValue}</>);

  if (options && options.length > 0) {
    const selectOptions = options.map((option) => ({
      value: option,
      label: option,
    }));

    return (
      <div>
        <SelectCell
          options={selectOptions}
          handleChange={onSelectChange}
        />
      </div>
    );
  }

  return (
    <div>
      <input
        className="border-b border-blue-400"
        value={value}
        onChange={onLocalChange}
      />
    </div>
  );
};
