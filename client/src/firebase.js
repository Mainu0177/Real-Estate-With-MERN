// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d8289.firebaseapp.com",
  projectId: "mern-estate-d8289",
  storageBucket: "mern-estate-d8289.appspot.com",
  messagingSenderId: "389388793610",
  appId: "1:389388793610:web:855773f6aeb672202a6cf3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);