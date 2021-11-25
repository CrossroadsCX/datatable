import React, { useMemo, useRef, useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Column } from 'react-table'

import { createPeople } from '../utils'
import type { Person } from '../utils'

import { DataTable, DataTableProps, HandleFetchDataArgs } from '../../src/DataTable'
import { isEmpty, sortBy } from 'lodash'

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
  const [people, setPeople] = useState(createPeople(20))

  const initialData = useMemo(() => people, [people])

  const handleFetchData = async ({ pageIndex, pageSize, sortBy: sortByInput }: HandleFetchDataArgs<Person>) => {
    console.log(pageIndex)
    console.log(pageSize)
    const newPeople = people.concat(createPeople(5))

    if (!isEmpty(sortByInput)) {
      const [sortObject] = sortByInput
      const { id: sortKey } = sortObject

      sortBy(newPeople as Array<Person>, [sortKey])
    }

    setPeople(newPeople)
  }

  return (<DataTable<Person> data={initialData} handleFetchData={handleFetchData} {...args} />)
}

export const AsyncTable = Template.bind({})

AsyncTable.args = {
  columns,
  paginated: true,
}
