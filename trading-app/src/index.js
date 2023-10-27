import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHyeP0ae7rMXzM_8CYN6u3HE5W_084Vn4",
  authDomain: "trading-app-247f3.firebaseapp.com",
  projectId: "trading-app-247f3",
  storageBucket: "trading-app-247f3.appspot.com",
  messagingSenderId: "319519319380",
  appId: "1:319519319380:web:bedae0678559538b7c54c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
