import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth/cordova";

const firebaseConfig = {
  apiKey: "AIzaSyAOoP6uC9oa-WOoKI5IRNH2BQHjuJU-b40",
  authDomain: "netflix-clone-5805d.firebaseapp.com",
  projectId: "netflix-clone-5805d",
  storageBucket: "netflix-clone-5805d.appspot.com",
  messagingSenderId: "665296037637",
  appId: "1:665296037637:web:607eea02e4573de374f96c",
  measurementId: "G-Q0MG70RMH8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();