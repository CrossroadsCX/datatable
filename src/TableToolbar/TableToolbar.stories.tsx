import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TableToolbar, TableToolbarProps } from '.';

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

const Template: Story<TableToolbarProps> = (args) => <TableToolbar {...args} />;

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
