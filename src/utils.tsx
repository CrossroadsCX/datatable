import React from 'react';
import { CellProps, HeaderProps, Hooks } from 'react-table';
import { CheckIcon } from '@heroicons/react/outline';

export const selectionHook = (hooks: Hooks<any>) => {
  hooks.allColumns.push((columns) => [
    {
      id: '_selector',
      disableResizing: true,
      disableGroupBy: true,
      minWidth: 45,
      width: 45,
      maxWidth: 45,
      Aggregated: undefined,
      Header: ({ getToggleAllRowsSelectedProps }: HeaderProps<any>) => (
        <input
          type="checkbox"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-400 rounded"
          {...getToggleAllRowsSelectedProps()}
        />
      ),
      Cell: ({
        row,
        editing, handleSaveRow,
      }: CellProps<any> & {
        editing: number | null,
        handleSaveRow: () => void
      }) => {
        if (editing === row.index) {
          return (
            <CheckIcon
              className="w-4 border border-green-600 bg-green-200 rounded-md cursor-pointer hover:bg-green-600"
              onClick={handleSaveRow}
            />
          );
        }
        return (
          <input
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            {...row.getToggleRowSelectedProps()}
          />
        );
      },
    },
    ...columns,
  ]);
};
