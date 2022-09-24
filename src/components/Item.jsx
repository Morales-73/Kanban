import React from 'react'
import '../index.css'
import EditarItem from './EditarItem'

const Item = ({item,  eliminarItem, editarItem, moverItem, columna}) => {

  return (
    <>
        <div style={{backgroundColor: "#252627"}}>
            <ol className="list-group mb-2" style={{backgroundColor: "#3A7CA5"}}>
                <li className="list-group-item d-flex justify-content-between align-items-start" style={{backgroundColor: "#3A7CA5"}}>
                    <div className='descripcion'>
                        <span className="fw-bold fs-3">{item.titulo}</span>
                        <div>
                            <span className="ms-2 badge rounded-pill m-2" style={{backgroundColor: item.prioridadColor}}>{item.prioridad}</span>
                            <span className="ms-2 badge rounded-pill m-2" style={{backgroundColor: item.prioridadColor}}>{item.estimacion}</span>
                        </div>
                        <p className='parrafo'>{item.descripcion}</p>
                    </div>
                    <div className='d-flex flex-column'>
                        <button className='btn btn-danger rounded-pill mb-2' onClick={()=> eliminarItem(item.id)}>Eliminar</button>
                        <EditarItem editarItem={editarItem} moverItem={moverItem} item={item} columna={columna}/>
                    </div>
                </li>
            </ol>
        </div>
    </>
  )
}

export default Item