import React, {useState} from 'react' 
import Columna from './Columna'

const ContenedorColumnas = ({}) => { 

    const [columnas,setColumnas] = useState([{
        id:1,
        nombre:'Pendiente',
        cards: []
    },{
        id:2,
        nombre:'En proceso',
        cards: []
    },{
        id:3,
        nombre:'En pausa',
        cards: []
    },{
        id:4,
        nombre:'Realizado',
        cards: []
    }])

    const agregarItem = (tituloItem, columnaCards) => {

        const nuevoItem = {
          id: 1,
          titulo: tituloItem,
          columna: columnaCards.id
        }
        

        switch (columnaCards.id) {
            case columnaCards.id == nuevoItem.columna:
                
                const cardColumna = 

                return setColumnas()
                break;
        
            default:
                
                break;
        }

    }


    return (
        <div className="border bg-secondary rounded-3 border d-flex justify-content">
            {columnas.map(item=>
                <Columna key={item.id}  columnaCards={item}/>
            )}
        </div>
    )
}    

export default ContenedorColumnas