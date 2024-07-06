import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().categoria;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dietetica-silvia.onrender.com/api/products"
        );
        const data = await response.json();
        let products = data.docs;
        if (categoria) {
          products = products.filter(
            (product) => product.category === categoria
          );
        }
        setItems(products);
      } catch (e) {
        console.error("Error fetching data: ", e);
      }
    };
    fetchData();
  }, [categoria]);

  return (
    <div>
      <h1 className="text-center">{greeting}</h1>
      <ItemList items={items} titulo={titulo} />
    </div>
  );
};

export default ItemListContainer;
