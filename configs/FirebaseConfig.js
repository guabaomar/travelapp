// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_oDZqOy-Pke3EQmIPh4b-YRStZMf8nVU",
  authDomain: "aitravel-48cf7.firebaseapp.com",
  projectId: "aitravel-48cf7",
  storageBucket: "aitravel-48cf7.firebasestorage.app",
  messagingSenderId: "1053617722569",
  appId: "1:1053617722569:web:811db4fb2c2ac004342918"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);