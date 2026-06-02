import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: { main: '#0f2a45' },
    secondary: { main: '#00A859' },
    background: {
      default: '#f4f7fb',
      paper: '#ffffff',
    },
    text: {
      primary: '#142133',
      secondary: '#5f6f81',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Inter", "Helvetica Neue", Arial, sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.08 },
    h2: { fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.12 },
    h3: { fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.16 },
    h4: { fontWeight: 700, lineHeight: 1.2 },
    h5: { fontWeight: 600, lineHeight: 1.24 },
    h6: { fontWeight: 600, lineHeight: 1.3 },
    subtitle1: { fontWeight: 600, lineHeight: 1.4 },
    body1: { lineHeight: 1.7 },
    body2: { lineHeight: 1.65 },
    button: { fontWeight: 600, textTransform: 'none', letterSpacing: '0.01em' },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '10px 20px',
          fontSize: '0.875rem',
          fontWeight: 600,
          textTransform: 'none',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #0f2a45 0%, #1b4366 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #133554 0%, #204b70 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #00A859 0%, #00c973 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #008c4a 0%, #00A859 100%)',
          },
        },
        outlinedPrimary: {
          borderColor: 'rgba(15,42,69,0.18)',
          '&:hover': {
            borderColor: '#0f2a45',
            backgroundColor: 'rgba(15,42,69,0.04)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          boxShadow: '0 18px 40px rgba(15,42,69,0.08)',
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
