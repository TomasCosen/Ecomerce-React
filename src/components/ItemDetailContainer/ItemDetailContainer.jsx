import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dietetica-silvia.onrender.com/api/products/${id}`
        );
        const data = await response.json();
        setItem(data);
      } catch (e) {
        console.error("Error fetching data", e);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="main-title">
      {item ? (
        <ItemDetail item={item} />
      ) : (
        <h2 className="container text-center">Cargando Datos...</h2>
      )}
    </div>
  );
};

export default ItemDetailContainer;
