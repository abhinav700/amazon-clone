import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
 const firebaseApp=firebase.  initializeApp({
    apiKey: "AIzaSyBMHnO3dbEaSmEkumEom-XmeGPwxuJ1pnQ",
  authDomain: "e-clone-89e21.firebaseapp.com",
  projectId: "e-clone-89e21",
  storageBucket: "e-clone-89e21.appspot.com",
  messagingSenderId: "993720981190",
  appId: "1:993720981190:web:7d7004e7904ce3c95329c7",
  measurementId: "G-482YR25CN5"
 })
 const db=firebaseApp.firestore();
 const auth=firebase.auth();
 export {db,auth};
