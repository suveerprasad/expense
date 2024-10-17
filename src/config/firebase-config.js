// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApC-_koHLu-YWNzt5DpaKZ-6zlERXwmkA",
  authDomain: "expense-tracker-734ff.firebaseapp.com",
  projectId: "expense-tracker-734ff",
  storageBucket: "expense-tracker-734ff.appspot.com",
  messagingSenderId: "308799271168",
  appId: "1:308799271168:web:0a995fb77c3fca02ddc3e5",
  measurementId: "G-EVD9JFZSL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app)
