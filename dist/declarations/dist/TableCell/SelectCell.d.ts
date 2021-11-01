import React from 'react';
import { OptionTypeBase } from 'react-select';
declare type SelectCellProps = {
    options: OptionTypeBase[];
    handleChange: (value: any) => void;
    setFocus: boolean;
};
export declare const SelectCell: React.FC<SelectCellProps>;
export {};
