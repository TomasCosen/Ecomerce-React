import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(1);
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad-1)
    }
    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad+1)
    }
    const handleAgregar = () => {
      console.log({...item, cantidad})
  }
  return (
    <>
      <div className="container">
        <div className="producto-detalle">
          <img src={`${item.img}`} alt={`${item.name}`} />
          <div>
            <h3 className="titulo">Producto: {`${item.name}`} </h3>
            <p className="descripcion">
              Descripción: {`${item.descriptionExt}`}
            </p>
            <p className="categoria">Categoría: {item.category}</p>
            <p className="precio">Precio:{`$${item.price}`}</p>
            <ItemCount cantidad ={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={handleAgregar} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
