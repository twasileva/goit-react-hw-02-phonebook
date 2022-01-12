import React from "react";

export const Filter = ({value, onChange}) => {
 
  return (
       <label>Find contacts by name<br />
          <input type="text" value={value} onChange={onChange}></input>
      </label>
     )

}