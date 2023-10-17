import Render from "./Render";
import { itemService } from "../../services/list";

const ItemListContainer = ({ greeting }) => {
  const items = itemService.getDatas();
  return (
    <div className="container">
      <h1 className="text-center">{greeting}</h1>
      <h2 className="text-center">Productos:</h2>
      <Render items={items} />
    </div>
  );
};

export default ItemListContainer;
