import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './styles/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { CountryListContextProvider } from './context/CountryListContext.js';
import { CountryContextProvider } from './context/CountryContext.js';
import { UsersContextProvider } from './context/UsersContext.js';
import { CardContextProvider } from './context/CardContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <CountryListContextProvider>
                <CountryContextProvider>
                    <CardContextProvider>
                        <UsersContextProvider>
                            <App />
                        </UsersContextProvider>
                    </CardContextProvider>
                </CountryContextProvider>
            </CountryListContextProvider>
        </Router>
    </React.StrictMode>
);
