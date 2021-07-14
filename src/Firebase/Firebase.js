import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCir9_GoZ-lRmeebTGf6LNdDQW4GNAXN24",
  authDomain: "first-project-20f2f.firebaseapp.com",
  databaseURL: "https://first-project-20f2f.firebaseio.com",
  projectId: "first-project-20f2f",
  storageBucket: "first-project-20f2f.appspot.com",
  messagingSenderId: "86312191502",
  appId: "1:86312191502:web:d5ef4767758d5b27059e5f",
  measurementId: "G-EFMLNVJTF6",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
