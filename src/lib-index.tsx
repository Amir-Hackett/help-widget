import React from 'react';
import ReactDOM from 'react-dom/client';
import { IntercomProvider } from 'react-use-intercom';
import { LibConfig } from './types/lib-config';
import App from './App';

import './sass/app.scss';

const WIDGET_ID = 'solodev-help-widget'

export const init = (config: LibConfig) => {
  const container = document.createElement('div');
  container.id = WIDGET_ID
  document.body.appendChild(container);

  const root = ReactDOM.createRoot(
    document.getElementById(WIDGET_ID) as HTMLElement
  );

  root.render(
    <React.StrictMode>
      <IntercomProvider appId={ config.intercomId || '' } autoBoot>
        <App config={ config } />
      </IntercomProvider>
    </React.StrictMode>
  );
}