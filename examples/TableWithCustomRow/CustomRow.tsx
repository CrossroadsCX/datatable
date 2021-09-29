import React, { ReactElement, useState } from 'react';
import { Row } from 'react-table';

import { TableRowProps } from '../../src/TableRow'

interface CustomRowProps<T> extends TableRowProps<T> {
  className: string,
}

export const CustomRow = <T extends Record<string, unknown>>(
  props: CustomRowProps<T>
): ReactElement => {
  const { className, row } = props;

  return (
    <tr {...row.getRowProps()} className={className}>
      {row.cells.map((cell, index) => (
        <td {...cell.getCellProps()} style={{ borderStyle: 'dotted', maxWidth: '100%', boxSizing: 'border-box'}}>
          {cell.render('Cell')}
        </td>
      ))}
    </tr>
  )

}
