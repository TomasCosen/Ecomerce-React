import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const docRef = doc(db, "Productos", id);
    getDoc(docRef)
      .then((resp) => {
        setItem(
          {...resp.data(), id: resp.id}
        );
      })

    
  }, [id]);
  return (
    <div className="main-title">
      {item ? <ItemDetail item={item} /> : <h2 className="container text-center">Cargando Datos...</h2> }  
    </div>
    
  ) 
};

export default ItemDetailContainer;
