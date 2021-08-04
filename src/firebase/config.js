import firebase from 'firebase/app';
import 'firebase/database'

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "notes-b3af2.firebaseapp.com",
    databaseURL: "https://notes-b3af2-default-rtdb.firebaseio.com",
    projectId: "notes-b3af2",
    storageBucket: "notes-b3af2.appspot.com",
    messagingSenderId: "1057850404226",
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  export {db}
