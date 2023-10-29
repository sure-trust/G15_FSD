// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc0HA-X8GxPHaOdJ6UP2hph0BolaXIkRE",
  authDomain: "mern-book-acc47.firebaseapp.com",
  projectId: "mern-book-acc47",
  storageBucket: "mern-book-acc47.appspot.com",
  messagingSenderId: "678918921255",
  appId: "1:678918921255:web:d40bfe8a38f7d4607d4202"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;