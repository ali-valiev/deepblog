// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrfkTexjALw6WrGCQ5SxHSHnPaaVJEszE",
  authDomain: "deepblog-auth.firebaseapp.com",
  projectId: "deepblog-auth",
  storageBucket: "deepblog-auth.appspot.com",
  messagingSenderId: "605449287441",
  appId: "1:605449287441:web:9bcd59f51a0de384577eb0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
