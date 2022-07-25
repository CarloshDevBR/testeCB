import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { DataProvider } from './hooks/DataContext.js'

import GlobalStyles from './styles/globalStyles.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>

    <GlobalStyles />
  </React.StrictMode>
);
