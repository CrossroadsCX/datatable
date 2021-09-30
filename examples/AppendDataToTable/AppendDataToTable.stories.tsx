import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Column } from 'react-table'
import faker from 'faker'

import { DataTable, DataTableProps } from '../../src/DataTable'

export default {
  title: 'examples/AppendingData',
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

const Template: Story<DataTableProps<PersonData>> = (args) => {
  const { data: initialData } = args

  const [data, setData] = React.useState(initialData)

  const handleChange = (updatedData: PersonData[]) => {
    console.log("Handle Change")
    console.log(data)
    // We can either set the new data on the parent here
    setData(updatedData)

    // Or call an API to make an update mutation
    // ... GraphQL call goes here
  }

  // This is an example of an external data append
  // This could also pull new data from an API
  const addPerson = () => {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const age = faker.datatype.number(100)
    const person: Person = {
      firstName,
      lastName,
      age,
    }

    setData([...data, person])
  }

  return (
    <>
      <button onClick={() => addPerson()}>Add Person</button>
      <DataTable<PersonData> {...args} data={data} handleChange={handleChange} />
    </>
  )
}

export const AppendPerson = Template.bind({})

AppendPerson.args = {
  data,
  columns,
  defaultItem,
}
