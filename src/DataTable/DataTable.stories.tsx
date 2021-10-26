import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Column } from 'react-table';
import { format } from 'date-fns';

import { DataTable, DataTableProps } from '.';

type Sale = {
  date: string | null
  seller: string | null
  product: string | null
  quantity: number | null
  createdAt: string | null
  client: string | null
}

export type SaleData = Sale & {
  subRows?: SaleData[]
}

const defaultSale = {
  date: null,
  seller: null,
  product: null,
  quantity: null,
  createdAt: null,
  client: null,
};

const originalData: Sale[] = [
  {
    date: format(new Date('08-27-2021'), 'MM-dd-yyyy'),
    seller: 'Holland Oats',
    product: 'Tulips',
    quantity: 100,
    createdAt: format(new Date('08-25-2021'), 'P'),
    client: 'Colorful Clogs',
  },
  {
    date: format(new Date('08-27-2021'), 'MM-dd-yyyy'),
    seller: 'Seller Name',
    product: 'Dandelions',
    quantity: 20,
    createdAt: format(new Date('08-25-2021'), 'P'),
    client: 'Client Name',
  },
];

const columns: Column<SaleData>[] = [
  {
    Header: 'Seller / Sale Info',
    columns: [
      {
        Header: 'Sale Date',
        accessor: 'date',
      },
      {
        Header: 'Seller Name',
        accessor: 'seller',
      },
    ],
  },
  {
    Header: 'Product Info',
    columns: [
      {
        Header: 'Product Name',
        accessor: 'product',
        options: [
          { label: 'Roses', value: '1' },
          { label: 'Sunflowers', value: '2' },
        ],
      },
      {
        Header: 'Quantity',
        accessor: 'quantity',
      },
    ],
  },
  {
    Header: 'Client Info',
    columns: [
      {
        Header: 'Client Name',
        accessor: 'client',
      },
    ],
  },
];

const handleChange = (data: Sale[]) => {
  console.log('Table onChange');
  console.log(data);
};

export default {
  title: 'components/DataTable',
  component: DataTable,
} as Meta;

const Template: Story<DataTableProps<SaleData>> = (args) => <DataTable<SaleData> {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  data: originalData, columns, defaultItem: defaultSale, handleChange,
};

export const NonSelectable = Template.bind({});
NonSelectable.args = {
  selectable: false,
  columns,
  data: originalData,
  defaultItem: defaultSale,
};
