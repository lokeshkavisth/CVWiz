import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

<Auth0Provider
    domain="dev-z1igfww8hduh0giq.us.auth0.com"
    clientId="476Q1SkmSFLxmti6NYyuelRFq4ctrE98"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    useRefreshTokens={true}
     cacheLocation="localstorage"
  >
    <App />
  </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
