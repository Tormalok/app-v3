import React, { useContext } from 'react';
import Header from '../components/Header';
import MsgBox from '../components/MsgBox';
import FormBox from '../components/FormBox';
import AuthContext from '../AuthContext';
import './styles/Home.css';

const Home: React.FC = () => {
  const { token } = useContext(AuthContext);

  const message = token
    ? 'Please refresh the page to submit a new request'
    : 'Please sign in to continue using the application';

  const isSignedIn = token !== null;

  return (
    <div className='main'>
      <Header />
      <div className='home-container'>
        <MsgBox message={message} isSignedIn={isSignedIn} />
        <FormBox />
      </div>
    </div>
  );
};

export default Home;
