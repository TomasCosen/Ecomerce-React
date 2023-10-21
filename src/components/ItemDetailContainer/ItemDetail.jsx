const ItemDetail = ({ item }) => {
  return (
    <>
      <div className="container">
        <div className="producto-detalle">
          <img src={`${item.img}`} alt={`${item.name}`} />
          <div>
            <h3 className="titulo">Producto: {`${item.name}`} </h3>
            <p className="descripcion">
              Descripción: {`${item.descriptionExt}`}
            </p>
            <p className="categoria">Categoría: {item.category}</p>
            <p className="precio">Precio:{`$${item.price}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
