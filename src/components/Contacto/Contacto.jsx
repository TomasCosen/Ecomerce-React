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
      <div className="row">
        <div className="col-md-5 col-12">
          <div>
            <h1 className="main-title">Contacto</h1>
            <form className="formulario " onSubmit={handleSubmit(enviar)}>
              
                <input className="m-1"
                  type="text"
                  placeholder="Ingresá tu nombre"
                  {...register("nombre")}
                />
                <input className="m-1"
                  type="text"
                  placeholder="Ingresá tu apellido"
                  {...register("apellido")}
                />
                <input className="m-1"
                  type="text"
                  placeholder="Ingresá tu e-mail"
                  {...register("email")}
                />
                <input className="m-1"
                  type="text"
                  placeholder="Ingresá tu teléfono"
                  {...register("telefono")}
                />
                <button  className="m-2" type="submit">Enviar</button>
            </form>
          </div>
        </div>
        

        <div className="col-md-7 col-12 d-flex align-items-center justify-content-center">
          <div className="text-center">
            <img className="img-fluid col-5" src="../../img/logo-png.png" alt="logo" />
            <h2 className="letra">Dietética Silvia</h2>
            <h3 className="letra">Contáctanos:</h3>
            <p className="letra fs-2">Silvia Riveiro</p>
            <p className="fs-4">Celular: +54 9 11 6183-0040</p>
            <p className="fs-4">Email: smr9003@hotmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
