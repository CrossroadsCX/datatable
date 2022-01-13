import React from 'react'
import { StyledPagination } from './styled'
import {
  ArrowSmRightIcon, ArrowSmLeftIcon, ChevronRightIcon, ChevronLeftIcon,
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
              <ChevronLeftIcon 
                onClick={() => previousPage()} 
                className={`${canPreviousPage ? 'enabled': ''}`}              
              />
            </div>
            <div>
              <span>
                {` Previous`}
              </span>
              <span>
                <input
                  type="number"
                  defaultValue={pageIndex + 1}
                  min={1}
                  max={pageOptions.length}
                  onChange={e => {
                      const page = e.target.value ? Number(e.target.value) - 1 : 0
                      gotoPage(page)
                    }}
                  style={{ width: '35px', height: '15px', marginLeft:'8px', marginRight:'8px' }}
                />
              </span>
              <span>
                out of {pageOptions.length}
              </span>
              <span>
                {` Next`}
              </span>
            </div>
            <div>
              <ChevronRightIcon 
                onClick={() => nextPage()} 
                className={`${canNextPage ? 'enabled': ''}`}
              />
            </div>
          </StyledPagination>
      )
}