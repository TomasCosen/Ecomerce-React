import Render from "./Render";
import { useEffect, useState } from "react";
import { itemService } from "../../services/list";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(itemService.getDatas());
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">{greeting}</h1>
      <Render items={items} />
    </div>
  );
};

export default ItemListContainer;
