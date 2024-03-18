import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQw7zSK7mEuPiAZytkW-LtKIGa5o9gjxY",
  authDomain: "aston-react-8d61b.firebaseapp.com",
  projectId: "aston-react-8d61b",
  storageBucket: "aston-react-8d61b.appspot.com",
  messagingSenderId: "153127909962",
  appId: "1:153127909962:web:e10f152e790a6742a484b3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
