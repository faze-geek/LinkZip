import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const firebaseConfig = {
  apiKey: "AIzaSyB3pOxXL0nLLXHQ2CnoThXy9M1ExfPR2Wo",
  authDomain: "linkzip-1fa46.firebaseapp.com",
  projectId: "linkzip-1fa46",
  storageBucket: "linkzip-1fa46.appspot.com",
  messagingSenderId: "206944605586",
  appId: "1:206944605586:web:261c795218cd1907e3dd4b",
  measurementId: "G-DPJ01JSZX4"
};


initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
