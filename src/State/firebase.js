import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaPP20S5jtre8-KtwuNiXJbgVqpp-XOuI",
  authDomain: "clone-a0a66.firebaseapp.com",
  projectId: "clone-a0a66",
  storageBucket: "clone-a0a66.appspot.com",
  messagingSenderId: "509381971218",
  appId: "1:509381971218:web:717e0f60b07115ed7b77cb",
  measurementId: "G-GCGJM2DZ7C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
