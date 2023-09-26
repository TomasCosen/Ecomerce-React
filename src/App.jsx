import "./App.css";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

function App() {
  const greeting = "Bienvenido a Dietética Silvia";
  return (
    <>
      <NavBar />

      <ItemListContainer greetings={greeting} />
    </>
  );
}

export default App;
