// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFPSel9yqIks8HRdkL9sVSchFZSV5obhA",
  authDomain: "walmart-ecommerce-app-d2d0c.firebaseapp.com",
  projectId: "walmart-ecommerce-app-d2d0c",
  storageBucket: "walmart-ecommerce-app-d2d0c.appspot.com",
  messagingSenderId: "890564935416",
  appId: "1:890564935416:web:9432b36cabcc0555de850d",
  measurementId: "G-MLFKZNZZK0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig