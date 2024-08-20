import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-mern-tutorial.firebaseapp.com",
  projectId: "auth-mern-tutorial",
  storageBucket: "auth-mern-tutorial.appspot.com",
  messagingSenderId: "446045061830",
  appId: "1:446045061830:web:a6b31bd182fea677c14dc7",
  measurementId: "G-9ZPKCPVXEX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
