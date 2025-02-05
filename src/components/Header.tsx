import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header: React.FC = () => {
  return (
    <div className='header-bar'>
      <div className='header-container'>
        <Link to='/' className='header-title'>
          CocoaCare
        </Link>
        <div className='header-links'>
          <Link to='#' className='header-link'>
            Account
          </Link>
          <Link to='#' className='header-link'>
            The Team
          </Link>
          <Link to='#' className='header-link'>
            About Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
