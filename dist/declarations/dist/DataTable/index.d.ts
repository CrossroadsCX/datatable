import React, { PropsWithChildren, ReactElement } from 'react';
import { TableOptions } from 'react-table';
export interface DataTableProps<T extends Record<string, unknown>> extends TableOptions<T> {
    defaultItem?: T;
    name?: string;
    handleChange: (data: T[]) => void;
    selectable?: boolean;
}
export declare const DataTable: <T extends Record<string, unknown>>(props: React.PropsWithChildren<DataTableProps<T>>) => ReactElement;
