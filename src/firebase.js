import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // ✅ This is for auth
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5zjtq4jux6yKgqSoYwxOLbvuGu_k36yo",
  authDomain: "shreenda-architects.firebaseapp.com",
  projectId: "shreenda-architects",
  storageBucket: "shreenda-architects.firebasestorage.app",
  messagingSenderId: "1039007916223",
  appId: "1:1039007916223:web:a2ebbfcbe10056d67ae60a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ Exporting auth for use in your app
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Configure Google provider
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Add GitHub Pages domain to authorized domains
if (window.location.hostname === 'gauravshidling.github.io') {
  auth.useDeviceLanguage();
}

export { auth, db, googleProvider };
export default app;