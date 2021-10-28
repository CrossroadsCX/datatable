import React, { PropsWithChildren, ReactElement } from 'react';
import { Column, SortingRule, TableOptions } from 'react-table';
import { DefaultTheme } from 'styled-components';
import { TableToolbarProps } from '../TableToolbar';
import { TableRowProps } from '../TableRow';
export interface HandleFetchDataArgs<T> {
    pageIndex: number;
    pageSize: number;
    sortBy: Array<SortingRule<T>>;
}
export interface DataTableProps<T extends Record<string, unknown>> extends TableOptions<T> {
    columns: Column<T>[];
    data: T[];
    paginated?: boolean | 'scroll';
    selectable?: boolean;
    handleChange: (data: T[]) => void;
    defaultItem?: T;
    disableToolbar?: boolean;
    theme?: DefaultTheme;
    handleFetchData?: (args: HandleFetchDataArgs<T>) => Promise<void>;
    stickyHeader?: boolean;
    tableRow?: <T extends Record<string, unknown>>(props: TableRowProps<T>) => ReactElement;
    tableToolbar?: (props: TableToolbarProps) => ReactElement;
}
export declare const DataTable: <T extends Record<string, unknown>>(props: React.PropsWithChildren<DataTableProps<T>>) => ReactElement;
