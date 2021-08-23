import { ReactElement } from 'react';
import { Row } from 'react-table';
export declare type TableRowProps<T extends Record<string, unknown>> = {
    row: Row<T>;
    editing: number | null;
    saveRow: (row: Row<T>) => void;
};
export declare const TableRow: <T extends Record<string, unknown>>(props: TableRowProps<T>) => ReactElement;
