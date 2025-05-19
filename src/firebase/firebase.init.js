// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsPJvARcVPBTdnVfCcehLenbQEKrmwNsI",
  authDomain: "hobby-group-app.firebaseapp.com",
  projectId: "hobby-group-app",
  storageBucket: "hobby-group-app.firebasestorage.app",
  messagingSenderId: "811596639362",
  appId: "1:811596639362:web:6f8f0a24978e88d73c189b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);