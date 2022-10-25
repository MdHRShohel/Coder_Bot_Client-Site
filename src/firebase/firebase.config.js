// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjJc_JiZEWt357b9b7sSNVTlAwU46Aw5g",
  authDomain: "coder-bot.firebaseapp.com",
  projectId: "coder-bot",
  storageBucket: "coder-bot.appspot.com",
  messagingSenderId: "210758711607",
  appId: "1:210758711607:web:f19db8e288fa496393c2b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;