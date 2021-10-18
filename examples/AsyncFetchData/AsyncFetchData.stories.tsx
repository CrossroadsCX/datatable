import React, { useMemo, useRef, useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Column } from 'react-table'

import { createPeople } from '../utils'
import type { Person } from '../utils'

import { DataTable, DataTableProps, OnFetchDataArgs } from '../../src/DataTable'

export default {
  title: 'examples/AsyncFetchData',
  component: DataTable,
} as Meta

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

const Template: Story<DataTableProps<Person>> = (args) => {
  const [people, setPeople] = useState(createPeople(10))

  const initialData = useMemo(() => people, [people])

  const handleFetchData = async ({ pageIndex, pageSize }: OnFetchDataArgs) => {
    console.log('Paging:')
    console.log(pageIndex, pageSize)
    const newPeople = createPeople(pageSize)
    setPeople(newPeople)
  }

  return (<DataTable<Person> data={initialData} handleFetchData={handleFetchData} {...args} />)
}

export const AsyncTable = Template.bind({})

AsyncTable.args = {
  columns,
  paginated: true,
}
