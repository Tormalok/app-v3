import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthContext from './AuthContext';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token')
  );

  const handleSetToken = (newToken: string | null) => {
    if (newToken) {
      localStorage.setItem('token', newToken);
    } else {
      localStorage.removeItem('token');
    }
    setToken(newToken);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken: handleSetToken }}>
      <Router>
        <Routes>
          <Route path='/' element={<SignUp />} />{' '}
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />} />{' '}
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
