import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Column } from 'react-table'

import { createPeople } from '../utils'
import type { Person } from '../utils'

import { DataTable, DataTableProps } from '../../src/DataTable'

export default {
  title: 'examples/AsyncFetchData',
  component: DataTable,
} as Meta

const initialData = createPeople(5)

const columns: Column<Person>[] = [
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Age',
    accessor: 'age'
  }
]

const onFetchData = async () => {
  return createPeople(5)
}

const Template: Story<DataTableProps<Person>> = (args) => <DataTable<Person> {...args} />

export const AsyncTable = Template.bind({})

AsyncTable.args = {
  data: initialData,
  columns,
  paginated: true,
  onFetchData,
}
