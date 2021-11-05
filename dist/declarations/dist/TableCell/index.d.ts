import React from 'react';
import { Row, Column } from 'react-table';
export declare type EditableCellProps = {
    value: string;
    row: Row;
    column: Column;
    isEditable: boolean;
    onChange: (columnId: string, value: unknown) => void;
    selectable: boolean;
    index: number;
};
export declare const EditableCell: React.FC<EditableCellProps>;
