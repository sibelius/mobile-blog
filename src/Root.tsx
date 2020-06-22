import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import App from './App';

const theme = createMuiTheme();

const GlobalStyle = createGlobalStyle`
  body {
    linear-gradient(to bottom, #F2F3F8,#63636A);   
  }
`

const Root = () => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  )
}

export default Root;