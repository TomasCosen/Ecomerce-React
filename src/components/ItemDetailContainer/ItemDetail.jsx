const ItemDetail = ({ item }) => {
  return (
    <>
      <div className="container">
        <h2>Producto: {`${item.name}`} </h2>
        <img src={`${item.img}`} alt={`${item.name}`} />
        <h3>Precio:{`$${item.price}`}</h3>
        <p>Descripción: {`${item.descriptionExt}`}</p>
      </div>
    </>
  );
};

export default ItemDetail;
