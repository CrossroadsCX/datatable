import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Column } from 'react-table'

import { DataTable, DataTableProps } from '../../src/DataTable'
import { Stars } from '../TableWithCustomRow/Stars'
import { CustomToolbar } from './CustomToolbar'

export default {
  title: 'examples/TableWithCustomToolbar',
  component: DataTable,
} as Meta;

type Movie = {
  title: string
  year: string
  stars: React.ReactNode
}

type MovieData = Movie & {
  subRows?: MovieData[]
}

const defaultMovie = {
  title: null,
  year: null,
  stars: null,
};

const movieData = [
  {
    title: 'Tombstone',
    year: '1993',
    stars: <Stars stars={5} />
  },
]

const columns: Column<MovieData>[] = [
  {
    Header: 'Title',
    accessor: 'title',
  },
  {
    Header: 'Year Released',
    accessor: 'year',
  },
  {
    Header: 'Rating',
    accessor: 'stars',
  },
]

const Template: Story<DataTableProps<MovieData>> = (args) => <DataTable<MovieData> {...args} />

export const Basic = Template.bind({})

Basic.args = {
  data: movieData,
  columns,
  tableToolbar: CustomToolbar,
  defaultItem: defaultMovie,
}
