import React from 'react';
import { OptionTypeBase } from 'react-select';
export declare type SelectOption<TValue> = {
    value: TValue;
    label: string;
};
declare type SelectCellProps = {
    options: SelectOption<unknown>[];
    handleChange: (value: OptionTypeBase | null) => void;
    setFocus: boolean;
    defaultValue?: string;
    handleOnCreate?: (option: string) => void;
};
export declare const SelectCell: React.FC<SelectCellProps>;
export {};
