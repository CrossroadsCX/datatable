import React, { PropsWithChildren, ReactElement } from 'react';
import { Column, TableOptions } from 'react-table';
import { TableRowProps } from '../TableRow';
export interface DataTableProps<T extends Record<string, unknown>> extends TableOptions<T> {
    columns: Column<T>[];
    data: T[];
    defaultItem?: T;
    name?: string;
    handleChange: (data: T[]) => void;
    selectable?: boolean;
    tableRow?: <T extends Record<string, unknown>>(props: TableRowProps<T>) => ReactElement;
    disableToolbar: boolean;
}
export declare const DataTable: <T extends Record<string, unknown>>(props: React.PropsWithChildren<DataTableProps<T>>) => ReactElement;
