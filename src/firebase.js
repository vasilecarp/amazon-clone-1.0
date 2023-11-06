import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD2j9y9S3qNe22LOEp3mm7sB1hCfD5fr3c",
    authDomain: "clone-6764a.firebaseapp.com",
    projectId: "clone-6764a",
    storageBucket: "clone-6764a.appspot.com",
    messagingSenderId: "416666050537",
    appId: "1:416666050537:web:479daf0464e7d10b337578"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
