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
        <div>
            <form onSubmit={handleOnSubmit}>
                <input className='form-control' value={titulo} onChange={handleOnChange} type="text" />
                <button type='submit' className='btn btn-success'>Aceptar</button>
            </form>
        </div>
    </>
  )
}

export default FormEditarItem