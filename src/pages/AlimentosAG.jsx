import React from "react";
import Render from "../components/ItemListContainer/Render";
import { itemService } from "../services/list";
import ItemsFiltered from "./Filter";
const AlimentosAG = () => {
  const items = itemService.getDatas();

  return (
    <div className="container">
      <h1 className="text-center m-5">Alimentos a Granel:</h1>
      <ItemsFiltered />
    </div>
  );
};

export default AlimentosAG;
