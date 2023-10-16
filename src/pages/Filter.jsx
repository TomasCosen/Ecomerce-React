import React from 'react';
import { itemService } from '../services/list'; // Asegúrate de importar el servicio adecuado

const ItemsFiltered = () => {
  const ids = [1, 2, 3, 4, 6, 8, 11, 12, 13, 15]; // Los IDs que deseas mostrar

  // Obtiene los datos y filtra los elementos que coinciden con los IDs
  const filteredItems = itemService.getDatas().filter(item => ids.includes(item.id));

  return (
    <div>
      <h2>Elementos a mostrar:</h2>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>
            <p>Nombre: {item.name}</p>
            <p>Precio: {item.price}</p>
            <p>Descripción: {item.description}</p>
            <p>Descripción extendida: {item.descriptionExt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default ItemsFiltered;
