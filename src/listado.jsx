import Cita from "./Cita";


const Listado  = ({listado}) => {    
    return (
       <div class="one-half column">
            <h2>Administrar Tus Citas</h2>
            
            {listado?.map(obj=>(
                <Cita cita={obj}/>
            ))}
            
            
          </div>
    )
}

export default Listado;