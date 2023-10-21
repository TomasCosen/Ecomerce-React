import React from "react";
import { itemService } from "../services/list"; // Asegúrate de importar el servicio adecuado
import Render from "../components/ItemListContainer/ItemList";

const ItemsFiltered = () => {
  const ids = [1, 2, 3, 4, 6, 8, 11, 12, 13, 15]; // Los IDs que deseas mostrar

  // Obtiene los datos y filtra los elementos que coinciden con los IDs
  const filteredItems = itemService
    .getDatas()
    .filter((item) => ids.includes(item.id));

  return (
    <div>
      <Render items={filteredItems} />
    </div>
  );
};

export default ItemsFiltered;
