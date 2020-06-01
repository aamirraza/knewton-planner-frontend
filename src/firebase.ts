import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
  
export const myFirebase = firebase.initializeApp(firebaseConfig);

export const FirebaseAuth = myFirebase.auth();
export const FirebaseFirestore = myFirebase.firestore();
export const FirebaseStorage = myFirebase.storage().ref();
