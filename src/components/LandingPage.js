// import React from 'react';
// //import seedlingImage from '../assets/seedling.jpg';

// function LandingPage() {
//   return (
//     <div className="landing-page">
//       <div className="jumbotron">
//         <h1>Welcome to Sagana Seedlings</h1>
//         <p>We grow and sell high-quality seedlings to help you achieve a successful harvest.</p>
//         <a href="/cart" className="btn btn-primary">Shop Now</a>
//       </div>
//       <div className="container">
//         <div className="row">
//           {/* <div className="col-md-6">
//             <img src={seedlingImage} alt="Seedlings" className="img-fluid" />
//           </div> */}
//           <div className="col-md-6">
//             <h2>About Us</h2>
//             <p>We are a family-owned business with over 20 years of experience in growing seedlings. Our goal is to provide our customers with the best quality seedlings to help them achieve a successful harvest.</p>
//             <p>We offer a wide variety of seedlings to choose from and we are committed to helping our customers achieve their goals.</p>
//             <a href="/about-us" className="btn btn-secondary">Learn More</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LandingPage;

import React from 'react';


function LandingPage() {
  return (
    <div className="landing-page">
      

      <section className="hero">
        <h1>Your One-Stop Shop for Quality Signs</h1>
        <p>A sign shop that sells road signs, banners, roll-up banners, lightboxes, 3D signs, 2D signs, CNC cuts, and laser cuts</p>
      </section>

      <section className="about">
        <h2>About Us</h2>
        <p>Welcome to Elim Signs, your premier destination for all your signage needs...</p>
        {/* Add more about content */}
      </section>

      <section className="best-sellers">
        <h2>Our Best Seller</h2>
        <div className="product">
          {/* Product information */}
        </div>
        {/* Repeat for other products */}
      </section>

      <section className="new-arrivals">
        <h2>New Arrivals</h2>
        <div className="product">
          {/* Product information */}
        </div>
        {/* Repeat for other products */}
      </section>

      <section className="testimonials">
        <h2>Our Customers speak for us</h2>
        <div className="testimonial">
          {/* Testimonial content */}
        </div>
        {/* Repeat for other testimonials */}
      </section>

      
    </div>
  );
}

export default LandingPage;

