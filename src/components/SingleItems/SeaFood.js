import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../Table';

function SeaFood() {
  const [dataTable, setDataTable] = useState([]);
  useEffect(() => {
    axios
      .get('http://stream-restaurant-menu-svc.herokuapp.com/item?category=SF')
      .then((res) => {
        console.log(res);
        setDataTable(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const column = [
    { heading: 'Name', value: 'name' },
    { heading: 'Description', value: 'description' },

  ];

  return (
    <div>
      <h2>Items in Category:(SF)</h2>
      <Table data={dataTable} column={column} />
    </div>
  );
}

export default SeaFood;
