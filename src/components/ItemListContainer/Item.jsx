import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="producto">
      <img src={item.thumbnail} alt={item.title} />{" "}
      <div>
        <h4>{item.title}</h4>
        <p>Precio: ${item.price}</p>
        <p>Categoría: {item.category}</p>
        <Link to={`/alimentos/${item._id}`} className="ver-mas">
          {" "}
          Ver Detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
