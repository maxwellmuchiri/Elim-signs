
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

