import './table.css';
import React from 'react';
import PropType from 'prop-types';

function Table({ data, column }) {
  return (
    <table>
      <thead>
        <tr>
          {column.map((item) => (
            <TableHeadItem key={JSON.stringify(item)} item={item} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <TableRow key={JSON.stringify(item)} item={item} column={column} />
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

const Column = PropType.exact({
  heading: PropType.string,
  value: PropType.string,
});

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

const Item = PropType.exact({
  id: PropType.number,
  name: PropType.string,
  description: PropType.string,
  short_name: PropType.string,
  small_portion_name: PropType.string,
  large_portion_name: PropType.string,
  price_small: PropType.number,
  price_large: PropType.number,
});

TableRow.propTypes = {
  item: Item.isRequired,
  column: PropType.arrayOf(Column).isRequired,
};

Table.propTypes = {
  column: PropType.arrayOf(Column).isRequired,
  data: PropType.arrayOf(Item).isRequired,
};

export default Table;
