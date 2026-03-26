import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Listado from "./listado.jsx"
import Formulario from "./formulario.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Formulario/>
      <Listado/>
    </>
  )
}

export default App
