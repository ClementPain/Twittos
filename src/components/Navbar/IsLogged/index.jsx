import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

const IsLogged = () => {
  let currentUser = useSelector(state => state.userReducer.currentUser);

  const history = useHistory()

  if (currentUser) {
    return (
      <li className="nav-item">
        <button
          onClick={ () => {
            Cookies.remove('authentificationToken');
            history.push('/login')
          }}
        >Log out</button>
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