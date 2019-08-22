import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
 apiKey: "AIzaSyA-A0hCJ0I0H-FOVJpH3gkZsbk4mfo5v20",
 authDomain: "crwn-db-1f6e4.firebaseapp.com",
 databaseURL: "https://crwn-db-1f6e4.firebaseio.com",
 projectId: "crwn-db-1f6e4",
 storageBucket: "",
 messagingSenderId: "973111849157",
 appId: "1:973111849157:web:4741f98b326abd53"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
