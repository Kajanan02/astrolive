import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAr6nPkFgwX1aHPNBisW1_v3Jra0vbUXlw",
    authDomain: "astrolive-81feb.firebaseapp.com",
    projectId: "astrolive-81feb",
    storageBucket: "astrolive-81feb.appspot.com",
    messagingSenderId: "590248920219",
    appId: "1:590248920219:web:b48bb997392a6493ae323e",
    measurementId: "G-L3523YLS8H"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)