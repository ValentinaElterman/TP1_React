import Listado from "./listado.jsx"
import Formulario from "./formulario.jsx"
import React, {useState,useEffect} from "react";
import api from './services/api.js';
import CitaList from "./componentes/CitaList.jsx";


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
      <div className="container">
        <div className="row">
          <div className="one-half column">
          <Formulario setCitas={setCitas} citas = {citas}/>
          <Listado listado={citas} setCitas={setCitas}/>
          </div> //no CitaList
        </div>
      </div>
    </>
  )
}

export default App
