import React, {
  PropsWithChildren, ReactElement, Ref, useEffect, useMemo, useState,
} from 'react';

import {
  Column,
  HeaderGroup,
  Hooks,
  Row,
  SortingRule,
  TableOptions,
  useAsyncDebounce,
  useRowSelect,
  useSortBy,
  useTable,
  usePagination,
} from 'react-table';

import filter from 'lodash/filter'
import { DefaultTheme } from 'styled-components'
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/outline';

import InfiniteScroll from 'react-infinite-scroll-component';
import { useHotkeys, Options } from 'react-hotkeys-hook';
import { TableThemeProvider } from '../Theme'
import { StyledDataTable } from './styled'

import { TableToolbar, TableToolbarProps } from '../TableToolbar';
import { TableRow, TableRowProps } from '../TableRow';
import { EditableCell } from '../TableCell';
import { Pagination } from '../Pagination';
import { selectionHook, usePrevious } from '../utils';
import { defaultTheme } from '../Theme'

export interface HandleFetchDataArgs<T> {
  pageIndex?: number
  pageSize: number
  pageCount?: number
  sortBy: Array<SortingRule<T>>,
}

export interface DataTableProps<T extends Record<string, unknown>>
  extends TableOptions<T> {
    // Required props
    columns: Column<T>[]
    data: T[]
    paginated?: boolean | 'scroll'
    selectable?: boolean
    handleChange: (data: T[]) => void

    // Optional props
    defaultItem?: T
    disableToolbar?: boolean
    theme?: DefaultTheme,
    handleFetchData?: (args: HandleFetchDataArgs<T>) => Promise<void>
    stickyHeader?: boolean,
    tableRef?: Ref<HTMLTableElement> | null,
    // Component overrides
    tableRow?: <T extends Record<string, unknown>>(
      props: TableRowProps<T>,
    ) => ReactElement,
    tableToolbar?: (
      props: TableToolbarProps,
    ) => ReactElement,
    isEditing?: boolean,
}

export const DataTable = <T extends Record<string, unknown>>(
  props: PropsWithChildren<DataTableProps<T>>,
): ReactElement => {

  // Set up internal react-table hooks to be used by useTable
  const hooks: (((hooks: Hooks<T>) => void) | typeof useRowSelect | typeof usePagination)[] = [
    useSortBy,
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
    handleFetchData,
    paginated = false,
    selectable = false,
    tableRef,
    tableRow,
    tableToolbar,
    theme = defaultTheme,
    stickyHeader = false,
    isEditing = false,
  } = props;

  /** Table State */
  const [editing, setEditing] = useState<number | null>(null)
  const [tableData, setData] = useState<T[]>(data)
  const resetTable = handleFetchData ? false : true

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
    handleChange(newData);
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

  const handleCancel = () => {
    const lastRow = tableData.length - 1
    if(data.length == tableData.length || editing != lastRow){
      setData(tableData);
      setEditing(tableData.length)
    } else {
      const updatedData = filter(tableData, (item, index) => index != lastRow);
      setData(updatedData);
      setEditing(updatedData.length);
    }
  }

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
    state: { pageIndex, pageSize, sortBy },
  } = useTable<T>(
    {
      ...props,
      data: tableData,
      defaultColumn,
      columns,
      saveRow,
      pageCount: -1,
      // manualPagination: handleFetchData ? true : false,
      autoResetPage: resetTable,
      autoResetExpanded: resetTable,
      autoResetGroupBy: resetTable,
      autoResetSelectedRows: resetTable,
      autoResetSortBy: resetTable,
      autoResetFilters: resetTable,
    },
    ...hooks
    )

  const prevPageProps = usePrevious({ pageIndex, pageSize, sortBy })

  // If the incoming data changes, override the table data
  useEffect(() => {
    setData(data)
    if(data.length == 0 && isEditing){
      handleAdd()
    } else if(isEditing) {
      setEditing(0)
    }
  }, [data, isEditing])

  let handleFetchDataDebounced: (args: HandleFetchDataArgs<T>) => Promise<void>
  if(handleFetchData){
    handleFetchDataDebounced = useAsyncDebounce(handleFetchData, 200)

    // If an handleFetchData handler is passed, use it to pull new data on page change
    useEffect(() => {
      if (
          (pageSize !== prevPageProps?.pageSize && pageSize > 0) ||
          pageIndex !== prevPageProps?.pageIndex
      ) {
        handleFetchDataDebounced({ pageIndex, pageSize, sortBy })
      }
    }, [useAsyncDebounce, handleFetchData, pageIndex, pageSize, sortBy])
  }

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

  const Table = () =>  {
    useHotkeys('ctrl+n', () => handleAdd());

    const optionsHot: Options = {
      enableOnTags: ['INPUT'],
    }

    useHotkeys('esc', () => handleCancel(), optionsHot);

    return (
    <table {...getTableProps()} ref={tableRef}>
      <thead>
        {headerGroups.map((headerGroup: HeaderGroup<T>) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                scope="col"
              >
                {column.render('Header')}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? <ArrowSmDownIcon className="sort-indicator" />
                      : <ArrowSmUpIcon className="sort-indicator" />
                    : ''
                  }
                </span>
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
                selectable={selectable}
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
                selectable={selectable}
              />
            )
          })
        }
      </tbody>
    </table>
  )
}

  const InfiniteScrollTable = () => (
    <InfiniteScroll
      dataLength={rows.length}
      next={() => handleFetchDataDebounced({ pageSize, pageCount, sortBy })}
      hasMore={true}
      loader={<p>Loading more items...</p>}
    >
      <Table />
    </InfiniteScroll>
  )

  const PaginatedTable = () => (
    <>
      <Table />
      <Pagination {...paginationProps} />
    </>
  )

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

        <StyledDataTable className={stickyHeader ? 'sticky' : ''}>
          {paginated ?
            paginated === 'scroll' ?
              (<InfiniteScrollTable />) :
              (<PaginatedTable />)
            : (<Table />)
          }
        </StyledDataTable>
      </TableThemeProvider>
    </>
  );
};
