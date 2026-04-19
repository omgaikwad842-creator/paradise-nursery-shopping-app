import React, { useState } from "react";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      
      <h1>🌿 Paradise Nursery</h1>

      <AboutUs />

      <ProductList addToCart={addToCart} />

      <h2>Shopping Cart</h2>

      {cart.map((item, index) => (
        <CartItem key={index} name={item.name} price={item.price}/>
      ))}

    </div>
  );
}

export default App;
