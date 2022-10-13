import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { API_URL } from './config';

function MenuCategory(props) {
  const { onClick } = props;

  const handleClick = (id) => {
    onClick(id);
  };

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/category`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <button
              type="button"
              className="link"
              onClick={() => handleClick(post.short_name)}
            >
              {post.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

MenuCategory.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MenuCategory;
