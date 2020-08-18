// Imports ----- +
import firebase from "firebase/app";
import "firebase/database";

// Configure firebase ----- +
const firebaseConfig = {
  apiKey: "AIzaSyDQOt04CcDsNhQHAyZMFwjSLY1X2MuEQTg",
  authDomain: "voting-booth-4107f.firebaseapp.com",
  databaseURL: "https://voting-booth-4107f.firebaseio.com",
  projectId: "voting-booth-4107f",
  storageBucket: "voting-booth-4107f.appspot.com",
  messagingSenderId: "424744854902",
  appId: "1:424744854902:web:8119084df741436fab4657",
};

// Initialize Firebase ----- +
firebase.initializeApp(firebaseConfig);

export default firebase;
