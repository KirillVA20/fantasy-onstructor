
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import 'firebase/database';

// Your app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyARGnM-WBhorysVkkkcMD5WAhxZwbJZZCw",
    authDomain: "todoreact-e05f6.firebaseapp.com",
    databaseURL: "https://todoreact-e05f6.firebaseio.com",
    projectId: "todoreact-e05f6",
    storageBucket: "todoreact-e05f6.appspot.com",
    messagingSenderId: "1042409658646",
    appId: "1:1042409658646:web:5703726e86b6c1b6425837",
    measurementId: "G-SFR9HD3NV6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

export default database;


