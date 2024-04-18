// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyW9I8rKUFOTh8CW3WyE4HXDzLL0t94zc",
  authDomain: "orebyrafi.firebaseapp.com",
  projectId: "orebyrafi",
  storageBucket: "orebyrafi.appspot.com",
  messagingSenderId: "119764405127",
  appId: "1:119764405127:web:c89408cddae4486852e122",
  measurementId: "G-WTVN0QFCFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig