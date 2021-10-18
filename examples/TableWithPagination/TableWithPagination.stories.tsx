import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Column } from 'react-table'

import { DataTable, DataTableProps } from '../../src/DataTable'

export default {
  title: 'examples/TableWithPagination',
  component: DataTable,
} as Meta;

type Person = {
  firstName: string
  lastName: string
  age: number
}

const data = [
  {
    firstName: "Maria",
    lastName: "Santana",
    age: 31
  },
  {
    firstName: "Flynn",
    lastName: "Keller",
    age: 24
  },
  {
    firstName: "Betty",
    lastName: "Hood",
    age: 24
  },
  {
    firstName: "Salinas",
    lastName: "Sullivan",
    age: 31
  },
  {
    firstName: "Beatriz",
    lastName: "Higgins",
    age: 28
  },
  {
    firstName: "Jenna",
    lastName: "Clayton",
    age: 21
  },
  {
    firstName: "Sutton",
    lastName: "Talley",
    age: 26
  },
  {
    firstName: "Curry",
    lastName: "Emerson",
    age: 20
  },
  {
    firstName: "Alta",
    lastName: "Clay",
    age: 34
  },
  {
    firstName: "Robin",
    lastName: "Hancock",
    age: 34
  },
  {
    firstName: "Elsa",
    lastName: "Bell",
    age: 30
  },
  {
    firstName: "Claudette",
    lastName: "Chambers",
    age: 31
  },
  {
    firstName: "Sweet",
    lastName: "Haley",
    age: 32
  },
  {
    firstName: "Levy",
    lastName: "Shields",
    age: 20
  },
  {
    firstName: "Avila",
    lastName: "Coffey",
    age: 21
  },
  {
    firstName: "Mcneil",
    lastName: "Keith",
    age: 31
  },
  {
    firstName: "Kane",
    lastName: "Guerrero",
    age: 23
  },
  {
    firstName: "Cheri",
    lastName: "Kidd",
    age: 33
  },
  {
    firstName: "Page",
    lastName: "Mcfarland",
    age: 22
  },
  {
    firstName: "Haynes",
    lastName: "Burris",
    age: 22
  }
]

const columns: Column<Person>[] = [
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

const Template: Story<DataTableProps<Person>> = (args) => {

  return (
    <>
      <DataTable<Person> {...args} />
    </>
  )
}

export const PaginationTable = Template.bind({})

PaginationTable.args = {
  data,
  columns,
  paginated: true,
}
