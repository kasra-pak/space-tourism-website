import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { SiteContextProvider } from './contexts/websiteContext';
import App from './App';

const container = document.getElementById('root');

if (container) {
  const root = ReactDOMClient.createRoot(container);
  root.render(
    <SiteContextProvider>
      <App />
    </SiteContextProvider>
  );
}

if (container) {
  const root = ReactDOMClient.createRoot(container);
  root.render(
    <SiteContextProvider>
      <App />
    </SiteContextProvider>
  );
}
