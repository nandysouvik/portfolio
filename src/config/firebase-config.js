// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtGzl4gHLKZJ6VpJ-YVh3I89GWdYM5iaA",
  authDomain: "portfolio-9f88e.firebaseapp.com",
  projectId: "portfolio-9f88e",
  storageBucket: "portfolio-9f88e.appspot.com",
  messagingSenderId: "668846441868",
  appId: "1:668846441868:web:216093fd583ebc296482a9",
  measurementId: "G-244MYSX61G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);