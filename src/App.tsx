import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import {
  Home
} from './pages';
import { ApplicationBar } from './components';
import { SITE_ROUTES } from './utils';
import './App.css';



function App() {
  const navigate = useNavigate();
  const location = useLocation();
  /**
   * Default useEffect hook that should create an event listener for local storage.
   */
  useEffect(() => {
    /**
     * Function that checks to see if a user is stored in local storage.
     * If not, the user should be navigated to the home route.
     */
    function checkStorage() {
      const storage = localStorage.getItem('user');

      if (!storage && !SITE_ROUTES.includes(location.pathname)) {
        navigate('/');
      }
    }

    window.addEventListener('storage', checkStorage);

    return window.removeEventListener('storage', checkStorage);
  }, [location.pathname, navigate]);
  return (
   <>
      <ApplicationBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
