// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMI9Q-PaeOC9IYpIXBa_MF3J6fYAStxB8",
  authDomain: "medical-dashboard-9fa4e.firebaseapp.com",
  projectId: "medical-dashboard-9fa4e",
  storageBucket: "medical-dashboard-9fa4e.firebasestorage.app",
  messagingSenderId: "944319228641",
  appId: "1:944319228641:web:940e2748fcab2a1a25e5a0",
  measurementId: "G-WYZ7ZHH20C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);