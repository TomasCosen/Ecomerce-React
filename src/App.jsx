import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contacto/Contacto";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from "./components/Cart/Cart";
/* import {getFirestore, doc, getDoc} from "firebase/firestore" */
/* ------------------------------------------------------------------------------------------------------- SDK*/

import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyAbGrHiGDaMwM_a4zP8NU3VjukddonYBnI",
  authDomain: "dieteticasilvia.firebaseapp.com",
  projectId: "dieteticasilvia",
  storageBucket: "dieteticasilvia.appspot.com",
  messagingSenderId: "466011411377",
  appId: "1:466011411377:web:c957f6fb83ceb9a1592390",
  measurementId: "G-YC7PC0Y6DG"
};

initializeApp(firebaseConfig);
/* ------------------------------------------------------------------------------------------------------- */




function App() {
  const greeting = "Bienvenido a Dietética Silvia";
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer  greeting={greeting}/>} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/alimentos/:id" element={<ItemDetailContainer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
