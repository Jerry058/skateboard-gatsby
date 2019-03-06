import React from "react";
import { Link } from 'gatsby';
import './navbar.css';

const Navbar = () => (

    <nav class="navbar">

    <ul className="nav-links">
      <li className="nav-item"><Link to="/">Home</Link></li>
      <li className="nav-item"><Link to="/about">About</Link></li>
      <li className="nav-item"><Link to="/product">Products</Link></li>
      <li className="nav-item"><Link to="/contact">Contact</Link></li>
    </ul>
    </nav>
)

export default Navbar;

