import React, {useState} from "react";

const Item = ({item, moverItem, columnas, moverState}) => {

  const handleSelect = (e) => {
    const valor = e.target.value

    moverItem(Number(valor), item.id)
  }

  return (
    <>
      <div className="">
        <div className="form-group">
            <select onClick={handleSelect} className="form-control">
            <option value="opciones">Mover a</option>
              {columnas.map(columna =>
              <option key={columna.id} value={columna.id} onClick={()=>{moverState()}}>{columna.nombre}</option>
              )}
            </select>
        </div>
      </div>
    </>
  );
};

export default Item;