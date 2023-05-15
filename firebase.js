// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/storage";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGPL9UK4Yj7DUKpWLUmV0oZEBiIXpxz9s",
  authDomain: "facebook-70e7b.firebaseapp.com",
  projectId: "facebook-70e7b",
  storageBucket: "facebook-70e7b.appspot.com",
  messagingSenderId: "157064782643",
  appId: "1:157064782643:web:9b517c9dc64ea90b861446",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);;
export { db, storage };
