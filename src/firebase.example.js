import firebase from "firebase/app";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  databaseURL: "<your-database-url>",
  projectId: "<your-cloud-firestore-project>",
  storageBucket: "<your-storage-bucket>",
  messagingSenderId: "<your-sender-id>",
  appId: "<your-app-id>",
  measurementId: "<your-measurement-id>",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
