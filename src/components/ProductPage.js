import React from 'react';
import Card from './Card';

const ProductPage = ({ products }) => {
  // Get unique product categories
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="product-page">
      <h1>Products</h1>
      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="product-list">
            {products
              .filter((product) => product.category === category)
              .map((product, index) => (
                <Card key={index} product={product} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
