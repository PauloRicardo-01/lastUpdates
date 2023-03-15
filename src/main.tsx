import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './contexts/AuthContext';
import { ActionProvider } from './contexts/ActionContext';
import { PatientProvider } from './contexts/PatientContext';
import { FisioProvider } from './contexts/FisioContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <PatientProvider>
        <FisioProvider>
          <ActionProvider>
            <App />
          </ActionProvider>
        </FisioProvider>
      </PatientProvider>
    </AuthProvider>
  </React.StrictMode>,
);
