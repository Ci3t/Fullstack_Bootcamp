import React from "react";
import Button from "./Button";

function List({ setListItem, listItem, deleteItem, check }) {
  return (
    <ul>
      {listItem.map((item) => {
        return (
          <>
            
            <li  onClick={() => {
                check(item.id);
              }} key={item.id}> 
            <span
             
            >
              {item.isCompleted ? <>&#x2713; </>: <>&#10005; </>}
            </span>
                
                -{item.value}</li>
            <button
              onClick={() => {
                deleteItem(item.id);
              }}
            >
              X
            </button>
            {/* <input type="checkbox"/> */}
          </>
        );
      })}
    </ul>
  );
}

export default List;
