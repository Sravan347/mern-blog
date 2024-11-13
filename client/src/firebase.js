// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "process.env.VITE_FIREBASE_API_KEY",
  authDomain: "blogtwo-3fbed.firebaseapp.com",
  projectId: "blogtwo-3fbed",
  storageBucket: "blogtwo-3fbed.firebasestorage.app",
  messagingSenderId: "73721431711",
  appId: "1:73721431711:web:55d332cb53ba02ce1f04aa",
  measurementId: "G-12YS38YY4S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);