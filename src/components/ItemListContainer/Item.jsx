//import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="producto">
      <img src={item.img} alt={item.name} />
      <div>
        <h4>{item.name}</h4>
        <p>Precio: ${item.price}</p>
        <p>{item.description}</p>
        <a href={`/alimentos/${item.id}`} className="ver-mas">
          Ver Detalle
        </a>
      </div>
    </div>
  );
};

export default Item;
