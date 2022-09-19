import React from 'react'
import { useState } from 'react'

const Formulario = ({editState, agregarItem}) => {

    const [titulo, setTitulo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        agregarItem(titulo)
        setTitulo('')

        editState()
    }

    const handleChange = (e) => {
        const value = e.target.value
        setTitulo(value)
    }

  return (
    <>
        <div>
            <form onSubmit={handleSubmit}>
                <div className='d-flex align-items-center mt-3 border-top pt-3'>
                    <label className='me-2' htmlFor="Titulo">Titulo</label>
                    <input className='form-control' id="Titulo" value={titulo} onChange={handleChange} type="text" />
                </div>
                <button className='btn btn-success w-100 mt-3' type='submit'>Agregar</button>
            </form>
        </div>
    </>
  )
}

export default Formulario