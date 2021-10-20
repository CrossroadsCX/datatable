import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Column } from 'react-table'
import faker from 'faker'

import { DataTable, DataTableProps } from '../../src/DataTable'

import { defaultTheme } from '../../src/Theme'

import type { DefaultTheme } from '../../src/Theme'
import { createPeople } from '../utils'

export default {
  title: 'examples/CustomTableTheme',
  component: DataTable,
} as Meta;

type Person = {
  firstName: string
  lastName: string
  age: number
}

type PersonData = Person & {
  subRows?: PersonData[]
}

const data = createPeople(30)

const defaultItem = {
  firstName: null,
  lastName: null,
  age: null,
}

const columns: Column<PersonData>[] = [
  {
    Header: 'First Name',
    accessor: 'firstName'
  },
  {
    Header: 'Last Name',
    accessor: 'lastName'
  },
  {
    Header: 'Age',
    accessor: 'age'
  }
]

const theme: DefaultTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
  },
  shadow: null,
  elements: {
    ...defaultTheme.elements,
    table: {
      ...defaultTheme.elements?.table,
      borderCollapse: 'collapse',
      fontFamily: 'Fira Sane, sans-serif',
    },
    thead: {
      ...defaultTheme.elements?.thead,
      backgroundColor: 'rgb(245, 245, 245)',
      borderBottom: '1px solid #e0e0e1',
    },
    th: {
      ...defaultTheme.elements?.th,
      letterSpacing: '.05em',
    },
    td: {
      ...defaultTheme.elements?.td,
      borderBottom: '1px solid #e0e0e1',
      color: '#828288',
      fontWeight: 400,
    }
  },
  overrides: {
    '.table-wrapper-border': {
      borderRadius: 0,
    }
  }
}

const Template: Story<DataTableProps<PersonData>> = (args) => <DataTable<PersonData> { ...args } />

export const CustomTheme = Template.bind({})

CustomTheme.args = {
  data,
  columns,
  defaultItem,
  disableToolbar: true,
  theme,
}
