import React from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import Topbar from '../shared/topbar/topbar';
import { AppRoutes } from './appRoutes';
import Footer from '../shared/footer/footer';

import '@mui/material';
import Scroll from '../shared/scrollToTop';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

export let theme = createTheme({
  palette: {
    primary: {
      main: '#816c6e',
    },
    secondary: {
      main: '#e5dee5',
    },
    colorBlack: {
      main: '#000000',
    },
    coffee: {
      main: '#98716a',
    },
    chocolate: {
      main: '#7c3b30',
    },
    colorRed: {
      main: '#5f0101',
    },
    colorOrange: {
      main: '#ff9d00',
    },
    colorGrey: {
      main: '#C2C3C5',
    },
    colorLightBlue: {
      main: '#5986BC',
    },
    colorBlue: {
      main: '#042D5E',
    },
    colorBrightBlue: {
      main: '#00f7ff',
    },
  },
  typography: {
    fontFamily: ['Helvetica', 'Arial', 'Roboto', 'sans-serif'].join(','),
    h1: {
      fontFamily: 'Kurale , sans-serif, Arial',
      fontDisplay: 'optional',
    },
    h2: {
      fontFamily: 'Kurale , sans-serif, Arial',
      fontDisplay: 'optional',
    },
    h3: {
      fontFamily: 'Kurale , sans-serif, Arial',
      fontDisplay: 'optional',
    },
    h4: {
      fontFamily: 'Kurale , sans-serif, Arial',
      fontDisplay: 'optional',
    },
    h5: {
      fontFamily: 'Kurale , sans-serif, Helvetica',
      fontDisplay: 'optional',
    },
    h6: {
      fontFamily: 'Kurale , sans-serif, Helvetica',
      fontDisplay: 'optional',
    },
    body1: {
      fontFamily: 'Kurale , sans-serif, Helvetica',
      fontDisplay: 'optional',
    },
    body2: {
      fontFamily: 'Special Elite, sans-serif, Arial',
      fontDisplay: 'optional',
    },
    subtitle1: {
      fontFamily: 'Helvetica, serif, Arial',
      fontDisplay: 'optional',
      fontSize: '0.8rem',
      '@media (max-width:750px)': {
        fontSize: '0.5rem',
      },
    },
  },
  breakpoints: {
    keys: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    values: { xxs: 0, xs: 300, sm: 568, md: 760, lg: 960, xl: 1200, xxl: 1500 },
  },
});

theme = responsiveFontSizes(theme);

const App: React.FC = () => (
  <ThemeProvider theme={responsiveFontSizes(theme)}>
    <Topbar />
    <AppRoutes />
    <Scroll showBelow={250} />
    <Footer />
  </ThemeProvider>
);

export default App;
