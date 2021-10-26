import React from 'react';
import Select, { OptionTypeBase } from 'react-select';

type SelectCellProps = {
  options: OptionTypeBase[]
  handleChange: (value: any) => void
}

const customStyles = {
  menu: () => ({
    width: 150,
    color: '#000',
    padding: 1,
    background: '#fff',
    fontSize: 12,
  }),

  control: () => ({
    width: 150,
    height: 25,
    display: 'flex',
    color: '#000'
  }),

  indicatorSeparator: () => ({
    display: 'none'
  }),

  indicatorsContainer: () => ({
    display: 'none'
  }),

  singleValue: () => {
    const color = '#000'
    const opacity = 1;
    const transition = 'opacity 300ms';
    return { opacity, transition, color };
  }
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
      styles={customStyles}
      className='border-0 border-b border-blue-400 border-solid'
    />
  );
};
