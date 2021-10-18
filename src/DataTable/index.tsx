import React, {
  PropsWithChildren, ReactElement, useEffect, useMemo, useRef, useState,
} from 'react';

import {
  Column,
  HeaderGroup,
  Hooks,
  Row,
  TableOptions,
  useRowSelect,
  useTable,
  usePagination,
} from 'react-table';

import filter from 'lodash/filter'
import { DefaultTheme } from 'styled-components'

import { TableThemeProvider } from '../Theme'
import { StyledDataTable } from './styled'

import { TableToolbar, TableToolbarProps } from '../TableToolbar';
import { TableRow, TableRowProps } from '../TableRow';
import { EditableCell } from '../TableCell';
import { Pagination } from '../Pagination';
import { selectionHook, usePrevious } from '../utils';
import { defaultTheme } from '../Theme'

export interface OnFetchDataArgs {
  pageIndex: number
  pageSize: number
}

export interface DataTableProps<T extends Record<string, unknown>>
  extends TableOptions<T> {
    // Required props
    columns: Column<T>[]
    data: T[]
    paginated: boolean
    selectable: boolean
    handleChange: (data: T[]) => void

    // Optional props
    defaultItem?: T
    disableToolbar?: boolean
    theme?: DefaultTheme,
    handleFetchData?: (args: OnFetchDataArgs) => Promise<void>

    // Component overrides
    tableRow?: <T extends Record<string, unknown>>(
      props: TableRowProps<T>,
    ) => ReactElement,
    tableToolbar?: (
      props: TableToolbarProps,
    ) => ReactElement,
}

export const DataTable = <T extends Record<string, unknown>>(
  props: PropsWithChildren<DataTableProps<T>>,
): ReactElement => {

  // Set up internal react-table hooks to be used by useTable
  const hooks: (((hooks: Hooks<T>) => void) | typeof useRowSelect | typeof usePagination)[] = [
    usePagination,
    useRowSelect,
  ];

  // Only set this value if we're able to delete rows
  let handleDelete;

  const {
    data,
    columns,
    defaultItem,
    disableToolbar = false,
    handleChange,
    handleFetchData = undefined,
    paginated = false,
    selectable = false,
    tableRow,
    tableToolbar,
    theme = defaultTheme,
  } = props;

  /** Table State */
  const [incomingState, setIncomingState] = useState(data)
  const [editing, setEditing] = useState<number | null>(null)
  const [tableData, setData] = useState<T[]>(data)
  const initialRenderRef = useRef(true)
  const overrideDataRef = useRef(false)

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

  // Set up the default column for useTable
  const defaultColumn = useMemo(() => ({
    Cell: EditableCell,
  }), []);

  // Local function passed to useTable and can be used in other components
  const saveRow = (row: Row<T>) => {
    if (editing === null) return;
    const { index, values } = row;
    const newData: T[] = [...tableData];
    newData[index] = values as T;

    setData(newData);
    setEditing(null);
    toggleAllRowsSelected(false);
  };

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

  const {
    rows,
    headerGroups,
    getTableProps,
    getTableBodyProps,
    prepareRow,
    selectedFlatRows,
    toggleAllRowsSelected,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable<T>(
    {
      ...props,
      data: tableData,
      defaultColumn,
      columns,
      saveRow,
      pageCount: -1,
      manualPagination: handleFetchData ? true : false,
    },
    ...hooks
    )

  const prevPageProps = usePrevious({ pageIndex, pageSize })

  // Watch the table data for changes & report back to parent
  useEffect(() => {
    if (
      !editing &&
      !initialRenderRef.current &&
      !overrideDataRef.current &&
      handleChange
    ) {
      handleChange(tableData);
    }

    initialRenderRef.current = false;
  }, [tableData, editing]);

  // If the incoming data changes, override the table data
  useEffect(() => {
    if (!initialRenderRef.current) {
      overrideDataRef.current = true
      setData(data)
    }

    overrideDataRef.current = false
  }, [data])

  // If an onFetchData handler is passed, use it to pull new data on page change
  useEffect(() => {
    if (
      handleFetchData &&
      (pageSize !== prevPageProps?.pageSize || pageIndex !== prevPageProps?.pageIndex)
    ) {
      handleFetchData({ pageIndex, pageSize })
    }
  }, [handleFetchData, pageIndex, pageSize ])

  const paginationProps = {
    pageIndex,
    pageSize,
    pageCount,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    async: handleFetchData ? true : false,
  }

  const TableRowRender = tableRow ? tableRow : TableRow
  const ToolbarRender = tableToolbar ? tableToolbar : TableToolbar

  return (
    <>
      <TableThemeProvider theme={theme}>
        {(!disableToolbar || tableToolbar) ? (
          <ToolbarRender
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
                  {!paginated ?
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
                  :
                    page.map((row: Row<T>) => {
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
      {paginated ?  <Pagination {...paginationProps} /> : null}
      </TableThemeProvider>
    </>
  );
};
