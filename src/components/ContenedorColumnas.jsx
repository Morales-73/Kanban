import React, {useState} from 'react'
import Columna from './Columna'

const ContenedorColumnas = ({}) => { 

    const [columnas,setColumnas] = useState([{
        id:1,
        nombre:'Pendiente',
        color: '#F28F3B'
    },{
        id:2,
        nombre:'En proceso',
        color: '#0D3B66'
    },{
        id:3,
        nombre:'En pausa',
        color: '#8B2635'
    },{
        id:4,
        nombre:'Realizado',
        color: 'green'
    }])

    const [listaItems, setItemsItems] = useState([])

    const agregarItem = (tituloItem,idColumna) => {

        const nuevoItem = {
            id: Math.floor(Math.random()*1000),
            titulo: tituloItem,
            columna: Number(idColumna)
          }

        setItemsItems([...listaItems, nuevoItem])
    }

    const eliminarItem = (idItem) => {
        const itemAEliminar = listaItems.filter(i => i.id !== idItem)
        setItemsItems(itemAEliminar)
    }

    const editarItem = (id, tituloNuevo) => {
        console.log(id)
        // const itemAEditar = todos.find(t => t.id === id)
        // todo.title = value
        // setItemsItems([...listaItems])
    }

    // console.log(listaItems)

    return (
        <>
            <div className="rounded-4 p-1 d-flex justify-content">
                {columnas.map(columna =>
                    <Columna key={columna.id} columna={columna} agregarItem={agregarItem} listaItems={listaItems} eliminarItem={eliminarItem} editarItem={editarItem}/>
                )}
            </div>
        </>
    ) 

}  

export default ContenedorColumnas