// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOkgsOz8VqEfK3p_Gz3be8nWytASh3_p8",
  authDomain: "ema-john-shop-ee7dc.firebaseapp.com",
  projectId: "ema-john-shop-ee7dc",
  storageBucket: "ema-john-shop-ee7dc.appspot.com",
  messagingSenderId: "602174514814",
  appId: "1:602174514814:web:265cfb4fde5ed58206da2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;