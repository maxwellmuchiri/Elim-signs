

import React from 'react';

function Card({ product }) {
  // Check if 'product' is defined before destructuring its properties
  if (!product) {
    return null; // or return an error message or loading indicator
  }

  const { name, price, image } = product;

  // Add an "Add to Cart" functionality here
  const handleAddToCart = () => {
    // Implement your add to cart logic here
    console.log(`Added ${name} to the cart`);
  };

  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-details">
        <h3 className="card-title">{name}</h3>
        <p className="card-price">${price}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;


