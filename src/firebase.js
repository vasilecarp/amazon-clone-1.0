import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDKIChG5OfNoQSHKApfPTgH4OQywFbIlXs",
  authDomain: "app-one-f02c8.firebaseapp.com",
  projectId: "app-one-f02c8",
  storageBucket: "app-one-f02c8.appspot.com",
  messagingSenderId: "683423803054",
  appId: "1:683423803054:web:64d6d247dfddf944316f3f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
