import React from "react"

const Cita = ({cita, aBorrar, setCitas}) => {

    const eliminarCita = () => {
        const confirmar = confirm("¿Eliminar esta cita?");
        if (!confirmar) return;

        setCitas(prev => prev.filter((_, i) => i !== aBorrar)); //recorre el array :)
    };

    return (
        <div class="cita">
          <p>Mascota: <span>{cita?.mascota}</span></p>
          <p>Dueño: <span>{cita?.dueño}</span></p>
          <p>Fecha: <span>{cita?.fecha}</span></p>
          <p>Hora: <span>{cita?.hora}</span></p>
          <p>Sintomas: <span>{cita?.sintomas}</span></p>
          <button class="button elimnar u-full-width" onClick={eliminarCita}>Eliminar ×</button>
        </div>
    )
}
export default Cita;