import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import CssBaseline from "@mui/joy/CssBaseline";
import {extendTheme} from "@mui/joy/styles";
import {CssVarsProvider} from '@mui/joy/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = extendTheme({
    colorSchemes: {
        dark: {
            palette: {
                neutral: {
                    800: "#17212B"
                },
                background: {
                    body: "#17212B",
                    surface: "#232F3D",
                    popup: "#17212B",
                    level1: "#17212B",
                },
                focusVisible: "#ffffff",

            },
        },

    },
    components: {
        JoyInput: {
            styleOverrides: {
                root: {
                    backgroundColor: "white",
                }

            },
        },
    },
});

root.render(
    <CssVarsProvider  defaultMode="dark" theme={theme} >
        <CssBaseline/>
        <React.StrictMode>
            <BrowserRouter>
                <App/>
            </BrowserRouter>

        </React.StrictMode>
    </CssVarsProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
