import React from 'react';

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <div className='linkContainer'>
        <Link to='/'>
          <div className='logoMain linkList'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Link>
        <Link className='linkList' to='/About'>
          <FaBuilding className='icon' /> About
        </Link>
        <Link className='linkList' to='/Contact'>
          <FaAt className='icon' />
          Contact
        </Link>
        <Link className='linkList' to='/Team'>
          <FaUsers className='icon' />
          Team
        </Link>
        <Link className='linkList' to='/Dashboard'>
          <FaSignInAlt className='icon' />
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
