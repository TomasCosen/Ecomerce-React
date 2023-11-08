import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../firebase/config"

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().categoria;

  useEffect(() => {
    const productosRef = collection(db, "Productos");
    const q = categoria ? query(productosRef, where("Macro", "==", categoria)) : productosRef

    getDocs(q)
      .then((resp) => {
        setItems(
          resp.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
          })
        )
      })

  }, [categoria]);

  return (
    <div>
      <h1 className="text-center">{greeting}</h1>
      <ItemList items={items} titulo={titulo}/>
    </div>
  );
};

export default ItemListContainer;
