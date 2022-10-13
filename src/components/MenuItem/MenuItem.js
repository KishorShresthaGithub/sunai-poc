import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import axios from 'axios';
import { API_URL } from '../config';
import Table from '../Table';

function MenuItem(props) {
  const { id } = props;
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/item?category=${id}`)
      .then((res) => {
        console.log(res);
        setDataTable(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const column = [
    { heading: 'Name', value: 'name' },
    { heading: 'Description', value: 'description' },
  ];

  return (
    <div>
      <h2>
        Items in Category:(
        {id || 'All'}
        )
      </h2>
      <Table data={dataTable} column={column} />
    </div>
  );
}

MenuItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default MenuItem;
