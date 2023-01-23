// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN7QD31H9Dyxy7hbdGrdZK1LNFq95Fas8",
  authDomain: "genius-car-services-60-125c3.firebaseapp.com",
  projectId: "genius-car-services-60-125c3",
  storageBucket: "genius-car-services-60-125c3.appspot.com",
  messagingSenderId: "514696043407",
  appId: "1:514696043407:web:19e65041f50976412d49fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
