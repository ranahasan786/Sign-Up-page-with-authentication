import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyD-d-AQoM6D9A22QY_H2BTpkMizV7f9aZA",
    authDomain: "project-71de3.firebaseapp.com",
    projectId: "project-71de3",
    storageBucket: "project-71de3.appspot.com",
    messagingSenderId: "1055114533235",
    appId: "1:1055114533235:web:c9bef641a2eafc08b20d06",
    measurementId: "G-2L8K6YH8GD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


export {
    auth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword, signOut
}