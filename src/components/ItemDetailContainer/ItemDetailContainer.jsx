import React from "react";
import { useParams } from "react-router-dom";
import { itemService } from "../../services/list";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const item = itemService.getData(id);
  console.log(item);
  return (
    <>
      <h2>Producto: {item.name} </h2>
      <img src={`${item.img}`} alt={`${item.name}`} />
      <h3>Precio:{item.price}</h3>
      <p>Descripción: {item.descriptionExt}</p>
    </>
  );
};

export default ItemDetailContainer;
