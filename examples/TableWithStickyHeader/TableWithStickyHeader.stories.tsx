import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Column } from 'react-table'
import faker from 'faker'

import { DataTable, DataTableProps } from '../../src/DataTable'
import { createPeople } from '../utils'

export default {
  title: 'examples/TableWithStickyHeader',
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

const Template: Story<DataTableProps<PersonData>> = (args) => <DataTable<PersonData> { ...args } />

export const CustomTheme = Template.bind({})

CustomTheme.args = {
  data,
  columns,
  defaultItem,
  disableToolbar: true,
  stickyHeader: true,
}
