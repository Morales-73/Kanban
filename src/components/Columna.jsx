import React, {useState} from 'react'
import Formulario from './Formulario'
import Item from './Item'
import '../index.css'
import MenuColumna from './MenuColumna'

const Columna = ({columna, agregarItem, listaItems, eliminarItem, editarItem}) => {

    const [isEdit, setIsEdit] = useState(false)

    const editState = () => {
        setIsEdit(!isEdit)
    }

    

  return (
    <>
        <div className='m-2 p-1' style={{width: '400px', }}>
                <div className='columna w-100 h-auto rounded-3 d-flex flex-column justify-content-between text-white p-4 p-2' style={{backgroundColor: columna.color}}>
                    <div className='d-flex justify-content-between align-items-center border-bottom'>
                        <h4 className="font text-dark rounded-pill m-2 p-2" style={{backgroundColor: columna.colorTitulo}}>{columna.nombre}</h4>
                        <MenuColumna/>
                    </div>
                    <div className='container h-auto p-2 me-5 d-flex justify-content-between flex-column'>

                        {listaItems.map(item=> item.columna == columna.id ? <Item key={item.id} item={item} eliminarItem={eliminarItem} editarItem={editarItem}/> : null)}

                        <div>
                            {isEdit ? <Formulario editState={editState} agregarItem={agregarItem} columna={columna}/> : <button onClick={editState} className='w-100 text-start btn btn-dark p-1 m-2'>+ Agregar Tarea</button>}
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Columna