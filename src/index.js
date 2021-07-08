import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import purple from '@material-ui/core/colors/purple';
const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: purple[500],
        },
        secondary: {
            main: '#f44336',
        },
    }
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
  <React.StrictMode>
    <App />
  </React.StrictMode>
    </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


