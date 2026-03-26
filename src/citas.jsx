import React from "react"
import './App.css'

const Citas = () => {
    return (
        <ul>
          <div class="one-half column">
            <div class="cita">
              <li>Mascota: <span>Nina</span></li>
              <p>Dueño: <span>Martin</span></p>
              <p>Fecha: <span>2021-08-05</span></p>
              <p>Hora: <span>08:20</span></p>
              <p>Sintomas: <span>Le duele la pierna</span></p><button class="button elimnar u-full-width">Eliminar ×</button>
            </div>
            <div class="cita">
              <li>Mascota: <span>Sifon</span></li>
              <li>Dueño: <span>Flecha</span></li>
              <li>Fecha: <span>2023-08-05</span></li>
              <li>Hora: <span>09:24</span></li>
              <li>Sintomas: <span>Duerme mucho</span></li><button class="button elimnar u-full-width">Eliminar ×</button>
            </div>
            <div class="cita">
              <li>Mascota: <span>Floki</span></li>
              <li>Dueño: <span>Ari</span></li>
              <li>Fecha: <span>2023-08-05</span></li>
              <li>Hora: <span>16:15</span></li>
              <li>Sintomas: <span>No está comiendo</span></li><button class="button elimnar u-full-width">Eliminar ×</button>
            </div>
          </div>
        </ul>
    )
}
export default Citas;