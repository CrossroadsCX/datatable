import React from 'react'
import { StyledPaginationBottom, StyledPaginationTop } from './styled'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline';

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
  totalResults: number,
  table: React.ReactElement
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
  setPageSize,
  totalResults,
  table,
}) => {
  //Get the difference between the total results and the max results on the last page
  const difference = - totalResults - (pageCount*pageSize)
  // Fuction to get the range of the showing results
  const getActualResultsRange = () => {
    return (pageIndex + 1 == pageCount ? Math.abs((pageCount * pageSize + difference )) : (pageIndex + 1) * pageSize )
  }

  return (
    <>
      <StyledPaginationTop className="pagination">
        <div>
          {`Showing ${(pageIndex * pageSize) + 1} -  ${getActualResultsRange()} of ${totalResults} results`}
        </div>
        <div>
          <span>
            {`Results per page `}
          </span>
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
      </StyledPaginationTop>
      {table}
      <StyledPaginationBottom className="pagination">
        <div>
          <ChevronLeftIcon
            onClick={() => previousPage()}
            className={`${canPreviousPage ? 'enabled' : ''}`}
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
              style={{ width: '35px', height: '15px', marginLeft: '8px', marginRight: '8px' }}
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
            className={`${canNextPage ? 'enabled' : ''}`}
          />
        </div>
      </StyledPaginationBottom>
    </>
  )
}