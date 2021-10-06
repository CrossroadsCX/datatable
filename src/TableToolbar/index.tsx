import React, { ReactElement } from 'react';
import { StyledTableToolbar } from './styled'

import {
  PencilIcon, PlusIcon, ReplyIcon, TrashIcon,
} from '@heroicons/react/outline';

export type TableToolbarProps = {
  canAdd: boolean
  canDelete: boolean
  canEdit: boolean
  canReset: boolean
  handleAdd?: () => void,
  handleDelete?: () => void,
  handleEdit?: () => void,
  handleReset?: () => void,
}

export const TableToolbar = (
  props: TableToolbarProps, 
): ReactElement => {
  const { canAdd, 
    canDelete,
    canEdit, 
    canReset, 
    handleAdd, 
    handleDelete, 
    handleEdit, 
    handleReset 
  } = props

  return(
  <StyledTableToolbar>
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
  </StyledTableToolbar>
  )
}
