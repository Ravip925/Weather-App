import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_SEC_KEY,
  authDomain: "authapp-59346.firebaseapp.com",
  projectId: "authapp-59346",
  storageBucket: "authapp-59346.appspot.com",
  messagingSenderId: "872515496873",
  appId: "1:872515496873:web:e1f55c9e100d5628f672b8",
  measurementId: "G-HTT4LDS7LY"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth}
