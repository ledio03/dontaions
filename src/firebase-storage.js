import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCdErRjTH6z425K-EPTwjEGBaaLBDV4CWs",
  authDomain: "blog-9d5b4.firebaseapp.com",
  projectId: "blog-9d5b4",
  storageBucket: "blog-9d5b4.appspot.com",
  messagingSenderId: "540132001545",
  appId: "1:540132001545:web:6755d1e601619c9f5db5d8"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage };
