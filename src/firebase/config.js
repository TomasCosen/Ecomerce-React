
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAbGrHiGDaMwM_a4zP8NU3VjukddonYBnI",
  authDomain: "dieteticasilvia.firebaseapp.com",
  projectId: "dieteticasilvia",
  storageBucket: "dieteticasilvia.appspot.com",
  messagingSenderId: "466011411377",
  appId: "1:466011411377:web:c957f6fb83ceb9a1592390",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

