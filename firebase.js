// firebase.js
// Config y utilidades compartidas para las páginas
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// === TU firebaseConfig (ya pegado) ===
const firebaseConfig = {
  apiKey: "AIzaSyAcqdPzBs7LqcEOorx1wruh_mUh8tUzv_U",
  authDomain: "minitube-com.firebaseapp.com",
  projectId: "minitube-com",
  storageBucket: "minitube-com.firebasestorage.app",
  messagingSenderId: "563953160914",
  appId: "1:563953160914:web:b363654d757fdddd49130b",
  measurementId: "G-530SWPJWKW"
};

// Inicializar
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Exports
export { app, auth, db, storage };