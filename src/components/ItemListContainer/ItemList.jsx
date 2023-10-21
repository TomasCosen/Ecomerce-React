import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <>
      <div className="container">
        <h2 className="main-title">Productos:</h2>
        <div className="productos">
          {items.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemList;
