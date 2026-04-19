import React from "react";

function CartItem({ name, price }) {
  return (
    <div style={{
      border:"1px solid black",
      padding:"10px",
      margin:"10px"
    }}>
      
      <h3>{name}</h3>
      <p>Price: ${price}</p>

      <button>+</button>
      <button>-</button>
      <button>Delete</button>

    </div>
  );
}

export default CartItem;
