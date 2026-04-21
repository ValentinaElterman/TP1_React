import Listado from "./listado.jsx"
import Formulario from "./formulario.jsx"
import React, {useState,useEffect} from "react";


function App() {
  const [citas, setCitas] = useState(() => {
  const citasGuardadas = localStorage.getItem("citas");
  return citasGuardadas ? JSON.parse(citasGuardadas) : [];
});

useEffect(() => {
  localStorage.setItem("citas", JSON.stringify(citas));
}, [citas]); // Se ejecuta cada vez que 'citas' se modifica
  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div class="container">
        <div class="row">
          <Formulario setCitas={setCitas}/>
          <Listado listado={citas} setCitas={setCitas}/>
        </div>
      </div>
      
    </>
  )
}

export default App
