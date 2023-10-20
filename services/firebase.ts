import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDdEAjF17IoO36QGePW6R7g9gaa-ceutR8",
    authDomain: "bird-8a2c1.firebaseapp.com",
    projectId: "bird-8a2c1",
    storageBucket: "bird-8a2c1.appspot.com",
    messagingSenderId: "981835821326",
    appId: "1:981835821326:web:2437b4316c5fd75701275f"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

