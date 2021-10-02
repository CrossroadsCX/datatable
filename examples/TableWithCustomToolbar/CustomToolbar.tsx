import React, { ReactElement } from 'react';
import { TableToolbarProps } from '../../src/TableToolbar'
import {
    PencilIcon, PlusIcon, ReplyIcon, TrashIcon,
  } from '@heroicons/react/outline';

import { StyledCustomToolbar } from './StyledCustomToolbar'

interface CustomToolbarProps<T> extends TableToolbarProps<T> {
  className: string,
}

export const CustomToolbar = <T extends Record<string, unknown>>(
  props: CustomToolbarProps<T>
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

  return (
    <StyledCustomToolbar className={className}>
    {handleAdd && (
      <div title="Add Row">
        <PlusIcon
          className={`${canAdd ? 'enabled' : ''}`}
          onClick={handleAdd}
        />
      </div>
    )}
    {handleEdit && (
      <div title="Edit Row">
        <PencilIcon
          className={`${canEdit ? 'enabled': ''}`}
          onClick={handleEdit}
        />
      </div>
    )}
    {handleDelete && (
      <div title="Delete Row(s)">
        <TrashIcon
          className={`${canDelete ? 'enabled': ''}`}
          onClick={handleDelete}
        />
      </div>
    )}
    {handleReset && (
      <div title="Reset Table">
        <ReplyIcon
          aria-disabled={!canReset}
          className={`${canReset ? 'enabled': ''}`}
          onClick={canReset ? handleReset : undefined}
        />
      </div>
    )}
    </StyledCustomToolbar>
  )

}
