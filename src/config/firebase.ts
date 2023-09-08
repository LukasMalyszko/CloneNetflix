import { initializeApp } from "firebase/app";
import {  getAuth, GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth/cordova";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBpCmTQ_H798ZJlROSuZU_BDbDTYtiE6rs",
  authDomain: "nx-project-3a0f6.firebaseapp.com",
  projectId: "nx-project-3a0f6",
  storageBucket: "nx-project-3a0f6.appspot.com",
  messagingSenderId: "58660069855",
  appId: "1:58660069855:web:494ff6286ef4aa6d83e46a",
  measurementId: "G-R0Y1EK7Y68"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);




