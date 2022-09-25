import React from "react";

const Item = ({item, moverItem, columnas, moverState}) => {

  const handleIputOption = (e) => {
    const valor = e.target.value

    moverItem(Number(valor), item.id)

    moverState()
  }

  return (
    <>
      <div>
        <div className="form-group">
          <label htmlFor="sel1">Select list:</label>
          <select onClick={handleIputOption} className="form-control" id="sel1">
            {columnas.map((item) => 
            <option key={item.id}>{item.id}</option>
            )}
          </select>
        </div>
      </div>
    </>
  );
};



export default Item;
