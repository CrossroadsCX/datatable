import React, { useMemo, useRef, useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Column } from 'react-table'

import { createPeople } from '../utils'
import type { Person } from '../utils'

import { DataTable, DataTableProps, HandleFetchDataArgs } from '../../src/DataTable'
import { isEmpty, sortBy } from 'lodash'

export default {
  title: 'examples/InfiniteScroll',
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
  const [people, setPeople] = useState<Person[]>(createPeople(10))

  const initialData = useMemo(() => people, [people])

  // We will append new data on fetching
  const handleFetchData = async ({ pageSize }: HandleFetchDataArgs<Person>) => {

    const newPeople = createPeople(pageSize)
    const updatedPeople = people.concat(newPeople)

    console.log(updatedPeople)
    setPeople(updatedPeople)
  }

  return (<DataTable<Person> data={initialData} handleFetchData={handleFetchData} {...args} />)
}

export const AsyncTable = Template.bind({})

AsyncTable.args = {
  columns,
  paginated: 'scroll',
}
