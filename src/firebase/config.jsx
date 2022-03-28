import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWsOwZE2zjugELlZyTnWdkQzKmY0xJFYE",
  authDomain: "recipe-directory-86243.firebaseapp.com",
  projectId: "recipe-directory-86243",
  storageBucket: "recipe-directory-86243.appspot.com",
  messagingSenderId: "394050848754",
  appId: "1:394050848754:web:0f8b8091099b2918154d6b",
};

// connect to firebase backend
firebase.initializeApp(firebaseConfig);

// initialize firestore database service
const db = firebase.firestore();

export { db };
