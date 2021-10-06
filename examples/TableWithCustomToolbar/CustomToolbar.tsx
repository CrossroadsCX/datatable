import React, { ReactElement, useState } from 'react';
import { TableToolbarProps } from '../../src/TableToolbar'
import { StyledCustomToolbar } from './StyledCustomToolbar'

interface CustomToolbarProps extends TableToolbarProps {
  className: string,
}

export const CustomToolbar = (
  props: CustomToolbarProps
): ReactElement => {
const { canAdd, 
    canDelete,
    canEdit, 
    canReset, 
    handleAdd, 
    handleDelete, 
    handleEdit, 
    handleReset,
    className 
    } = props

    const [eventToChange, setEventToChange] = useState<() => void>();
    
    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value
      if( value == 'Edit'){
        setEventToChange(handleEdit)
      } else if (value == 'Delete'){
        setEventToChange(handleDelete)
      } else if( value == 'Reset'){
        setEventToChange(handleReset)
      } else {
        setEventToChange(handleAdd)
      }
      return eventToChange
    };

  return (
    <StyledCustomToolbar className={className}>
      <div>
      <select
        id="actions"
        name="actions"
        onChange={selectChange}
      >
        <option> Actions </option>
        {canAdd ? <option> Add New </option> : null }
        {canEdit ? <option> Edit </option> : null }
        {canDelete ? <option> Delete </option> : null }
        {canReset ? <option> Reset </option> : null }
      </select>
    </div>
    </StyledCustomToolbar>
  )

}
