import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
    <Auth0Provider
        domain="dev-rydqj7eb2ecilwse.us.auth0.com"
        clientId="xsiAbKoUZ94FbZF0FFrj23TYN1uuOtHu"
        authorizationParams={{
            redirect_uri: window.location.origin,
        }}
    >
        <App />
    </Auth0Provider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
