import React from 'react';
import { DefaultTheme } from 'styled-components';
declare type TableThemeProviderProps = {
    children: React.ReactNode;
    theme: DefaultTheme;
};
export interface TableTheme extends DefaultTheme, Record<string, unknown> {
}
export declare const defaultTheme: TableTheme;
export declare const TableThemeProvider: ({ children, theme }: TableThemeProviderProps) => JSX.Element;
export {};
