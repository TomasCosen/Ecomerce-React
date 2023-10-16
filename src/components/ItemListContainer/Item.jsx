import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({
  id,
  name,
  price,
  description,
  onDelete,
}) => {

  return (
    <tr>
      <td>
          <img src={``} alt={`${id}`} height={50} />
        </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{description}</td>
      <td>
        <Button onClick={() => onDelete(name)} className="btn-danger">
          Eliminar
        </Button>{" "}
        <Link to={`/alimentos/${id}`}>Ver detalle</Link>{" "}
      </td>
    </tr>
  );
};

export default Item;
