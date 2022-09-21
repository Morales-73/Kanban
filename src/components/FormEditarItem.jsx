import React, {useState} from 'react'

const FormEditarItem = ({editState, editarItem, itemId}) => {

    const [titulo, setTitulo] = useState('')


    const handleOnSubmit = (e)=>{
        e.preventDefault()

        editarItem(itemId,titulo)

        editState()

    }

    const handleOnChange = (e)=>{
        const valor = e.target.value
        setTitulo(valor)
    }

    console.log(titulo,itemId)

  return (
    <>
        <div>
            <form onSubmit={handleOnSubmit}>
                <input className='form-control' value={titulo} onChange={handleOnChange} type="text" />
                <button type='submit' className='btn btn-success'>Aceptar</button>
                <h1>{itemId}</h1>
            </form>
        </div>
    </>
  )
}

export default FormEditarItem