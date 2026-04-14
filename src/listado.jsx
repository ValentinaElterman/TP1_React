import Cita from "./Cita";


const Listado  = ({listado, setCitas}) => {    
    return (
       <div class="one-half column">
            <h2>Administrar Tus Citas</h2>
            
            {listado?.map((obj,aBorrar) =>( //importante el doble parentesis porque sino no anda nada xd
                <Cita
                key={aBorrar}
                cita={obj}
                aBorrar={aBorrar}
                setCitas={setCitas}/>
            ))}
            
            
          </div>
    )
}

export default Listado;