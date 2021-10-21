import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

import marvel from '../../../assets/img/marvel.png'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  /*
  <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Marvel
          <i className='fas fa-book-reader' />
        </Link>
  */

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbarImg' onClick={closeMobileMenu}>
          <img src={marvel} alt="" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
       {/*
          <div className="nav-search">
              <span className="icon"><i className="fa fa-search"></i></span>
              <input type="search" id="search" placeholder="Search..." />
          </div>
        */}
          <li className='nav-item'>
            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contacto'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;