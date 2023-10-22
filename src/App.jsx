import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"


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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
