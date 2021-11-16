import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ColumnInterface } from 'react-table'

import { DataTable, DataTableProps } from '../../src/DataTable'

export default {
  title: 'examples/SelectionWithElementCells',
  component: DataTable,
} as Meta

type CarModel = 'Ford' | 'Acura' | 'Honda'
type CarColor = 'Red' | 'Black' | 'White' | 'Blue'

type Car = {
  model: CarModel
  year: number
  color: CarColor
}

type CarData = Car & {
  subRows?: CarData[]
}

const carData = [
  {
    model: <a href='#'>Acura</a>,
    year: 2019,
    color: 'Red'
  },
  {
    model: <a href='#'>Ford</a>,
    year: 2020,
    color: 'Blue'
  }
]

const cars = [
  { label: 'Acura', value: '1' },
  { label: 'Ford', value: '2' },
  { label: 'Honda', value: '3' }
]

const handleOnCreate = (option: string) => {
  const newOption = {
    value: option.toLowerCase().replace(/\W/g, ''),
    label: option,
  }
  cars.push(newOption)
}

const columns: ColumnInterface<CarData>[] = [
  {
    Header: 'Model',
    accessor: 'model',
    options: cars,
    handleOnCreate: handleOnCreate
  },
  {
    Header: 'Year',
    accessor: 'year',
  },
  {
    Header: 'Color',
    accessor: 'color',
  },
]

const defaultItem = {
  model: '',
  year: '',
  color: '',
}

const handleChange = (newData: CarData) => {
  console.log(newData)
}

const Template: Story<DataTableProps < CarData >> = (args) => <DataTable<CarData> {...args} />

export const Basic = Template.bind({})

Basic.args = {
  data: carData,
  columns,
  defaultItem,
  selectable: true,
  handleChange,
}
