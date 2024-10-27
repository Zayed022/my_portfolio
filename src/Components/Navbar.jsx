import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navItems = (
    <ul className="menu menu-horizontal px-1">
      
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/certifications">Certifications</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-[1]"
          >
            {navItems}
          </div>
        </div>
        <a className="btn btn-ghost text-xl">Zayed Ansari</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        {navItems}
      </div>
    </div>
  );
}

export default Navbar;
