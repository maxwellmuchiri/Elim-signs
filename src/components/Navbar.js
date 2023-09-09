
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa"; // Added FaSearch icon

const Navbar = ({ loggedIn, logOut, cartItems }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]); // State to hold search results

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Perform search logic using 'searchTerm'
    // For now, let's just set the searchResults to an example array
    setSearchResults(["Result 1", "Result 2", "Result 3"]);
  };

  return (
    <nav>
      <div>
        <img
          src="https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/368009851_613450754242703_2035892794540794207_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=2McAvRjlrH8AX_Ocqhw&_nc_ht=scontent.fnbo1-1.fna&oh=00_AfCKveOjUoD9CyuXP7utmbBwTWuI6eYIaLS8zwp9yNQcMg&oe=64F300C9"
          alt="Sign Logo"
        />
        <Link to="/">ELIM SIGNS</Link>
      </div>

 <div>
    {/* ... (existing code) */}
    <Link to="/products">Products</Link>
    {/* Add the "Products" tab with a link to "/products" */}
  </div>

      <div>
        <select>
          <option>Road Signs</option>
          <option>3D&2D Signs</option>
          <option>CNC Cuts</option>
          <option>Laser Cuts</option>
          <option>Signages</option>
          <option>Paylons</option>
        </select>

        {/* Search bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="search-icon" onClick={handleSearchSubmit}>
            <FaSearch />
          </button>
        </div>

        {/* Display search results */}
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>

        {loggedIn ? (
          <>
            {/* User-related links */}
          </>
        ) : (
          <>
            {/* User-related links */}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


