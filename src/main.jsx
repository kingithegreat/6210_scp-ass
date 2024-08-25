import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Renders the App component into the root element of the HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* StrictMode is a tool for highlighting potential problems in an application */}
    <App />
  </React.StrictMode>,
);
