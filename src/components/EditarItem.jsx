import React, {useState} from 'react'
import FormEditarItem from './FormEditarItem'

const EditarItem = ({item, editarItem, moverItem}) => {

    const [isEdit, setIsEdit] = useState(false)

    const editState = () => {
        setIsEdit(!isEdit)
    }

  return (
    <>
        <div>
            {isEdit ? 
            <FormEditarItem editState={editState} editarItem={editarItem} item={item}/> : 
            <button className='btn btn-success w-100 rounded-pill mb-2' onClick={()=>editState()}>Editar</button>}
            <button className="btn btn-danger" onClick={()=>moverItem(item.columna)}> Mover </button>
        </div>
    </>
  )
}

export default EditarItem