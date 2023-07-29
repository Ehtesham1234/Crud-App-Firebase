// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs5jtZ9GHObcTxU4UC5oUPlfjYvwniKlI",
  authDomain: "contact-crud-3d3a4.firebaseapp.com",
  projectId: "contact-crud-3d3a4",
  storageBucket: "contact-crud-3d3a4.appspot.com",
  messagingSenderId: "473770053129",
  appId: "1:473770053129:web:b566ce857c3aa2937672d8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
