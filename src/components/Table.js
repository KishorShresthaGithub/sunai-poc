import './table.css';
import React from 'react';
import PropType from 'prop-types';

function Table({ data, column }) {
  return (
    <table>
      <thead>
        <tr>
          {column.map((item) => (
            <TableHeadItem item={item} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <TableRow item={item} column={column} />
        ))}
      </tbody>
    </table>
  );
}

function TableHeadItem({ item }) {
  return (
    <th>
      {' '}
      {item.heading}
      {' '}
    </th>
  );
}

const Column = {
  heading: PropType.string,
  value: PropType.string,
};

const TableHeadItemProp = {
  item: Column.isRequired,
};

TableHeadItem.propTypes = TableHeadItemProp;

function TableRow({ item, column }) {
  return (
    <tr>
      {column.map((columnItem) => (
        <td key={JSON.stringify(columnItem)}>{item[`${columnItem.value}`]}</td>
      ))}
    </tr>
  );
}

TableRow.propTypes = {
  item: PropType.objectOf(PropType.string).isRequired,
  column: PropType.arrayOf(Column).isRequired,
};

Table.propTypes = {
  column: PropType.arrayOf(Column).isRequired,
  data: PropType.arrayOf(PropType.objectOf(PropType.string)).isRequired,
};

export default Table;
