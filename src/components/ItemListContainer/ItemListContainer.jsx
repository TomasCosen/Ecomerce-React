import { useEffect, useState } from "react";
import { itemService } from "../../services/list";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().categoria;

  useEffect(() => {
    if(categoria){
      setItems(itemService.getDatas().filter((item) => item.macro === categoria))
      setTitulo(categoria)
    }else{
      setItems(itemService.getDatas());
      setTitulo("Productos")
    }
    

  }, [categoria]);

  return (
    <div>
      <h1 className="text-center">{greeting}</h1>
      <ItemList items={items} titulo={titulo}/>
    </div>
  );
};

export default ItemListContainer;
