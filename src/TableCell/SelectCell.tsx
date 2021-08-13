import React from 'react';
import Select, { OptionTypeBase } from 'react-select';

type SelectCellProps = {
  options: OptionTypeBase[]
  handleChange: (value: any) => void
}

export const SelectCell: React.FC<SelectCellProps> = ({ handleChange, options }) => {
  const onChange = (value: OptionTypeBase | null) => {
    handleChange(value);
  };

  return (
    <Select
      options={options}
      onChange={onChange}
      menuPortalTarget={document.body}
      menuPosition="fixed"
    />
  );
};
