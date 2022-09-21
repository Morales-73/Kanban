import React, {useState} from 'react'
import FormEditarItem from './FormEditarItem'

const EditarItem = ({editarItem}) => {

    const [isEdit, setIsEdit] = useState(false)

    const editState = () => {
        setIsEdit(!isEdit)
    }

  return (
    <>
        <div>
            {isEdit ? 
            <FormEditarItem editState={editState} editarItem={editarItem}/> : 
            <button className='btn btn-success w-100 rounded-pill mb-2' onClick={()=>editState()}>Editar</button>}
        </div>
    </>
  )
}

export default EditarItem