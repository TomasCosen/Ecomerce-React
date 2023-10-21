import { useEffect, useState } from "react";
import { itemService } from "../../services/list";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(itemService.getDatas());
  }, []);

  return (
    <div>
      <h1 className="text-center">{greeting}</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
