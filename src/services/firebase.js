import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const config = {
    apiKey: "AIzaSyAou61lZM0MWXZ5Mc_md2YuZmey_rVfwlI",
    authDomain: "chatty-e9b00.firebaseapp.com",
    projectId: "chatty-e9b00",
    storageBucket: "chatty-e9b00.appspot.com",
    messagingSenderId: "61608579349",
    appId: "1:61608579349:web:1334b43e0e83a9d654991c"
};

firebase.initializeApp(config)
export const auth =  firebase.auth
export const db = firebase.database