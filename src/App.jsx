import Listado from "./listado.jsx"
import Formulario from "./formulario.jsx"

function App() {
  const citas = [
    {
      mascota: "Nina",
      dueño: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna"
    },
    {
      mascota: "Sifon",
      dueño: "Flecha",
      fecha: "2023-08-05",
      hora: "09:24",
      sintomas: "Duerme mucho"
    },
    {
      mascota: "Floki",
      dueño: "Ari",
      fecha: "2023-08-05",
      hora: "16:15",
      sintomas: "No está comiendo"
    }
  ]

  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div class="container">
        <div class="row">
          <Formulario/>
          <Listado listado={citas}/>
        </div>
      </div>
      
    </>
  )
}

export default App
