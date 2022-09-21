import React from 'react'

const MenuColumna = () => {
  return (
    <>
          <div className="btn-group">
              <button type="button" className="btn border-0 m-2 rounded-5 text-white dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu bg-dark">
                  <li><a className="dropdown-item text-white" href="#">Editar</a></li>
                  <li><a className="dropdown-item text-white" href="#">Mover</a></li>
                  <li><a className="dropdown-item text-white" href="#">Eliminar</a></li>
              </ul>
          </div>
    </>
  )
}

export default MenuColumna