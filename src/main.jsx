import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBcz2iq9IBELYvIBWswoPAwhlflSoDzVbQ",
  authDomain: "shoppingcart-73bb2.firebaseapp.com",
  projectId: "shoppingcart-73bb2",
  storageBucket: "shoppingcart-73bb2.appspot.com",
  messagingSenderId: "947325820580",
  appId: "1:947325820580:web:45ab4cad8cf238ec53d031"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
