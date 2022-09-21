import React from 'react'
import '../index.css'
import EditarItem from './EditarItem'

const Item = ({item}) => {


   
  return (
    <>
        <div>
            <ol className="list-group mb-2">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className='descripcion'>
                        <span className="fw-bold">{item.titulo}</span>
                        <span className="ms-2 badge bg-primary rounded-pill">{item.prioridad}</span>
                        <span className="ms-2 badge bg-primary rounded-pill">{item.estimacion}</span>
                        <p className='parrafo'>{item.descripcion}</p>
                    </div>
                    <div className='d-flex flex-column'>
                        <button className='btn btn-danger rounded-pill mb-2' onClick={()=> eliminarItem(item.id)}>Eliminar</button>
                        <EditarItem editarItem={editarItem} item={item}/>
                    </div>
                </li>
            </ol>
        </div>
    </>
  )
}

export default Item