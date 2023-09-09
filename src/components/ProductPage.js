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
      image: 'https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/369808310_621075770146868_2002638175875292684_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=49d041&_nc_ohc=MRBTxNxXa1QAX_tZKJ1&_nc_ht=scontent.fnbo1-1.fna&oh=00_AfBJqBggOe1B9rDDTHJYCup0EwK4D5FOoxTqijqts_VLyg&oe=6501DBD2',
    },
    {
      name: 'Product 2',
      price: 24.99,
      image: 'https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/376557903_624687363119042_499420217234291001_n.jpg?stp=dst-jpg_s600x600&_nc_cat=108&ccb=1-7&_nc_sid=49d041&_nc_ohc=jcYqe3fBVnMAX8KOAfr&_nc_ht=scontent.fnbo1-1.fna&oh=00_AfCKC91I1BT6g0Mps9Cf2JNb0LyX2gqkHeXCXKNc8gMRsA&oe=65015041',
    },
    {
      name: 'Product 3',
      price: 29.99,
      image: 'https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/376629047_624688093118969_5428831927067817393_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=49d041&_nc_ohc=FZHj9cTdpkMAX_fRilz&_nc_ht=scontent.fnbo1-1.fna&oh=00_AfBrZ1Dv3cAsHkV-jKc9enFv66EpBW5zRkDxCN1d9OlD6A&oe=65027A1B',
    },
    {
      name: 'Product 4',
      price: 14.99,
      image: 'https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/376537198_624688049785640_1276239699203536657_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=49d041&_nc_ohc=tKNOig1KcjcAX_l_Tng&_nc_ht=scontent.fnbo1-1.fna&oh=00_AfBh1yCk0iMS-TkTLMwuL9bV3JqjgoV2i4sNwDCCxgH3XA&oe=6500D670',
    },
    {
      name: 'Product 5',
      price: 39.99,
      image: 'https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/376581125_624687956452316_159646435912976525_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_ohc=MSFItV_leiEAX_zACHB&_nc_ht=scontent.fnbo1-1.fna&oh=00_AfDL-ivDeqwk0AM10GmGdWceFQkIsty3EB-D3eGM8Bx9jQ&oe=65027629',
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

