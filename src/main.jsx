import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Tailwind CSS import
import './i18n'; 
import { BrowserRouter } from 'react-router-dom'; // Import from react-router-dom

// Faol ishlatish
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
