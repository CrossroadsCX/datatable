import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Column } from 'react-table'

import { DataTable, DataTableProps } from '../../src/DataTable'

export default {
  title: 'examples/DatableWithColumnFilter',
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
    accessor: 'lastName',
    show: 'false'
  },
  {
    Header: 'Age',
    accessor: 'age'
  }
]

const hiddenColumns =
{
  firstName: true,
  lastName: true,
  age: true,
}

const Template: Story<DataTableProps<PersonData>> = (args) => (
  <>   
    <button type="button" onClick={() => {hiddenColumns.firstName = !hiddenColumns.firstName}}>Hide/Show FirstName</button>
    <button type="button" onClick={() => {hiddenColumns.lastName = !hiddenColumns.lastName}}>Hide/Show FirstName</button>
    <button type="button" onClick={() => {hiddenColumns.age = !hiddenColumns.age}}>Hide/Show Age</button>
    <DataTable<PersonData> {...args} />
  </>
)

export const ColumnFilter = Template.bind({})

ColumnFilter.args = {
  data,
  columns,
  defaultItem,
  disableToolbar: true,
  hiddenColumns
}
