// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-1d07f.firebaseapp.com",
  projectId: "blog-1d07f",
  storageBucket: "blog-1d07f.firebasestorage.app",
  messagingSenderId: "133580731931",
  appId: "1:133580731931:web:e66714332b98bf2780aabe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);