import React, {
  PropsWithChildren, ReactElement, useEffect, useMemo, useState,
} from 'react';
import {
  Column, Hooks, Row, TableOptions, useRowSelect, useTable,
} from 'react-table';
import filter from 'lodash/filter';

import { FlexColumn } from '../Theme'

import { TableToolbar } from '../TableToolbar';
import { TableRow } from '../TableRow';
import { EditableCell } from '../TableCell';
import { selectionHook } from '../utils';

// import '../index.css';

export interface DataTableProps<T extends Record<string, unknown>>
  extends TableOptions<T> {
    columns: Column<T>[]
    data: T[]
    defaultItem?: T
    name?: string
    handleChange: (data: T[]) => void
    selectable?: boolean
}

export const DataTable = <T extends Record<string, unknown>>(
  props: PropsWithChildren<DataTableProps<T>>,
): ReactElement => {
  const hooks: (((hooks: Hooks<any>) => void) | typeof useRowSelect)[] = [
    useRowSelect,
  ];

  // Only set this value if we're able to delete rows
  let handleDelete;

  const {
    data: initialData,
    columns,
    defaultItem,
    handleChange,
    selectable = true,
  } = props;

  /** Table State */
  const [initialState/* , setInitialState */] = useState({});
  const [editing, setEditing] = useState<number | null>(null);
  const [data, setData] = useState<T[]>(initialData);
  const [initialRender, setInitialRender] = useState(true);

  /*
   *  Selectable Options
   *    Add checkbox inputs in the header / rows with selectionHook
   *    Create the handleDelete handler. This isn't applicable without row selection
   *      It also tells the Toolbar to display the delete icon
   */
  if (selectable) {
    hooks.push(selectionHook);

    handleDelete = () => {
      const indices = selectedFlatRows.map((item) => item.index);

      const updatedData = filter(data, (item, index) => !indices.includes(index));

      setData(updatedData);
    };
  }

  const defaultColumn = useMemo(() => ({
    Cell: EditableCell,
  }), []);

  const saveRow = (row: Row<T>) => {
    if (editing === null) return;
    const { index, values } = row;
    const newData: T[] = [...data];
    newData[index] = values as T;

    setData(newData);
    setEditing(null);
    toggleAllRowsSelected(false);
  };

  const {
    rows,
    headerGroups,
    getTableProps,
    getTableBodyProps,
    prepareRow,
    selectedFlatRows,
    toggleAllRowsSelected,
  } = useTable<T>(
    {
      ...props,
      data,
      defaultColumn,
      columns,
      initialState,
      saveRow,
    },
    ...hooks,
  );

  const handleAdd = () => {
    if (!defaultItem) {
      console.error('No default item set, cannot add rows.');
      return;
    }

    const updatedData = [...data, defaultItem];

    setData(updatedData);
    setEditing(updatedData.length - 1);
  };

  const handleReset = () => {
    setData(initialData);
  };

  const handleEdit = () => {
    if (selectedFlatRows.length !== 1) {
      console.error('Cannot edit row count != 1.');
      return;
    }

    const [selectedRow] = selectedFlatRows;

    setEditing(selectedRow.index);
  };

  useEffect(() => {
    if (!editing && !initialRender && handleChange) {
      handleChange(data);
    }

    setInitialRender(false);
  }, [data, editing]);

  return (
    <>
      <TableToolbar
        canAdd={editing === null}
        canDelete={selectedFlatRows.length > 0}
        canEdit={selectedFlatRows.length === 1}
        canReset={data.length !== initialData.length}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleReset={handleReset}
      />
      <FlexColumn>
      {/* <div className="flex flex-col"> */}
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200" {...getTableProps()}>
                <thead className="bg-gray-50">
                  {headerGroups.map((headerGroup, rowIndex) => (
                    <tr className="border-b border-gray-200" {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps()}
                          scope="col"
                          className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${rowIndex === 0 ? 'text-center border-l border-r border-gray-200' : ''}`}
                        >
                          {column.render('Header')}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  {...getTableBodyProps()}
                  className="bg-white divide-y divide-gray-200"
                >
                  {
                    rows.map((row) => {
                      prepareRow(row);
                      return (
                        <TableRow<T>
                          key={row.index}
                          row={row}
                          editing={editing}
                          saveRow={saveRow}
                        />
                      );
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* </div> */}
      </FlexColumn>
    </>
  );
};
