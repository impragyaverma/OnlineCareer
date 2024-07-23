<<<<<<< HEAD
// src/firebase.config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';  // Import getAuth

=======
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
>>>>>>> f6ae85415787b380d80ec5ad22bd296275728612
const firebaseConfig = {
  apiKey: "AIzaSyAN59hn-bYlMQIx_T5bNQ43mv5RM4ILU38",
  authDomain: "careercompass-7b920.firebaseapp.com",
  projectId: "careercompass-7b920",
  storageBucket: "careercompass-7b920.appspot.com",
  messagingSenderId: "736033168493",
  appId: "1:736033168493:web:d79bf435222da05afbb364",
  measurementId: "G-6HNXV9NXGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
<<<<<<< HEAD
const auth = getAuth(app);  // Initialize Firebase Authentication

export { db, auth };
=======

export { db };
>>>>>>> f6ae85415787b380d80ec5ad22bd296275728612
