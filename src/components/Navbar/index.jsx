import React from 'react';
import { Link } from 'react-router-dom';
import ButtonLanguage from './ButtonLanguage';

const Navbar = ({ languages }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <Link to='/' className="navbar-brand">Twittos</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link to="/register" className='nav-link'>Register
            <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/posts" className="nav-link">Posts</Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">Profile</Link>
        </li>
        <li className="nav-item">
          <Link to="/user" className="nav-link">User</Link>
        </li>
      </ul>
      <div className="form-inline my-2 my-lg-0">
      <ButtonLanguage languages={ languages } />
      </div>

    </div>
  </nav>
);

export default Navbar;
