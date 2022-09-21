import React from 'react'
import '../index.css'
import FormEditarItem from './EditarItem'

const Item = ({item, eliminarItem, editarItem}) => {

  return (
    <>
        <div>
            <ol className="list-group mb-2">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className='descripcion'>
                        <span className="fw-bold">{item.titulo}</span>
                        <span className="ms-2 badge bg-primary rounded-pill">Prioridad</span>
                        <p className='parrafo'>Sacar al perro mañana a las 9:20</p>
                    </div>
                    <div className='d-flex flex-column'>
                        <button className='btn btn-danger rounded-pill mb-2' onClick={()=> eliminarItem(item.id)}>Eliminar</button>
                        <h1>{item.id}</h1>
                        <FormEditarItem editarItem={editarItem} itemId={item.id}/>
                    </div>
                </li>
            </ol>
        </div>
    </>
  )
}

export default Item