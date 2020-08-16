// src/firebaseConfig.js
import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCevmRo6Xp60sA3rl29XFg5Ux9WfeMifOI",
  authDomain: "wavemecca.firebaseapp.com",
  databaseURL: "https://wavemecca.firebaseio.com",
  projectId: "wavemecca",
  storageBucket: "wavemecca.appspot.com",
  messagingSenderId: "605825520864",
  appId: "1:605825520864:web:3ee1494527d5ce5068ec85",
  //   measurementId: "G-VP7B6SSCGV",
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
