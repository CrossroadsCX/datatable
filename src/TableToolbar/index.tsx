import React from 'react';

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

export const TableToolbar: React.FC<TableToolbarProps> = ({
  canAdd = true,
  canDelete = true,
  canEdit = false,
  canReset = true,
  handleAdd,
  handleDelete,
  handleEdit,
  handleReset,
}) => (
  <div className="flex w-full m-4">
    {handleAdd && (
      <div title="Add Row">
        <PlusIcon
          className={`w-6 ${canAdd ? 'text-gray-400 hover:text-gray-700 cursor-pointer' : 'text-gray-200'} mx-2`}
          onClick={handleAdd}
        />
      </div>
    )}
    {handleEdit && (
      <div title="Edit Row">
        <PencilIcon
          className={`w-6 ${canEdit ? 'text-gray-400 hover:text-gray-700 cursor-pointer' : 'text-gray-200'} mx-2`}
          onClick={handleEdit}
        />
      </div>
    )}
    {handleDelete && (
      <div title="Delete Row(s)">
        <TrashIcon
          className={`w-6 ${canDelete ? 'text-gray-400 hover:text-gray-700 cursor-pointer' : 'text-gray-200'}  mx-2`}
          onClick={handleDelete}
        />
      </div>
    )}
    {handleReset && (
      <div title="Reset Table">
        <ReplyIcon
          aria-disabled={!canReset}
          className={`w-6 ${canReset ? 'text-gray-400 hover:text-gray-700 cursor-pointer' : 'text-gray-200'} mx-2`}
          onClick={canReset ? handleReset : undefined}
        />
      </div>
    )}
  </div>
);
