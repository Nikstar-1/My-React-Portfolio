import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
    
  };

  return (
    <nav className="ml-auto">
      <h3>Rekha Kumari Logo</h3>
      <ul>
        <Link style={navStyle} to="/About">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/Contact">
          <li>Contact</li>
        </Link>
        <Link style={navStyle} to="/Portfolio">
          <li>Portfolio</li>
        </Link>
        <Link style={navStyle} to="/SocialFollow">
        <li>Social Media</li>
        </Link>
      </ul>
    </nav>
  );
}




export default Nav;
