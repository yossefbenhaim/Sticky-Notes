import { StyledEngineProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <App />
        </StyledEngineProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
