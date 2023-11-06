// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuhSaWF4JhLPfmcQXO2ajHaICz9DXGUCQ",
  authDomain: "bug-shield.firebaseapp.com",
  projectId: "bug-shield",
  storageBucket: "bug-shield.appspot.com",
  messagingSenderId: "430093044065",
  appId: "1:430093044065:web:9b69f783bdcd2aebc79d20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
