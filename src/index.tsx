import React from 'react';
import ReactDOM from 'react-dom/client';
import { IntercomProvider } from 'react-use-intercom';
import { DefaultConfig } from './types/lib-config';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <IntercomProvider appId={ DefaultConfig.intercomId || '' } autoBoot>
      <App config={ DefaultConfig } />
    </IntercomProvider>
  </React.StrictMode>
);