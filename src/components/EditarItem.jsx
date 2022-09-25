import React, {useState} from 'react'
import FormEditarItem from './FormEditarItem' 
import MoverItem from './MoverItem'

const EditarItem = ({item, editarItem, moverItem, columna, columnas}) => {

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
            
            <MoverItem item={item} moverState={moverState} moverItem={moverItem} columnas={columnas}/>

        </div>
    </>
  )
}

export default EditarItem