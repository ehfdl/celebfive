// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPjFBxRYPXvLBBS8tQliiSjRMEq0P73-s",
  authDomain: "react-typescript-practice.firebaseapp.com",
  projectId: "react-typescript-practice",
  storageBucket: "react-typescript-practice.appspot.com",
  messagingSenderId: "335067860808",
  appId: "1:335067860808:web:c3b118986d8ccf2b742d7d",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const authService = getAuth(app);
