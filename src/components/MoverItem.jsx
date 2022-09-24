import React from "react";



const Item = ({item, MoverItem, columna, columnas}) => {
  return (
    <>
      <div>
        <div class="form-group">
          <label for="sel1">Select list:</label>
          <select class="form-control" id="sel1">
            {columnas.map((item) => 
            <option>{item.id}</option>
            )}
          </select>
        </div>
      </div>
    </>
  );
};



export default Item;
