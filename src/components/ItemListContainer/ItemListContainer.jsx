import React from "react";

const ItemListContainer = ({ greetings }) => {
  return (
    <div className="container">
      <h3 className="text-center m-5">{greetings}</h3>
    </div>
  );
};

export default ItemListContainer;
