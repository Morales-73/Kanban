import React, {useState} from 'react'
import FormEditarItem from './FormEditarItem' 
import MoverItem from './MoverItem'

const EditarItem = ({item, editarItem, moverItem, columnas, columnaItem}) => {

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
        <div>
            {isEdit ? 
            <FormEditarItem editState={editState} editarItem={editarItem} item={item}/> : 
            <button className='btn btn-success w-100 rounded-pill mb-2' onClick={()=>editState()}>Editar</button>}

            {isMover ? <MoverItem item={item} moverItem={moverItem} columnas={columnas}/> : <button className='btn btn-primary w-100 rounded-pill mb-2' onClick={()=>moverState()}> Mover</button> }

        </div>
    </>
  )
}

export default EditarItem