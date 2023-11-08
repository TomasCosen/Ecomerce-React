import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { db } from "../../firebase/config";
import { useState } from "react";

const Contacto = () => {
  const [contactoId, setContactoId] = useState("")
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    const contacto = {
      cliente: data
    }
    const contactoRef = collection( db, "Contacto");
    addDoc(contactoRef, contacto)
      .then((doc) => {
        setContactoId(doc.id);
      })
  };
  if(contactoId){
    return(
      <div className="container">
        <h1 className="main-title">Será contactado a la brevedad, Muchas gracias!</h1>
      </div>
    )
  }
  
  return (
    <div className="container">
      <h1 className="main-title">Contacto</h1>
      <form className="formulario" onSubmit={handleSubmit(enviar)}>
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

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
