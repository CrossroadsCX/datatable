import React, { ReactElement, useState } from 'react';
import { Row } from 'react-table';

import { TableRowProps } from '../../src/TableRow'

export const CustomRow = <T extends Record<string, unknown>>(
  props: TableRowProps<T>
): ReactElement => {
  const { row, editing, saveRow } = props;
  const [data, setData] = useState(row);

  return (
    <tr {...row.getRowProps()}>
      {row.cells.map((cell, index) => (
        <td {...cell.getCellProps()} style={{ borderStyle: 'dotted', maxWidth: '100%', boxSizing: 'border-box'}}>
          {cell.render('Cell')}
        </td>
      ))}
    </tr>
  )

}
