import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'

import { GoogleOAuthProvider } from '@react-oauth/google';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <GoogleOAuthProvider clientId="579357793867-p340bhce2higbe0vibh10b39uv5s64ti.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>;
    </AppContextProvider>
  </BrowserRouter>,
)
