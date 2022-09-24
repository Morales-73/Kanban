import React from "react";

ultimo

const Item = ({item, MoverItem, columna}) => {
  return (
    <>
      <div>
        <div class="form-group">
          <label for="sel1">Select list:</label>
          <select class="form-control" id="sel1">
            {columna.map((item) => 
            <option>{columna.id}</option>
            )}
          </select>
        </div>
      </div>
    </>
  );
};



export default Item;
