import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav2 = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
          <NavLink to="/" exact activeClassName="underline">
            Logo
          </NavLink>
        </div>
        <div className="flex space-x-4">
          <NavLink
            to="/"
            exact
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            activeClassName="underline"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            activeClassName="underline"
          >
            About
          </NavLink>
          <NavLink
            to="/product"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            activeClassName="underline"
          >
            Product
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            activeClassName="underline"
          >
            Contact
          </NavLink>
        </div>
        <div>
          <select className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <option value="us" className="flex items-center">
               USA
            </option>
            <option value="in" className="flex items-center">
               India
            </option>
            <option value="uk" className="flex items-center">
               UK
            </option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Nav2;
