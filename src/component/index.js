
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App';
import { ClerkProvider } from '@clerk/clerk-react';
import reportWebVitals from './reportWebVitals';

const REACT_APP_CLERK_PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY

if (!REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={REACT_APP_CLERK_PUBLISHABLE_KEY}
       appearance={{layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1C1F2E",
            colorInputBackground: "#252A41",
            colorInputText: "#fff",}}}>
          <App />
      </ClerkProvider>
  </React.StrictMode>
);
reportWebVitals();