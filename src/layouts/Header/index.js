import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="site-header">
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/send">
            Send
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
