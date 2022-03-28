//React Imports
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaAt, FaBuilding, FaSignInAlt } from 'react-icons/fa';

//Style Imports
import css from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={css.navbarContainer}>
      <nav className={css.nav}>
        <Link to='/'>
          <div className={`${css.logoContainer} `}>
            <div className={css.logo}></div>
            <div className={css.logo}></div>
            <div className={css.logo}></div>
          </div>
        </Link>
        <Link className={css.item} to='/about'>
          <FaBuilding className={css.icon} /> About
        </Link>
        <Link className={css.item} to='/contact'>
          <FaAt className={css.icon} />
          Contact
        </Link>
        <Link className={css.item} to='/team'>
          <FaUsers className={css.icon} />
          Team
        </Link>
        <Link className={css.item} to='/dashboard'>
          <FaSignInAlt className={css.icon} />
          Login
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
