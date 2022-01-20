import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Column, ColumnInterface } from 'react-table'

import { DataTable, DataTableProps, HotKeys } from '../../src/DataTable'

export default {
  title: 'examples/CustomHotKeys',
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
    model: '1',
    year: 2019,
    color: 'Red'
  },
  {
    model: '3',
    year: 2020,
    color: 'Blue'
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
]

const defaultItem = {
  model: '',
  year: '',
  color: '',
}

const handleChange = (newData: CarData) => {
  console.log(newData)
}

const hotkeys: HotKeys = {
  saveItemHotKey: 'alt+a',
  newItemHotKey: 'ctrl+n',
  cancelHotKey: 'esc',
}

const Template: Story<DataTableProps < CarData >> = (args) => <DataTable<CarData> {...args} />

export const Basic = Template.bind({})

Basic.args = {
  data: carData,
  columns,
  defaultItem,
  selectable: true,
  handleChange,
  hotkeys,
}
