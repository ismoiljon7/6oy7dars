import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="menu menu-horizontal">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
