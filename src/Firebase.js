// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANNwjhj5jRIy8BVFGPTCMtP1758Z-UA3s",
  authDomain: "mp2s-445d3.firebaseapp.com",
  projectId: "mp2s-445d3",
  storageBucket: "mp2s-445d3.appspot.com",
  messagingSenderId: "1060824274444",
  appId: "1:1060824274444:web:2df312bb60503abb0ac029"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }