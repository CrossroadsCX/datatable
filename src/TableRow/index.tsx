import React, { ReactElement, useState } from 'react';
import { Row } from 'react-table';

type TableRowProps<T extends Record<string, unknown>> = {
  row: Row<T>,
  editing: number | null
  saveRow: (row: Row<T>) => void
}

export const TableRow = <T extends Record<string, unknown>>(
  props: TableRowProps<T>,
): ReactElement => {
  const { row, editing, saveRow } = props;
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
    <tr {...row.getRowProps()}>
      {row.cells.map((cell, index) => (
        <td className={`px-6 py-3 text-xs font-medium ${index === 0 && 'w-8'}`} {...cell.getCellProps()}>
          {cell.render('Cell', {
            isEditable: (editing === row.index), editing, onChange, handleSaveRow,
          })}
        </td>
      ))}
    </tr>
  );
};
