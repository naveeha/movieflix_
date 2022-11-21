
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyYbAFAKF6d2EiCXVrUGeq4ZDe2Gt4xa8",
  authDomain: "movieflix-234d4.firebaseapp.com",
  projectId: "movieflix-234d4",
  storageBucket: "movieflix-234d4.appspot.com",
  messagingSenderId: "230935765919",
  appId: "1:230935765919:web:0469815d154911e74fd3aa",
  measurementId: "G-4MLDKEBY4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
