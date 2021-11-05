import React from 'react';
import { OptionTypeBase } from 'react-select';
declare type SelectCellProps = {
    options: OptionTypeBase[];
    handleChange: (value: OptionTypeBase | null) => void;
    setFocus: boolean;
};
export declare const SelectCell: React.FC<SelectCellProps>;
export {};
