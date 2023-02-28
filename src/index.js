import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import HouseContextProvider from './components/context/HouseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HouseContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </HouseContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

