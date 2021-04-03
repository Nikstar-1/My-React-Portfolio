import React from "react";

import { Link } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          {/* <a className="navbar-brand" href="#">
            Navbar
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <Link to="/">
                  <span className="nav-link">Home </span>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/Portfolio">
                  <span className="nav-link">Portfolio</span>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/Contact">
                  <span className="nav-link">Contact </span>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/SocialFollow">
                  <span className="nav-link">SocialFollow </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Nav;
