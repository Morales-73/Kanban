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

        const prioridad = ["Baja","Normal","Urgente"]
        const random =  Math.floor(Math.random() * prioridad.length)

        const nuevoItem = {
            id: Math.floor(Math.random()*1000),
            titulo: tituloItem,
            columna: Number(idColumna),
            descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            prioridad: prioridad[random],
            estimacion: Math.floor(Math.random()*30)
          }

        setItemsItems([...listaItems, nuevoItem])
    }

    const eliminarItem = (idItem) => {
        const itemAEliminar = listaItems.filter(i => i.id !== idItem)
        setItemsItems(itemAEliminar)
    }

    const editarItem = (id, tituloNuevo) => {
        console.log(tituloNuevo,id)
        const itemAEditar = listaItems.find(item => item.id === id)
        itemAEditar.titulo = tituloNuevo
        setItemsItems([...listaItems])
    }

    console.log(listaItems)

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