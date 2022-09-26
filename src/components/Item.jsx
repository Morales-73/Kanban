import React, {useState} from 'react'
import MoverItem from './MoverItem'
import FormEditarItem from './FormEditarItem'
import '../index.css'

const Item = ({item,  eliminarItem, editarItem, moverItem, columnas}) => {

    const [isEdit, setIsEdit] = useState(false)
    const [isMover, setIsMover] = useState(false)

    const editState = () => {
        setIsEdit(!isEdit)
    }

    const moverState = () => {
        setIsMover(!isMover)
    }

  return (
    <>
        <div style={{backgroundColor: "#252627"}}>
            <ol className="list-group mb-2" style={{backgroundColor: "#3A7CA5"}}>
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{backgroundColor: "#3A7CA5"}}>
                    <div className='info-items me-5'>
                        <span className="fw-bold fs-3">{item.titulo}</span>
                        <div>
                            <span className="badge rounded-pill me-2" style={{backgroundColor: item.prioridadColor}}>{item.prioridad}</span>
                            <span className="badge rounded-pill" style={{backgroundColor: item.prioridadColor}}>{item.estimacion}</span>
                            <p className='descripcion'>{item.descripcion}</p>
                        </div>
                    </div>
                    <div className='d-flex flex-column'>
                        <button className='btn btn-danger rounded-pill mb-2' onClick={()=> eliminarItem(item.id)}>Eliminar</button>
                        {isEdit ? <FormEditarItem editState={editState} editarItem={editarItem} item={item}/> : <button className='btn btn-success w-100 rounded-pill mb-2' onClick={()=>editState()}>Editar</button>}
                        {isMover ? <MoverItem item={item} moverItem={moverItem} columnas={columnas} moverState={moverState}/> : <button className='btn btn-primary w-100 rounded-pill' onClick={()=>{moverState()}}>Mover</button> }
                    </div>
                </li>
            </ol>
        </div>
    </>
  )
}

export default Item