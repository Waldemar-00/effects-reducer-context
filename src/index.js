import React from 'react' 
import {createRoot} from 'react-dom/client' 
import { AuthenticatorProvider } from './context/Authenticator' 
import './index.css' 
import App from './App' 

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthenticatorProvider>
      <App />
    </AuthenticatorProvider>
  </React.StrictMode>
) 
