import { DataTable } from './DataTable';
import { EditableCell } from './TableCell';
import { TableRow } from './TableRow';
import { TableToolbar } from './TableToolbar';
import { SelectOption } from './TableCell/SelectCell';
import { defaultTheme } from './Theme';
export { defaultTheme, DataTable, EditableCell, TableRow, TableToolbar, };
export type { Column } from 'react-table';
export type { DataTableProps } from './DataTable';
export type { EditableCellProps } from './TableCell';
export type { TableRowProps } from './TableRow';
export type { TableToolbarProps } from './TableToolbar';
export type { TableTheme } from './Theme';
import { MouseEventHandler } from 'react';
import { TableInstance } from 'react-table';
declare module 'react-table' {
    interface UseFlexLayoutInstanceProps {
        totalColumnsMinWidth: number;
    }
    interface UseFlexLayoutColumnProps {
        totalMinWidth: number;
    }
    interface TableOptions<D> extends UseExpandedOptions<D>, UseFiltersOptions<D>, UseFiltersOptions<D>, UseGlobalFiltersOptions<D>, UseGroupByOptions<D>, UsePaginationOptions<D>, UseResizeColumnsOptions<D>, UseRowSelectOptions<D>, UseSortByOptions<D> {
        saveRow?: (row: Row<D>) => void;
    }
    interface Hooks<D> extends UseExpandedHooks<D>, UseGroupByHooks<D>, UseRowSelectHooks<D>, UseSortByHooks<D> {
    }
    interface TableInstance<D> extends UseColumnOrderInstanceProps<D>, UseExpandedInstanceProps<D>, UseFiltersInstanceProps<D>, UseGlobalFiltersInstanceProps<D>, UseGroupByInstanceProps<D>, UsePaginationInstanceProps<D>, UseRowSelectInstanceProps<D>, UseFlexLayoutInstanceProps, UsePaginationInstanceProps<D>, UseSortByInstanceProps<D> {
    }
    interface TableState<D> extends UseColumnOrderState<D>, UseExpandedState<D>, UseFiltersState<D>, UseGlobalFiltersState<D>, UseGroupByState<D>, UsePaginationState<D>, UseResizeColumnsState<D>, UseRowSelectState<D>, UseSortByState<D> {
        rowCount: number;
    }
    interface ColumnInterface<D> extends UseFiltersColumnOptions<D>, UseGroupByColumnOptions<D>, UseResizeColumnsColumnOptions<D>, UseSortByColumnOptions<D> {
        align?: string;
        options?: SelectOption<unknown>[];
        inputType?: string;
        handleOnCreate?: (option: string) => void;
    }
    interface ColumnInstance<D> extends UseFiltersColumnProps<D>, UseGroupByColumnProps<D>, UseResizeColumnsColumnProps<D>, UseFlexLayoutInstanceProps, UseSortByColumnProps<D> {
    }
    interface Cell {
    }
    interface Row<D extends object = {}> extends UseExpandedRowProps<D>, UseGroupByRowProps<D>, UseRowSelectRowProps<D> {
    }
    interface TableCommonProps {
        title?: string;
        'aria-label'?: string;
    }
    interface TableSortByToggleProps {
        title?: string;
    }
    interface TableGroupByToggleProps {
        title?: string;
    }
}
export declare type TableMouseEventHandler = (instance: TableInstance) => MouseEventHandler;
