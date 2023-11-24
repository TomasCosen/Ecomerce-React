import { useContext, useState } from "react"
import { CartContext } from "./CartContext/CartContext"
import { useForm } from "react-hook-form";
import { collection, addDoc, updateDoc, doc, getDoc} from "firebase/firestore";
import { db } from "../firebase/config";

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("")
    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)
    const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
        cliente: data,
        productos: carrito,
        total: precioTotal(),
    }
    const pedidosRef = collection( db, "Pedidos");

    addDoc(pedidosRef, pedido)
        .then((docRef) => {
            setPedidoId(docRef.id);
            Promise.all(
              carrito.map((producto) => {
                const productoRef = doc(db, 'Productos', producto.id);
                return getDoc(productoRef)
                  .then((productoDoc) => {
                    const stockActual = productoDoc.data().stock;
                    const nuevaCantidad = stockActual - producto.cantidad;

                    return updateDoc(productoRef, { stock: nuevaCantidad});
                  })
                  .catch((error) => {
                    console.error("Error al obtener informacion de productos: ", error)
                  });
              })
            ).then(() => {
              vaciarCarrito();
            });
        }).catch((error) => {
          console.error("Error al realizar la compra: ", error);
        })
  };
  if(pedidoId){
    return (
        <div className="container">
            <h1 className="main-title">Muchas Gracias por tu compra!</h1>
            <p>Tu número de pedido es: {pedidoId}</p>
        </div>
    )
  }
    return(
        <div className="container">
      <h1 className="main-title">Finalizar Compra</h1>
      <form className="formulario" onSubmit={handleSubmit(comprar)}>
        <input
          type="text"
          placeholder="Ingresá tu nombre"
          {...register("nombre")}
        />
        <input
          type="text"
          placeholder="Ingresá tu apellido"
          {...register("apellido")}
        />
        <input
          type="text"
          placeholder="Ingresá tu e-mail"
          {...register("email")}
        />
        <input
          type="text"
          placeholder="Ingresá tu teléfono"
          {...register("telefono")}
        />

        <button type="submit">Comprar</button>
      </form>
    </div>
    )
}
export default Checkout