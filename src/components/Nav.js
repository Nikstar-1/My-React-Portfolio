import React from "react";
import "../App.css";
import { Link } from "react-router-dom";


function Nav() {
  const navStyle = {
    color: "white",
    
  };

  return (
    <nav className="container-fluid pt-4 bg-light" style={{display: "flex"}} >
      
      <ul style={{display: "flex"}}>
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
