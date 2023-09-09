// import React from 'react';
// import Card from './Card'; // Import the Card component to display products
// // You can create a CSS file for styling

// const ProductPage = ({ products }) => {
//   return (
//     <div className="product-page">
//       <h1>Products</h1>
//       <div className="product-list">
//         {products.map((product, index) => (
//           <Card key={index} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;



import React from 'react';
import Card from './Card';

const ProductPage = ({ products }) => {
  // Sample product data (replace with your actual product data)
  const sampleProducts = [
    {
      name: 'Product 1',
      price: 19.99,
      image: 'URL_TO_IMAGE_1',
    },
    {
      name: 'Product 2',
      price: 24.99,
      image: 'URL_TO_IMAGE_2',
    },
    {
      name: 'Product 3',
      price: 29.99,
      image: 'URL_TO_IMAGE_3',
    },
    {
      name: 'Product 4',
      price: 14.99,
      image: 'URL_TO_IMAGE_4',
    },
    {
      name: 'Product 5',
      price: 39.99,
      image: 'URL_TO_IMAGE_5',
    },
  ];

  return (
    <div className="product-page">
      <h1>Products</h1>
      <div className="product-list">
        {sampleProducts.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

