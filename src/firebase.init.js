// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnI0ztvVZNqsTt07xlrEI-IPAA6QrkiH4",
  authDomain: "ema-john-simple-f6319.firebaseapp.com",
  projectId: "ema-john-simple-f6319",
  storageBucket: "ema-john-simple-f6319.appspot.com",
  messagingSenderId: "1096051328206",
  appId: "1:1096051328206:web:b403979bcfb851eb8e3c9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;