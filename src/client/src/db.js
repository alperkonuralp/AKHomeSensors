// Get a RTDB instance
import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyCwSbtO1A5PkysRaaenyjRFj2yuAtfbUOY",
    authDomain: "akhomesensors.firebaseapp.com",
    databaseURL: "https://akhomesensors.firebaseio.com",
    projectId: "akhomesensors",
    storageBucket: "akhomesensors.appspot.com",
    messagingSenderId: "1081250432958",
    appId: "1:1081250432958:web:5cd1e8042c8a489403dbef"
};

export const db = firebase
    .initializeApp(firebaseConfig)
    .database();