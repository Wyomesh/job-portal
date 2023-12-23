// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSfiJIH9DK2RLALDMno4Sv8r9H9S5MmMQ",
  authDomain: "job-posting-30fec.firebaseapp.com",
  projectId: "job-posting-30fec",
  storageBucket: "job-posting-30fec.appspot.com",
  messagingSenderId: "402782816262",
  appId: "1:402782816262:web:17ec171c45f584bc261b87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
