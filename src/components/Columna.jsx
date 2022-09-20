import React, {useState} from 'react'
import Formulario from './Formulario'
import Item from './Item'

const Columna = ({columna, agregarItem, listaItems}) => {

    const [isEdit, setIsEdit] = useState(false)

    const editState = () => {
        setIsEdit(!isEdit)
    }

  return (
    <>
        <div className='m-1'>
                <div className='w-100 h-auto rounded-1 d-flex flex-column justify-content-between text-white p-2 bg-dark'>
                    <div className='bg-dark d-flex justify-content-between align-items-center border-bottom'>
                        <h4>{columna.nombre}</h4>
                        <button className='btn btn-dark ms-5 mb-2'>. . .</button>
                    </div>
                    <div className='bg-dark container h-auto p-2 me-5 d-flex justify-content-between flex-column'>

                        {listaItems.map(item=> item.columna == columna.id ? <Item item={item}/> : null)}

                        <div>
                            {isEdit ? <Formulario editState={editState} agregarItem={agregarItem} columna={columna}/> : <button onClick={editState} className='w-100 text-start btn btn-dark'>+ Agregar Tarea</button>}
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Columna