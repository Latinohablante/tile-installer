// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAuhqLGuSGRzE5W6D8ocbCa8S_7wfefsYg",

  authDomain: "tile-installer.firebaseapp.com",

  projectId: "tile-installer",

  storageBucket: "tile-installer.appspot.com",

  messagingSenderId: "3635773893",

  appId: "1:3635773893:web:e8e0ae15b9f02e5cbb8bac",

  measurementId: "G-0G25GKHMVQ"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getAnalytics(app);