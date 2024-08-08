// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWF415_WF7q9pLxcBUfwgjxEWA4AfkQtU",
  authDomain: "eaakarshan-b3770.firebaseapp.com",
  projectId: "eaakarshan-b3770",
  storageBucket: "eaakarshan-b3770.appspot.com",
  messagingSenderId: "387597052338",
  appId: "1:387597052338:web:28c13ec363b57bb2975cab",
  measurementId: "G-VHSJVQTCJ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
