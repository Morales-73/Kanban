import React, {useState} from 'react' 
import Columna from './Columna'

const ContenedorColumnas = ({agregarItem}) => { 

    const [columnas,setColumnas] = useState([{
        id:1,
        nombre:'Pendiente'
    },{
        id:2,
        nombre:'En proceso'
    },{
        id:3,
        nombre:'En pausa'
    },{
        id:4,
        nombre:'Realizado'
    }])

    return (
        <div className="border bg-secondary rounded-3 border d-flex justify-content">
            {columnas.map(item=>
                <Columna key={item.id} agregarItem={agregarItem} nombreItem={item.nombre}/>
            )}
        </div>
    )
}    

export default ContenedorColumnas