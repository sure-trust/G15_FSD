// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-41649.firebaseapp.com",
  projectId: "mern-estate-41649",
  storageBucket: "mern-estate-41649.appspot.com",
  messagingSenderId: "228773796492",
  appId: "1:228773796492:web:b8adedb26a2b53244079a9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);