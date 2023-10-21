import { Table } from "react-bootstrap";
import Item from "./Item";


const Render = ({ items }) => {

  const renderItems = () => {
    const rta = [];
    for (let i = 0; i < items.length; i++) {
      rta.push(
        <Item
          key={items[i].name}
          id={items[i].id}
          name={items[i].name}
          price={items[i].price}
          description={items[i].description}
          onDelete={(name) => {
            console.log(name);
          }}
        />
      );
    }
    return rta;
  };
  return (
    <>
      <h2 className="text-center">Productos:</h2>
      <Table>
        <thead>
          <tr>
            <th>Producto n°</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>{renderItems()}</tbody>
      </Table>
    </>
  );
};

export default Render;

