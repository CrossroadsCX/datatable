import { DataTable } from './DataTable';
import { EditableCell } from './TableCell';
import { TableRow } from './TableRow';
import { TableToolbar } from './TableToolbar';
import { Column } from 'react-table';
export { DataTable, EditableCell, TableRow, TableToolbar, };
export type { Column };
export type { DataTableProps } from './DataTable';
export type { EditableCellProps } from './TableCell';
export type { TableRowProps } from './TableRow';
export type { TableToolbarProps } from './TableToolbar';
import { MouseEventHandler } from 'react';
import { TableInstance } from 'react-table';
declare module 'react-table' {
    interface UseFlexLayoutInstanceProps<D extends Record<string, unknown>> {
        totalColumnsMinWidth: number;
    }
    interface UseFlexLayoutColumnProps<D extends Record<string, unknown>> {
        totalMinWidth: number;
    }
    interface TableOptions<D extends Record<string, unknown>> extends UseExpandedOptions<D>, UseFiltersOptions<D>, UseFiltersOptions<D>, UseGlobalFiltersOptions<D>, UseGroupByOptions<D>, UsePaginationOptions<D>, UseResizeColumnsOptions<D>, UseRowSelectOptions<D>, UseSortByOptions<D> {
        saveRow: (row: Row<D>) => void;
    }
    interface Hooks<D extends Record<string, unknown> = Record<string, unknown>> extends UseExpandedHooks<D>, UseGroupByHooks<D>, UseRowSelectHooks<D>, UseSortByHooks<D> {
    }
    interface TableInstance<D extends Record<string, unknown> = Record<string, unknown>> extends UseColumnOrderInstanceProps<D>, UseExpandedInstanceProps<D>, UseFiltersInstanceProps<D>, UseGlobalFiltersInstanceProps<D>, UseGroupByInstanceProps<D>, UsePaginationInstanceProps<D>, UseRowSelectInstanceProps<D>, UseFlexLayoutInstanceProps<D>, UsePaginationInstanceProps<D>, UseSortByInstanceProps<D> {
    }
    interface TableState<D extends Record<string, unknown> = Record<string, unknown>> extends UseColumnOrderState<D>, UseExpandedState<D>, UseFiltersState<D>, UseGlobalFiltersState<D>, UseGroupByState<D>, UsePaginationState<D>, UseResizeColumnsState<D>, UseRowSelectState<D>, UseSortByState<D> {
        rowCount: number;
    }
    interface ColumnInterface<D extends Record<string, unknown> = Record<string, unknown>> extends UseFiltersColumnOptions<D>, UseGroupByColumnOptions<D>, UseResizeColumnsColumnOptions<D>, UseSortByColumnOptions<D> {
        align?: string;
        options?: string[];
    }
    interface ColumnInstance<D extends Record<string, unknown> = Record<string, unknown>> extends UseFiltersColumnProps<D>, UseGroupByColumnProps<D>, UseResizeColumnsColumnProps<D>, UseFlexLayoutColumnProps<D>, UseSortByColumnProps<D> {
    }
    interface Cell<D extends Record<string, unknown> = Record<string, unknown>> extends UseGroupByCellProps<D> {
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
export declare type TableMouseEventHandler = (instance: TableInstance<T>) => MouseEventHandler;
