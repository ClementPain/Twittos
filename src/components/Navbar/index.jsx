import React from 'react';
import { Link } from 'react-router-dom';

import ButtonLanguage from './ButtonLanguage';
import IsLogged from './IsLogged';

const Navbar = ({ languages }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <Link to='/' className="navbar-brand">Twittos</Link>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link to="/register" className='nav-link'>Register
            <span className="sr-only">(current)</span>
          </Link>
        </li>
        
        <IsLogged />
        
        <li className="nav-item">
          <Link to="/postslist" className="nav-link">Posts</Link>
        </li>
        <li className="nav-item">
          <Link to="/profile/me" className="nav-link">Profile</Link>
        </li>
      </ul>
      <div className="form-inline my-2 my-lg-0">
      <ButtonLanguage languages={ languages } />
      </div>

    </div>
  </nav>
);

export default Navbar;
