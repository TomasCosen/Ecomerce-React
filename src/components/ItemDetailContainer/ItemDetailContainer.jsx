import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { itemService } from "../../services/list";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(itemService.getData(id));
  }, [id]);
  return (
    <ItemDetail item={item}/>
  );
};

export default ItemDetailContainer;
