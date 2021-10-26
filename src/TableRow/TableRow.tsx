import React, { ReactElement, useEffect, useState } from 'react';
import { Row } from 'react-table';
import { HotKeys, configure } from 'react-hotkeys';
import filter from 'lodash/filter'

export type TableRowProps<T extends Record<string, unknown>> = {
  row: Row<T>,
  editing: number | null
  saveRow: (row: Row<T>) => void
  className?: string
}

export const TableRow = <T extends Record<string, unknown>>(
  props: TableRowProps<T>,
): ReactElement => {
  const { className, row, editing, saveRow } = props;
  const [data, setData] = useState(row);

  const handleSaveRow = () => {
    saveRow(data);
  };

  const onChange = (id: string, value: any) => {
    const values = { ...data.values, [id]: value };
    const newData: Row<T> = { ...data, values };
    setData(newData);
  };
    
  const handlers = {
    SAVE_ITEM: handleSaveRow,
  }
    
  configure({
    defaultComponent: 'span',
    ignoreTags: [],
  })

  return (
    
    <tr {...row.getRowProps()} className={className}>
      {row.cells.map((cell, index) => (
        <td className={` ${index === 0 && 'w-8'}`} {...cell.getCellProps()}>
          <HotKeys handlers={handlers} className='hotkeys' >
          {cell.render('Cell', {
            isEditable: (editing === row.index), editing, onChange, handleSaveRow,
          })}
          </HotKeys>
        </td>
      ))}
    </tr>
  );
};
