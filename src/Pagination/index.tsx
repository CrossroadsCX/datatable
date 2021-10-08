import React from 'react'
import { StyledPagination } from './styled'
import {
  ArrowSmRightIcon, ArrowSmLeftIcon, ChevronDoubleRightIcon, ChevronDoubleLeftIcon,
} from '@heroicons/react/outline';

export type PaginationProps = {
    gotoPage: (numberPage: number) => void, 
    canPreviousPage: boolean,
    previousPage: () => void,
    canNextPage: boolean,
    nextPage: () => void,
    pageIndex: number,
    pageOptions: number[],
    pageSize: number, 
    pageCount: number,
    setPageSize: (numberSize: number) => void,
}

export const Pagination: React.FC<PaginationProps> = ({
    gotoPage,
    canPreviousPage,
    previousPage,
    canNextPage,
    nextPage,
    pageIndex,
    pageOptions, 
    pageSize,
    pageCount,
    setPageSize
  }) => {

    return (
        <StyledPagination className="pagination">
            <div>
              <span>
                Page{' '}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
              </span>
              <span>
                | Go to page:{' '}
                <input
                  type="number"
                  defaultValue={pageIndex + 1}
                  onChange={e => {
                      const page = e.target.value ? Number(e.target.value) - 1 : 0
                      gotoPage(page)
                    }}
                  style={{ width: '100px' }}
                />
              </span>{' '}
              <select
                value={pageSize}
                onChange={e => {
                  setPageSize(Number(e.target.value))
                }}
              >
                {[10, 20, 30, 40, 50].map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>

            </div>
            <div>
              <ChevronDoubleLeftIcon 
                onClick={() => gotoPage(0)} 
                className={`${canPreviousPage ? 'enabled': ''}`}
              />
              <ArrowSmLeftIcon 
                onClick={() => previousPage()} 
                className={`${canPreviousPage ? 'enabled': ''}`}              
              />
              <ArrowSmRightIcon 
                onClick={() => nextPage()} 
                className={`${canNextPage ? 'enabled': ''}`}
              />
              <ChevronDoubleRightIcon 
                onClick={() => gotoPage(pageCount - 1)} 
                className={`${canNextPage ? 'enabled': ''}`}
              />
            </div>
          </StyledPagination>
      )
}