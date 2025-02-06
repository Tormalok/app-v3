import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../AuthContext';
import './styles/Header.css';

const Header: React.FC = () => {
  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Remove token and user info from localStorage
    localStorage.removeItem('token');
    setToken(null);
    navigate('/'); // Redirect to login page after signing out
  };

  return (
    <div className='header-bar'>
      <div className='header-container'>
        <Link to='/' className='header-title'>
          CocoaCare
        </Link>
        <div className='header-links'>
          {token ? (
            <button onClick={handleSignOut} className='header-button'>
              Sign Out
            </button>
          ) : (
            <Link to='/login' className='header-link'>
              Sign In
            </Link>
          )}
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
