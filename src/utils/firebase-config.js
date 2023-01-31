
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDjwKcllAh3gpBGnXqaEc8wHs9HBoKa9kA",
  authDomain: "netfrik-b7142.firebaseapp.com",
  projectId: "netfrik-b7142",
  storageBucket: "netfrik-b7142.appspot.com",
  messagingSenderId: "618770526403",
  appId: "1:618770526403:web:ee782324e901d88967f276",
  measurementId: "G-6R8Y7QDYMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)