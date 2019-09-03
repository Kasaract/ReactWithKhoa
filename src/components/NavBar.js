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
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/state">State</Link>
      </li>
    </ul>
  </navbar>
);

export default NavBar;