import React, { useRef, useEffect, useState } from 'react';
import StateManager, { GroupTypeBase } from 'react-select';
import CreatableSelect, { Creatable } from 'react-select/creatable';
import Select, { OptionTypeBase, StylesConfig } from 'react-select';

export type SelectOption<TValue> = {
  value: TValue,
  label: string
}

type SelectCellProps = {
  options: SelectOption<unknown>[]
  handleChange: (value: OptionTypeBase | null) => void
  setFocus: boolean,
  defaultValue?: string,
  handleOnCreate?: (option: string) => void,
}

const customStyles: StylesConfig<OptionTypeBase, false> = {
  container: () => ({
    position: 'absolute',
    marginTop: -10,
    marginLeft: -10,
  }),

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

export const SelectCell: React.FC<SelectCellProps> = ({ handleChange, options, setFocus, handleOnCreate, defaultValue }) => {
  const onChange = (value: OptionTypeBase | null) => {
    handleChange(value);
  };
  const [defaultOption, setDefaultOption] = useState<SelectOption<unknown>[]>(defaultValue != null
    ? options.filter((option) => option.value === defaultValue) : [])
  const selectRef = useRef<StateManager<OptionTypeBase, false, GroupTypeBase<OptionTypeBase>>>(null)
  const selectCreationRef = useRef<Creatable<OptionTypeBase, false>>(null)
  const [newDefaultValue, setNewDefaultValue] = useState<string | undefined>(defaultValue)
  const [isLoading, setIsLoading] = useState<boolean>()

  useEffect(() => {
    if(setFocus){
      selectRef.current &&  selectRef.current.focus()
      selectCreationRef.current && selectCreationRef.current.focus()
    }
  }, []);

  useEffect(() => {
    const newOption = newDefaultValue != null
      ? options.filter((option) => option.label === newDefaultValue) : []
    setDefaultOption(newOption)
  }, [options, newDefaultValue])

  useEffect(() => {
    if (defaultOption?.length > 0) {
      setIsLoading(false)
      handleChange(defaultOption[0])
    }
  }, [defaultOption])

  if (handleOnCreate) {
    return (
      <CreatableSelect
        onChange={(event) => {
          handleChange(event)
          setNewDefaultValue(event?.label)
        }}
        onCreateOption={(event) => {
          setIsLoading(true)
          handleOnCreate(event)
          setNewDefaultValue(event)
        }}
        isDisabled={isLoading}
        isLoading={isLoading}
        options={options}
        value={defaultOption}
        defaultValue={defaultOption}
        className='border-0 border-b border-blue-400 border-solid'
        styles={customStyles}
        ref={selectCreationRef}
      />
    )
  }

  return (
    
    <Select
      options={options}
      onChange={onChange}
      menuPortalTarget={document.body}
      menuPosition="fixed"
      styles={customStyles}
      className='border-0 border-b border-blue-400 border-solid'
      ref={selectRef}
      defaultValue={defaultOption}
    />
  );
};