import React from 'react';
export declare type PaginationProps = {
    gotoPage: (numberPage: number) => void;
    canPreviousPage: boolean;
    previousPage: () => void;
    canNextPage: boolean;
    nextPage: () => void;
    pageIndex: number;
    pageOptions: number[];
    pageSize: number;
    pageCount: number;
    setPageSize: (numberSize: number) => void;
};
export declare const Pagination: React.FC<PaginationProps>;
