import React, {useState, useEffect} from 'react'
import Columna from './Columna'

const ContenedorColumnas = ({}) => { 

    const [columnas,setColumnas] = useState([{
        id:1,
        nombre:'Pendiente',
        color: '#252627',
        colorTitulo: "#3A7CA5"
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

    const [listaItems, setListaItems] = useState([])

    useEffect(()=>{
        if (localStorage.getItem('items')) {
          setListaItems(JSON.parse(localStorage.getItem('items')));
        }
    },[]);

    useEffect(()=>{
        localStorage.setItem('items', JSON.stringify(listaItems));
    },[listaItems])

    const agregarItem = (tituloItem,idColumna) => {

        const prioridad = ["Baja","Normal","Urgente"]
        const random =  Math.floor(Math.random() * prioridad.length)

        const nuevoItem = {
            id: Math.floor(Math.random()*1000),
            titulo: tituloItem,
            columna: Number(idColumna),
            descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            prioridad: prioridad[random],
            estimacion: Math.floor(Math.random()*30),
            prioridadColor: "#252627",
            estimacionColor: "#252627"
          }

        setListaItems([...listaItems, nuevoItem])
    }

    const eliminarItem = (idItem) => {
        const itemAEliminar = listaItems.filter(i => i.id !== idItem)
        setListaItems(itemAEliminar)
    }

    const editarItem = (id, tituloNuevo) => {
        console.log(tituloNuevo,id)
        const itemAEditar = listaItems.find(item => item.id === id)
        itemAEditar.titulo = tituloNuevo
        setListaItems([...listaItems])
    }

    const moverItem = (idColumnaItem, idItem) => {
        console.log(idItem)
        console.log(listaItems)
        const item = listaItems.find(item => item.id === idItem)

        console.log("item: " + item +" "+ typeof(item) + " " + item.columna)
        console.log("columna: " + idColumnaItem)

        item.columna = idColumnaItem
        const itemAMover =  listaItems.find(item => item.columna === Number(idColumnaItem))
        console.log('itemAmover ' + itemAMover)
        itemAMover.columna = idColumnaItem
        setListaItems([...listaItems])
    }

    console.log(listaItems)

    return (
        <>
            <div>
                <div className="d-flex justify-content">
                    {columnas.map(columna =>
                        <Columna key={columna.id} columna={columna} columnas={columnas} agregarItem={agregarItem} listaItems={listaItems} eliminarItem={eliminarItem} editarItem={editarItem} moverItem={moverItem} />
                    )}
                </div>
            </div>
        </>
    ) 

}  

export default ContenedorColumnas