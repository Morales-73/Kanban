import React, {useState} from 'react'
import FormAgregarItem from './FormAgregarItem'
import Item from './Item'
import '../index.css'

const Columna = ({columna, agregarItem, listaItems, eliminarItem, editarItem, moverItem, columnas}) => {

    const [isEdit, setIsEdit] = useState(false)

    const editState = () => {
        setIsEdit(!isEdit)
    }

  return (
    <>
        <div className='m-2 p-1' style={{width: '380px'}}>
            <div className='columna w-100 h-auto rounded-3 d-flex flex-column justify-content-between text-white p-4 p-2' style={{backgroundColor: columna.color}}>

                <div className='d-flex justify-content-between align-items-center border-bottom'>
                    <h4 className="font text-dark rounded-pill m-2 p-2" style={{backgroundColor: columna.colorTitulo}}>{columna.nombre}</h4>
                </div>

                <div className='container h-auto p-2 me-5 d-flex justify-content-between flex-column'>

                    {listaItems.map(item => item.columna == columna.id ? <Item key={item.id} columnas={columnas} item={item} columna={item} eliminarItem={eliminarItem} editarItem={editarItem} moverItem={moverItem} /> : null )}

                </div>

                <div>
                    {isEdit ? <FormAgregarItem editState={editState} agregarItem={agregarItem} columna={columna} /> : <button onClick={editState} className='w-100 text-start btn btn-dark p-1'>+ Agregar Tarea</button>}
                </div>

            </div>
        </div>
    </>
  )
}

export default Columna