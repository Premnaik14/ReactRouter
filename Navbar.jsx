import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/Dashboard">Dashboard</Link>
      <Link to="/About">About</Link>
    </nav>
  );
};

export default Navbar;
