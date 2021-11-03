import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ColumnInterface } from 'react-table'

import { DataTable, DataTableProps } from '../../src/DataTable'

export default {
  title: 'examples/CellWithInputTypes',
  component: DataTable,
} as Meta

type CarModel = 'Ford' | 'Acura' | 'Honda'
type CarColor = 'Red' | 'Black' | 'White' | 'Blue'

type Car = {
  model: CarModel
  year: number
  color: CarColor
  delivery: string
  quantity: number
}

type CarData = Car & {
  subRows?: CarData[]
}

const carData = [
  {
    model: '1',
    year: 2019,
    color: 'Red',
    delivery: '2021-01-20',
    quantity: 5,
  },
  {
    model: '3',
    year: 2020,
    color: 'Blue',
    delivery: '2021-05-01',
    quantity: 5,
  }
]

const columns: ColumnInterface<CarData>[] = [
  {
    Header: 'Model',
    accessor: 'model',
    options: [
      {
        label: 'Acura',
        value: '1',
      },
      {
        label: 'Ford',
        value: '2',
      },
      {
        label: 'Honda',
        value: '3',
      }
    ]
  },
  {
    Header: 'Year',
    accessor: 'year',
  },
  {
    Header: 'Color',
    accessor: 'color',
  },
  {
    Header: 'Delivery',
    accessor: 'delivery',
    inputType: 'date',
  },
  {
    Header: 'Quantity',
    accessor: 'quantity',
    inputType: 'number',
  },
]

const defaultItem = {
  model: '',
  year: '',
  color: '',
  delivery: '',
  quantity: '',
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
