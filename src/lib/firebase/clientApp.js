"use client";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCdpot4RTtUdU25MjcBnyV7rdN9TMPRQRM",
  authDomain: "hellobase-b0028.firebaseapp.com",
  projectId: "hellobase-b0028",
  storageBucket: "hellobase-b0028.firebasestorage.app",
  messagingSenderId: "246776823824",
  appId: "1:246776823824:web:09bc1a92e80bf72a244a95"
};


// Use automatic initialization
// https://firebase.google.com/docs/app-hosting/firebase-sdks#initialize-with-no-arguments
export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
