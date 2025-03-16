// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlB26TxkxOnRX5Wqu-U4y2DcZVQMMfYt4",
  authDomain: "finalprojectweblearn.firebaseapp.com",
  projectId: "finalprojectweblearn",
  storageBucket: "finalprojectweblearn.firebasestorage.app",
  messagingSenderId: "364942895052",
  appId: "1:364942895052:web:d89c732ba2bfb6b1491f69",
  measurementId: "G-S7FH4JEEDS",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
