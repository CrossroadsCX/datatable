import React from 'react';
import { DefaultTheme } from 'styled-components';
declare type TableThemeProviderProps = {
    children: React.ReactNode;
    theme: DefaultTheme;
};
export declare const defaultTheme: DefaultTheme;
export declare const TableThemeProvider: ({ children, theme }: TableThemeProviderProps) => JSX.Element;
export {};
