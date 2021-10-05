import React, {
  PropsWithChildren, ReactElement, useEffect, useMemo, useState,
} from 'react';
import {
  Column, HeaderGroup,  Hooks, Row, TableOptions, useRowSelect, useTable,
} from 'react-table';
import filter from 'lodash/filter';
import { DefaultTheme } from 'styled-components'

import { TableThemeProvider } from '../Theme'
import { StyledDataTable } from './styled'

import { TableToolbar } from '../TableToolbar';
import { TableRow, TableRowProps } from '../TableRow';
import { EditableCell } from '../TableCell';
import { selectionHook } from '../utils';
import { defaultTheme } from '../Theme'
import { isEqual, unionWith } from 'lodash';

export interface DataTableProps<T extends Record<string, unknown>>
  extends TableOptions<T> {
    columns: Column<T>[]
    data: T[]
    defaultItem?: T
    name?: string
    handleChange: (data: T[]) => void
    selectable?: boolean
    tableRow?: <T extends Record<string, unknown>>(
      props: TableRowProps<T>,
    ) => ReactElement,
    disableToolbar?: boolean,
    theme?: DefaultTheme,
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
    data,
    columns,
    defaultItem,
    handleChange,
    selectable = true,
    tableRow,
    disableToolbar = false,
    theme = defaultTheme
  } = props;

  /** Table State */
  const [incomingState, setIncomingState] = useState(data);
  const [editing, setEditing] = useState<number | null>(null);
  const [tableData, setData] = useState<T[]>(data);
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
    const newData: T[] = [...tableData];
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
      data: tableData,
      defaultColumn,
      columns,
      initialState: incomingState,
      saveRow,
    },
    ...hooks,
  );

  const handleAdd = () => {
    if (!defaultItem) {
      console.error('No default item set, cannot add rows.');
      return;
    }

    const updatedData = [...tableData, defaultItem];

    setData(updatedData);
    setEditing(updatedData.length - 1);
  };

  const handleReset = () => {
    setData(data);
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
      handleChange(tableData);
    }

    // If our incoming data prop is different than previous incoming data
    if (!isEqual(data, incomingState)) {
      // Merge the new data with what's in the table
      const newTableData: T[] = unionWith(data, tableData, isEqual)

      setData(newTableData)
      setIncomingState(data)
    }

    setInitialRender(false);
  }, [data, editing]);

  const TableRowRender = tableRow ? tableRow : TableRow

  return (
    <>
      <TableThemeProvider theme={theme}>
        {!disableToolbar ? (
          <TableToolbar
          canAdd={editing === null}
          canDelete={selectedFlatRows.length > 0}
          canEdit={selectedFlatRows.length === 1}
          canReset={tableData.length !== data.length}
          handleAdd={handleAdd}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleReset={handleReset}
        />
      ): null}

      <StyledDataTable>
        {/* The following divs are styled in DataTable/styled.tsx  */}
        <div className="table-wrapper">
          <div className="table-wrapper-inner">
            <div className="table-wrapper-border">
              <table {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup: HeaderGroup<T>, rowIndex: number) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column: Column<T>) => (
                        <th
                          key={rowIndex}
                          {...column.getHeaderProps()}
                          scope="col"
                        >
                          {column.render('Header')}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  {...getTableBodyProps()}
                >
                  {
                    rows.map((row: Row<T>) => {
                      prepareRow(row);

                      return (
                        <TableRowRender<T>
                          key={row.index}
                          row={row}
                          editing={editing}
                          saveRow={saveRow}
                        />
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </StyledDataTable>
      </TableThemeProvider>
    </>
  );
};
