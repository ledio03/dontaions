// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdErRjTH6z425K-EPTwjEGBaaLBDV4CWs",
  authDomain: "blog-9d5b4.firebaseapp.com",
  projectId: "blog-9d5b4",
  storageBucket: "blog-9d5b4.appspot.com",
  messagingSenderId: "540132001545",
  appId: "1:540132001545:web:6755d1e601619c9f5db5d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();





