import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Column } from 'react-table'
import faker from 'faker'

import { DataTable, DataTableProps } from '../../src/DataTable'

import { defaultTheme } from '../../src/Theme'

import type { DefaultTheme } from '../../src/Theme'

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

const data = [
  {
    firstName: 'Bill',
    lastName: 'Murray',
    age: 25,
  },
  {
    firstName: 'Dan',
    lastName: 'Aykroyd',
    age: 25
  }
]

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
    header: '#f5f5f5',
  },
  shadow: null,
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
