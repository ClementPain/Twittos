import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const IsLogged = () => {
  let currentUser = useSelector(state => state.userReducer.currentUser);

  if (currentUser) {
    return (
      <li className="nav-item">
        <button>Log out</button>
      </li>
    )
  } else {
    return (
      <li className="nav-item">
        <Link to="/login" className="nav-link">Login</Link>
      </li>
    )
  };
};

export default IsLogged;