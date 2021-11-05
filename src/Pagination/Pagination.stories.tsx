import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Pagination, PaginationProps } from '.'
import { TableThemeProvider } from '../Theme'
import { DefaultTheme } from 'styled-components'
import { defaultTheme } from '../Theme'

export default {
  title: 'components/DataTable/Pagination',
  component: Pagination,
} as Meta;

const pageIndex = 1
const pageSize = 10
const pageCount = 2
const canPreviousPage = true
const canNextPage = true
const pageOptions = [1,2]

const gotoPage = (pageNumber: number) => {
  console.log('Go to page ' + pageNumber)
}
const nextPage = () => {
  console.log('Next page')
}
const previousPage = () => {
  console.log('Previous')
}
const setPageSize = (pageSize: number) => {
  console.log('PageSize ' + pageSize)
}

const theme: DefaultTheme = defaultTheme

const Template: Story<PaginationProps> = (args) => <TableThemeProvider theme={theme}> <Pagination {...args} /></TableThemeProvider>

export const Basic = Template.bind({})

Basic.args = {
  pageIndex,
  pageSize,
  pageCount,
  canPreviousPage,
  canNextPage,
  pageOptions,
  gotoPage,
  nextPage,
  previousPage,
  setPageSize
}
