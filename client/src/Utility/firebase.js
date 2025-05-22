import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3Cci73bhv244oDbSC5HCCYaZoC1U2DaQ",
  authDomain: "clone-28ad8.firebaseapp.com",
  projectId: "clone-28ad8",
  storageBucket: "clone-28ad8.firebasestorage.app",
  messagingSenderId: "560915639947",
  appId: "1:560915639947:web:baa81a0ffb6ec6bd7eae8e",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
