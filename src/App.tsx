/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import {
  Home
} from './pages';
import { ApplicationBar } from './components';
import { SITE_ROUTES } from './utils';
import { useColorModeState, useColorModeUpdate } from './contexts/ColorModeContext';
import './App.css';

function App() {
  return <App_DisplayLayer {...useDataLayer()} />;
}

type AppDisplayLayerProps = {
  alterColorMode: (color: 'light' | 'dark') => void;
  colorMode: 'light' | 'dark';
}



function App_DisplayLayer({ alterColorMode, colorMode }: AppDisplayLayerProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = createTheme({
    palette: {
      mode: colorMode,
    }
  });
  // The useEffect below will just run once. 
  useEffect(() => {
    function checkColorMode() {
      console.log('I am running');
      const storage = localStorage.getItem('user');
      
      if (typeof storage !== 'undefined') {
        const currentUser = JSON.parse(storage || '{}');
        alterColorMode(currentUser.colorMode);
      } else {
        alterColorMode('light');
      }
    }

    window.addEventListener('storage', checkColorMode);

    return window.removeEventListener('storage', checkColorMode);
  // We only want this to add an event listener to the window, so no dependencies need to be added here.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
   <ThemeProvider theme={theme}>
     <CssBaseline />
      <ApplicationBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

function useDataLayer() {
  const { mode } = useColorModeState();
  const { setMode } = useColorModeUpdate();

  function alterColorMode(color: 'light' | 'dark') {
    setMode(color);
  }

  return {
    alterColorMode,
    colorMode: mode,
  }
}

export default App;
