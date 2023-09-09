

import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Import FaShoppingCart icon

const Navbar = ({ loggedIn, logOut, cartItems }) => {
  return (
    <nav>
      <div>
        <img
          src="https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/368009851_613450754242703_2035892794540794207_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=2McAvRjlrH8AX_Ocqhw&_nc_ht=scontent.fnbo1-1.fna&oh=00_AfCKveOjUoD9CyuXP7utmbBwTWuI6eYIaLS8zwp9yNQcMg&oe=64F300C9"
          alt="Sign Logo"
        />
        <Link to="/">ELIM SIGNS</Link> {/* Link to the landing page */}
      </div>

    
      <div>
        <Link to="/">HOME</Link>
       </div> 
       <div>
        <Link to="/products">PRODUCTS & SERVICES</Link>
        {/* Add the "Products" tab with a link to "/products" */}
      </div>
      <div>
      <Link to="/about-us">About Us</Link> {/* Link to the About Us page */}
        <Link to="/contacts">Talk to Us</Link> {/* Link to the Contacts page */}
      </div>

      <div>
        <Link to="/cart">
          <FaShoppingCart /> {/* Cart Icon */}
        </Link>
      </div>

      {/* User-related links */}
    </nav>
  );
};

export default Navbar;


