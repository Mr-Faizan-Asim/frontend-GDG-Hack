import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';


const clientId = '512907217400-6ukchlt0nsi5g2qmt9h6ulb5du3jl2ba.apps.googleusercontent.com';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
    <GoogleOAuthProvider clientId={clientId}>
        <GoogleReCaptchaProvider reCaptchaKey="6Le4uDUrAAAAAKqD2rqRvq_qdUIuxXJElU9wjo0g">
          <App />
        </GoogleReCaptchaProvider>
    </GoogleOAuthProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
