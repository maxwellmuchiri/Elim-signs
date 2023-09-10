
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa"; // Import FaShoppingCart icon

// const Navbar = ({ loggedIn, logOut, cartItems }) => {
//   // State to manage the visibility of the dropdown
//   const [isDropdownVisible, setDropdownVisible] = useState(false);

//   // Function to toggle the dropdown's visibility
//   const toggleDropdown = () => {
//     setDropdownVisible(!isDropdownVisible);
//   };

//   // Function to hide the dropdown when a link is clicked
//   const hideDropdown = () => {
//     setDropdownVisible(false);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img
//           src="https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/368009851_613450754242703_2035892794540794207_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=2McAvRjlrH8AX_Ocqhw&_nc_ht=scontent.fnbo1-1.fna&oh=00_AfCKveOjUoD9CyuXP7utmbBwTWuI6eYIaLS8zwp9yNQcMg&oe=64F300C9"
//           alt="Sign Logo"
//         />
//         <Link to="/">ELIM SIGNS</Link> {/* Link to the landing page */}
//       </div>

//       <div className="menu">
//         <div className="menu-item">
//           <Link to="/">HOME</Link>
//         </div>
//         <div className="menu-item">
//           <span
//             onClick={toggleDropdown}
//             onMouseEnter={toggleDropdown}
//             onMouseLeave={toggleDropdown}
//           >
//             PRODUCTS & SERVICES
//             {/* Dropdown content */}
//             {isDropdownVisible && (
//               <div className="dropdown-content" onMouseLeave={hideDropdown}>
//                 <Link to="/products">All Products</Link>
//                 <Link to="/products/3d-signs">3D Signs</Link>
//                 <Link to="/products/2d-signs">2D Signs</Link>
//                 <Link to="/products/road-signs">Road Signs</Link>
//                 <Link to="/products/cnc-cuts">CNC Cuts</Link>
//                 <Link to="/products/laser-cuts">Laser Cuts</Link>
//                 <Link to="/products/branding">Branding</Link>
//                 <Link to="/products/signages">Signages</Link>
//                 <Link to="/products/paylons">Paylons</Link>
//                 <Link to="/products/engravings">Engravings</Link>
//               </div>
//             )}
//           </span>
//         </div>
//         <div className="menu-item">
//           <Link to="/about-us">About Us</Link> {/* Link to the About Us page */}
//         </div>
//         <div className="menu-item">
//           <Link to="/contacts">Talk to Us</Link> {/* Link to the Contacts page */}
//         </div>
//         <div className="menu-item">
//           <Link to="/cart">
//             <FaShoppingCart /> {/* Cart Icon */}
//           </Link>
//         </div>
//       </div>

//       {/* User-related links */}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Import FaShoppingCart icon

const Navbar = ({ loggedIn, logOut, cartItems }) => {
  // State to manage the visibility of the dropdown
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Function to toggle the dropdown's visibility
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  // Function to hide the dropdown when a link is clicked
  const hideDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/368009851_613450754242703_2035892794540794207_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=2McAvRjlrH8AX_Ocqhw&_nc_ht=scontent.fnbo1-1.fna&oh=00_AfCKveOjUoD9CyuXP7utmbBwTWuI6eYIaLS8zwp9yNQcMg&oe=64F300C9"
          alt="Sign Logo"
        />
        <Link to="/">ELIM SIGNS</Link> {/* Link to the landing page */}
      </div>

      <div className="menu">
        <div className="menu-item">
          <Link to="/">HOME</Link>
        </div>
        <div className="menu-item">
          <span
            onClick={toggleDropdown}
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            PRODUCTS & SERVICES
            {/* Dropdown content */}
            {isDropdownVisible && (
              <div className="dropdown-content" onMouseLeave={hideDropdown}>
                <Link to="/products">All Products</Link>
                <Link to="/products/3d-signs">3D Signs</Link>
                <Link to="/products/2d-signs">2D Signs</Link>
                <Link to="/products/road-signs">Road Signs</Link>
                <Link to="/products/cnc-cuts">CNC Cuts</Link>
                <Link to="/products/laser-cuts">Laser Cuts</Link>
                <Link to="/products/branding">Branding</Link>
                <Link to="/products/signages">Signages</Link>
                <Link to="/products/paylons">Paylons</Link>
                <Link to="/products/engravings">Engravings</Link>
              </div>
            )}
          </span>
        </div>
        <div className="menu-item">
          <Link to="/about-us">About Us</Link> {/* Link to the About Us page */}
        </div>
        <div className="menu-item">
          <Link to="/contacts">Talk to Us</Link> {/* Link to the Contacts page */}
        </div>
        <div className="menu-item">
          <Link to="/our-works">Our Works</Link> {/* Link to Our Works page */}
        </div>
        <div className="menu-item">
          <Link to="/cart">
            <FaShoppingCart /> {/* Cart Icon */}
          </Link>
        </div>
      </div>

      {/* User-related links */}
    </nav>
  );
};

export default Navbar;
