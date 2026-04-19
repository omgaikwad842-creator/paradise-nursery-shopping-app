import React from "react";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10 },
  { id: 2, name: "Tulsi", price: 8 },
  { id: 3, name: "Mint", price: 6 },
  { id: 4, name: "Lavender", price: 12 }
];

function ProductList({ addToCart }) {
  return (
    <div>

      <h2>Plant Collection</h2>

      {plants.map((plant) => (
        <div
          key={plant.id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            margin: "10px",
            width: "200px",
            display: "inline-block"
          }}
        >
          <h3>{plant.name}</h3>
          <p>Price: ${plant.price}</p>

          <button onClick={() => addToCart(plant)}>
            Add to Cart
          </button>

        </div>
      ))}

    </div>
  );
}

export default ProductList;
