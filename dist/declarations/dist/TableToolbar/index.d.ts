import React from 'react';
export declare type TableToolbarProps = {
    canAdd: boolean;
    canDelete: boolean;
    canEdit: boolean;
    canReset: boolean;
    handleAdd?: () => void;
    handleDelete?: () => void;
    handleEdit?: () => void;
    handleReset?: () => void;
};
export declare const TableToolbar: React.FC<TableToolbarProps>;
