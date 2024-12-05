import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';


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
      <Header />
      <div className="min-h-screen">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;