import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)
    const handleVaciar = () => {
        vaciarCarrito();
    }
    return (
        <div className="container">
            <h1 className="main-title">Carrito</h1>
            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <h3>{prod.name}</h3>
                        <p>${prod.price} c/u</p>
                        <p>${prod.price * prod.cantidad} total</p>
                        <p>Cantidad: {prod.cantidad}</p>
                    </div>
                )) 
            }
            {
                carrito.length > 0 ?
                <>
                    <h2>Precio Total: ${precioTotal()}</h2>
                    <button className="vaciar-carrito " onClick={handleVaciar}>Vaciar Carrito</button>{" "}
                    <Link className="finalizarcompra" to={"/checkout"}>Finalizar Compra</Link>
                </> :
                <h2>Añade productos al carrito para mostrar</h2>
            }
        </div>
    );
}

export default Cart