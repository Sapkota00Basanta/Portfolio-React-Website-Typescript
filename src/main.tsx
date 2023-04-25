// Import Third-Party Modules
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import User-Defined Modules
import { App } from './App';
import './index.css';

/**
 * This module is the main or entry point of every
 * react application. Here, we insert our entire react application to
 * a single div element of id root.
 */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
