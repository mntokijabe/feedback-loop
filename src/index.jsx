import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App/App';
import store from './store';
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#000000"
        },
        secondary:{
            main: "#d4d6da"
        }
    },


})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>    
        </ThemeProvider>
    </React.StrictMode>
);
