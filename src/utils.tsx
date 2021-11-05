import { useEffect, useRef } from 'react';
import { HeaderProps, Hooks, Cell } from 'react-table';
import { CheckIcon } from '@heroicons/react/outline';
import { IndeterminateCheckbox } from './IndeterminateCheckbox';
import { useHotkeys, Options } from 'react-hotkeys-hook';

export const selectionHook: <T extends Record<string, unknown>>(hooks: Hooks<T>)  => void
= <T extends Record<string, unknown>>(hooks: Hooks<T>)  => {
  hooks.allColumns.push((columns) => [
    {
      id: '_selector',
      disableResizing: true,
      disableGroupBy: true,
      minWidth: 45,
      width: 45,
      maxWidth: 45,
      Aggregated: undefined,
      Header: ({ getToggleAllRowsSelectedProps }: HeaderProps<Record<string, unknown>>) => (
        <IndeterminateCheckbox
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-400 rounded"
         {...getToggleAllRowsSelectedProps()}
        />
      ),
      Cell: ({
        row,
        editing,
        handleSaveRow,
      }: Cell & {
        editing: number | null,
        handleSaveRow: () => void
      }) => {
        if (editing === row.index) {
          const optionsHot: Options = {
            enableOnTags: ['INPUT'],
          }

          useHotkeys('ctrl+enter', () => handleSaveRow(), optionsHot);
          return (
            <CheckIcon
              className="w-4 border border-green-600 bg-green-200 rounded-md cursor-pointer hover:bg-green-600"
              onClick={handleSaveRow}
            />
          );
        }
        return (
          <IndeterminateCheckbox
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            {...row.getToggleRowSelectedProps()}
          />
        );
      },
    },
    ...columns,
  ]);
};

export function usePrevious<T> (value: T): T {
  const ref = useRef(value)
  
  useEffect(() => {
    ref.current = value
  })
  return ref.current

}
