import "./App.css";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const greeting = "Bienvenido a Dietética Silvia";
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>

      <ItemListContainer greetings={greeting} />
    </>
  );
}

export default App;
