import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ This is for auth

const firebaseConfig = {
  apiKey: "AIzaSyD5zjtq4jux6yKgqSoYwxOLbvuGu_k36yo",
  authDomain: "shreenda-architects.firebaseapp.com",
  projectId: "shreenda-architects",
  storageBucket: "shreenda-architects.firebasestorage.app",
  messagingSenderId: "1039007916223",
  appId: "1:1039007916223:web:a2ebbfcbe10056d67ae60a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // ✅ Exporting auth for use in your app
export default app;