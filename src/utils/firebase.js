// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfb9rXWSar0HQjf_I_Xo2JlSB2ITHHssg",
  authDomain: "netflix-gpt-2ba81.firebaseapp.com",
  projectId: "netflix-gpt-2ba81",
  storageBucket: "netflix-gpt-2ba81.appspot.com",
  messagingSenderId: "203023499278",
  appId: "1:203023499278:web:4ebb7fce12a293d3d4bc5f",
  measurementId: "G-MMGD4CRTSE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
