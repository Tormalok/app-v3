import React, { FormEvent, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../AuthContext';
import './styles/LogIn.css';

const API_URL = 'https://cocoa-expert-system.onrender.com';

const LogIn: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        username,
        password,
      });

      const token = response.data.access_token;
      setToken(token);
      localStorage.setItem('token', token);
      setMessage('Login successful!');
      navigate('/');
    } catch (err: any) {
      setMessage(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className='login-bg-main'>
      <div className='app-title'>
        <h2>Welcome back</h2>
      </div>
      <form className='login-form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Username'
          className='input-field'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          className='input-field'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className='sign-in-btn'>
          Sign In
        </button>
        {message && <p className='error-message'>{message}</p>}
      </form>
      <p className='signup-text'>
        Don't have an account?{' '}
        <Link to='/signup' className='signup-link'>
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LogIn;
