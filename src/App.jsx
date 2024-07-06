import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contacto/Contacto";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/CartContext/CartContext";
import Checkout from "./components/Checkout";
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";
import AuthProvider from "./AuthContext.js";

function App() {
  const greeting = "Bienvenido a Dietética Silvia";

  return (
    <>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer greeting={greeting} />}
              />
              <Route
                path="/productos/:categoria"
                element={<ItemListContainer />}
              />
              <Route path="/alimentos/:id" element={<ItemDetailContainer />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
