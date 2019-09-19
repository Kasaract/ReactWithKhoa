import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
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
      <li>
        <Link to="/popup">Popup</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;