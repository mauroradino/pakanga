// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Importa el módulo de autenticación
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyA1eEXjgSOso2Y2RLFESqiGeRGoYZoLgDA",
    authDomain: "pakanga-3d5d6.firebaseapp.com",
    projectId: "pakanga-3d5d6",
    storageBucket: "pakanga-3d5d6.appspot.com",
    messagingSenderId: "459850590360",
    appId: "1:459850590360:web:c01dcf9f5f461c25fbc8ed"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  // Inicializa el módulo de autenticación
export const db = getFirestore(app)
