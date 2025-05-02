import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
// import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { router } from "./config/router"
import { createMenus, menus } from './config/variablesHeader';
import { useTranslation } from 'react-i18next';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#CCA70A',
    },
    secondary: {
      main: '#00AAFF',
    },
    background: {
      default: '#00000F',
      paper: '#2A002B',
    },
  },
  typography: {
    fontFamily: 'Montserrat Alternates, sans-serif',
    h1: {
      fontFamily: 'Kanit, sans-serif',
    },
    h2: {
      fontFamily: 'Kanit, sans-serif',
    },
    h3: {
      fontFamily: 'Kanit, sans-serif',
    },
  },
});

function App() {
  const { t } = useTranslation('OnePage');
  
  // Initialize menus with translations
  Object.assign(menus, createMenus(t));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <RouterProvider router={createBrowserRouter(router)} />
    </ThemeProvider>
  );
}

export default App;