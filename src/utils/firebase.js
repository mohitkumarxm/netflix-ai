// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8nyt5mL2EdiLvnyZNHzmu0qcRYa2huC0",
  authDomain: "netflix-ai-21809.firebaseapp.com",
  projectId: "netflix-ai-21809",
  storageBucket: "netflix-ai-21809.firebasestorage.app",
  messagingSenderId: "477743509879",
  appId: "1:477743509879:web:d775711297ee6bbbb0f172",
  measurementId: "G-2V8T2VEJH5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
