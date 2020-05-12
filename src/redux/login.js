import firebase from "firebase/app";

const firebaseInit = require("../firebase");

export function logOutGoogle() {
  firebase.auth().signOut();
}

export function loginWithGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((snapshot) => snapshot.user);
}
