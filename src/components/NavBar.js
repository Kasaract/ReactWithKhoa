import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <navbar>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </navbar>
);

export default NavBar;