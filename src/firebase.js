import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/storage";


// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "uicaster",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);



  export default firebaseApp.firestore();
