import React, { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles/SignUp.css';

const API_URL = 'https://cocoa-expert-system.onrender.com';

const SignUp: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/auth/signup`, {
        username,
        password,
      });
      setMessage('Account created successfully!');

      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err: any) {
      setMessage(err.response?.data?.error || 'Sign Up failed');
    }
  };

  return (
    <div className='signup-bg-main'>
      <div className='app-title'>
        <h2>Create an account</h2>
      </div>
      <form className='signup-form' onSubmit={handleSubmit}>
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
        <button type='submit' className='sign-up-btn'>
          Sign Up
        </button>
        {message && <p className='error-message'>{message}</p>}
      </form>
      <p className='signin-text'>
        Already have an account?{' '}
        <Link to='/login' className='signin-link'>
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
