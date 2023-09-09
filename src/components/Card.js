// import React from "react";

// const Card = ({ sign, addToCart }) => {
//   const { name, price, image } = sign;

//   return (
//     <div className="card">
//       <img src={image} alt={name} />
//       <h2>{name}</h2>
//       <p>${price}</p>
//       <button onClick={() => addToCart(sign)}>Add to Cart</button>
//     </div>
//   );
// };

// export default Card;




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





// import React from 'react';

// function Card({ product }) {
//   const { name, price, image } = product;

//   // You can add an "Add to Cart" functionality here
//   const handleAddToCart = () => {
//     // Implement your add to cart logic here
//     console.log(`Added ${name} to the cart`);
//   };

//   return (
//     <div className="card">
//       <img src= "https://scontent.fmba3-1.fna.fbcdn.net/v/t39.30808-6/369808310_621075770146868_2002638175875292684_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=49d041&_nc_ohc=soVzz1iD3ScAX8R7-m1&_nc_ht=scontent.fmba3-1.fna&oh=00_AfC-O19uJIVXZKT6rIS-d7V7luvsc0WDBqehjehD1AfIhQ&oe=64F7F892" alt={name} className="card-image" />
//       <div className="card-details">
//         <h3 className="card-title">{name}</h3>
//         <p className="card-price">${price}</p>
//         <button className="add-to-cart-button" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Card;
