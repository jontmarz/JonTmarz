import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
// import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { router } from "./config/router"

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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <RouterProvider router={createBrowserRouter(router)} />
    </ThemeProvider>
  );
}

export default App;