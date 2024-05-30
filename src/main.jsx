import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './files/index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="549483997951-5rigeag112udjhe9o98qu9ekn9lus2df.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
