import React, {useState} from 'react'
import Columna from './Columna'

const ContenedorColumnas = ({}) => { 

    const [columnas,setColumnas] = useState([{
        id:1,
        nombre:'Pendiente',
        color: '#252627',
        colorTitulo: "#124E78"
    },{
        id:2,
        nombre:'Proceso',
        color: '#252627',
        colorTitulo: "#E2C044"
    },{
        id:3,
        nombre:'Pausa',
        color: '#252627',
        colorTitulo: "#904E55"
    },{
        id:4,
        nombre:'Realizado',
        color: '#252627',
        colorTitulo: "#6BF178"
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
            <div className="d-flex justify-content">
                {columnas.map(columna =>
                    <Columna key={columna.id} columna={columna} agregarItem={agregarItem} listaItems={listaItems} eliminarItem={eliminarItem} editarItem={editarItem}/>
                )}
            </div>
        </>
    ) 

}  

export default ContenedorColumnas