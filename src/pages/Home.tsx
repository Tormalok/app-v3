import React from 'react';
import Header from '../components/Header';
import MsgBox from '../components/MsgBox';
import FormBox from '../components/FormBox';
import './styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className='main'>
      <Header />
      <div className='home-container'>
        <MsgBox message='Please refresh the page to submit a new request' />
        <FormBox />
      </div>
    </div>
  );
};

export default Home;
