import React from 'react'
import { Story, Meta } from '@storybook/react'
import { TableThemeProvider } from '../Theme'
import { TableToolbar, TableToolbarProps } from '.'
import { DefaultTheme } from 'styled-components'
import { defaultTheme } from '../Theme'

const handleAdd = () => {
  console.log('Handling Add');
};

const handleDelete = () => {
  console.log('Handling Deleted');
};

const handleEdit = () => {
  console.log('Handling Edit');
};

const handleReset = () => {
  console.log('Resetting Table');
};

export default {
  title: 'components/DataTable/TableToolbar',
  component: TableToolbar,
} as Meta;

const theme: DefaultTheme = defaultTheme
const Template: Story<TableToolbarProps> = (args) => <TableThemeProvider theme={theme}><TableToolbar {...args} /></TableThemeProvider>;

export const Basic = Template.bind({});
Basic.args = {
  handleAdd, handleDelete, handleEdit, handleReset, canEdit: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  handleAdd,
  handleDelete,
  handleEdit,
  handleReset,
  canDelete: false,
  canReset: false,
};

export const WithoutActions = Template.bind({});
WithoutActions.args = { handleAdd };
