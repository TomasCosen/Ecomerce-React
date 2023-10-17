import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

import AlimentosAG from "./pages/AlimentosAG";


function App() {
  const greeting = "Bienvenido a Dietética Silvia";
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer  greeting={greeting}/>} />
          <Route path="/alimentos/:id" element={<ItemDetailContainer />} />
          <Route path="/alimentos" element={<AlimentosAG />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
