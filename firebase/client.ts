import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC_w5F6u6yfCHW1wXALE9vn3FzRvfsCZJw",
  authDomain: "waleai-59718.firebaseapp.com",
  projectId: "waleai-59718",
  storageBucket: "waleai-59718.firebasestorage.app",
  messagingSenderId: "396594619308",
  appId: "1:396594619308:web:3581e59b570b959b84d009",
  measurementId: "G-MEGVJQW4QE"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);