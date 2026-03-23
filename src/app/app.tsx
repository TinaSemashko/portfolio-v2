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
      main: '#436280',
    },
    secondary: {
      main: '#ffffff',
    },
    colorBlack: {
      main: '#0C151C',
    },
    colorGray: {
      main: '#dbe4ed',
    },
    colorRed: {
      main: '#5f0101',
    },
    colorOrange: {
      main: '#ff9d00',
    },

    colorLightBlue: {
      main: '#acbdd3',
    },
    colorBlue: {
      main: '#16354D',
    },
  },
  typography: {
    fontFamily: ['Helvetica', 'Arial', 'Roboto', 'sans-serif'].join(','),
    h1: {
      fontFamily: 'Jura, serif, Arial',
      fontDisplay: 'optional',
    },
    h2: {
      fontFamily: 'Jura, serif, Arial',
      fontDisplay: 'optional',
    },
    h3: {
      fontFamily: 'Jura, serif, Arial',
      fontDisplay: 'optional',
    },
    h4: {
      fontFamily: 'Jura, serif, Arial',
      fontDisplay: 'optional',
    },
    h5: {
      fontFamily: 'Jura, serif,  Helvetica',
      fontDisplay: 'optional',
    },
    h6: {
      fontFamily: 'Jura, serif,  Helvetica',
      fontDisplay: 'optional',
    },
    body1: {
      fontFamily: 'Roboto, sans-serif, Helvetica',
      fontDisplay: 'optional',
    },
    body2: {
      fontFamily: 'Roboto, sans-serif, Arial',
      fontDisplay: 'optional',
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
    <a
      href="#main-content"
      style={{
        position: 'absolute',
        left: '-9999px',
        top: 'auto',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
      }}
      onFocus={e => {
        e.currentTarget.style.position = 'fixed';
        e.currentTarget.style.left = '10px';
        e.currentTarget.style.top = '10px';
        e.currentTarget.style.width = 'auto';
        e.currentTarget.style.height = 'auto';
        e.currentTarget.style.overflow = 'visible';
        e.currentTarget.style.zIndex = '9999';
        e.currentTarget.style.background = '#fff';
        e.currentTarget.style.padding = '8px 16px';
        e.currentTarget.style.color = '#436280';
        e.currentTarget.style.fontWeight = 'bold';
      }}
      onBlur={e => {
        e.currentTarget.style.position = 'absolute';
        e.currentTarget.style.left = '-9999px';
        e.currentTarget.style.width = '1px';
        e.currentTarget.style.height = '1px';
        e.currentTarget.style.overflow = 'hidden';
      }}>
      Skip to main content
    </a>
    <Topbar />
    <main id="main-content">
      <AppRoutes />
    </main>
    <Scroll showBelow={250} />
    <Footer />
  </ThemeProvider>
);

export default App;
