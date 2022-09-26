import React, {useState} from 'react'

const FormEditarItem = ({editState, editarItem, item}) => {

    const [titulo, setTitulo] = useState('')


    const handleOnSubmit = (e)=>{
        e.preventDefault()

        editarItem(item.id,titulo)

        editState()

    }

    const handleOnChange = (e)=>{
        const valor = e.target.value
        setTitulo(valor)
    }

    // console.log(titulo,item.id)

  return (
    <>
        <div className='m-1'>
            <form onSubmit={handleOnSubmit}>
                <div className='d-flex flex-column justify-content-center'>
                    <input className='form-control mb-2' value={titulo} onChange={handleOnChange} placeholder="Nuevo titulo" type="text" />
                    <button type='submit' className='btn btn-success m-1'>Aceptar</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default FormEditarItem