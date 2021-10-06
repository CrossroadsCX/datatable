import React, { ReactElement, useState } from 'react';
import { Row } from 'react-table';

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

  return (
    <tr {...row.getRowProps()} className={className}>
      {row.cells.map((cell, index) => (
        <td className={` ${index === 0 && 'w-8'}`} {...cell.getCellProps()}>
          {cell.render('Cell', {
            isEditable: (editing === row.index), editing, onChange, handleSaveRow,
          })}
        </td>
      ))}
    </tr>
  );
};
