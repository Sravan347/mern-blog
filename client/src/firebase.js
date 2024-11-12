// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "mern-blog-5d291.firebaseapp.com",
  projectId: "mern-blog-5d291",
  storageBucket: "mern-blog-5d291.firebasestorage.app",
  messagingSenderId: "597873944042",
  appId: "1:597873944042:web:e575927244a0db2df1be93",
  measurementId: "G-YVS2MG8ZMK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
