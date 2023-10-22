//import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="producto">
      <img src={item.img} alt={item.name} />
      <div>
        <h4>{item.name}</h4>
        <p>Precio: ${item.price}</p>
        <p>{item.description}</p>
        <Link to={`/alimentos/${item.id}`} className="ver-mas" >
          Ver Detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
