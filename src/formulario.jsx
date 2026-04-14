import React, { useState } from "react";

const Formulario = ({setCitas}) => {
  const [cita, setCita] = useState({
    mascota: "",
    dueño: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  const cambiar = (info) => {
    setCita({
      ...cita,
      [info.target.name]: info.target.value //ej: mascota = pepe
    });
  };

  const enviar = (info) => {
    info.preventDefault(); //no se recarga la pagina
    
    setCitas(prev => [...prev, cita]); //agrega la cita al array

    setCita({ //limpia el form para ingresar otra desp
      mascota: "",
      dueño: "",
      fecha: "",
      hora: "",
      sintomas: ""
    });
  };

    return (        
        <div class="one-half column">
        <h2>Crear mi Cita</h2>
        <form onSubmit={enviar}>

            <label>Nombre Mascota</label>
            <input
                name="mascota"
                className="u-full-width"
                value={cita.mascota}
                onChange={cambiar}
            />

            <label>Nombre Dueño</label>
            <input
                name="dueño"
                className="u-full-width"
                value={cita.dueño}
                onChange={cambiar}
            />

            <label>Fecha</label>
            <input
                type="date"
                name="fecha"
                className="u-full-width"
                value={cita.fecha}
                onChange={cambiar}
            />

            <label>Hora</label>
            <input
                type="time"
                name="hora"
                className="u-full-width"
                value={cita.hora}
                onChange={cambiar}
            />

            <label>Sintomas</label>
            <textarea
                name="sintomas"
                className="u-full-width"
                value={cita.sintomas}
                onChange={cambiar}
            />

            <button type="submit" className="u-full-width button-primary">
            Agregar Cita
            </button>
            </form>
        </div>        
    )
}

export default Formulario;