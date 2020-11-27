import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { branding } = props;
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
      <div className="container">
        <a class="navbar-brand" href="/">
          {branding}
        </a>
        <div class="" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" />
                Add
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact/edit/:id" className="nav-link">
                <i className="fas fa-plus" />
                Edit
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "my app",
};
Header.propTypes = {
  branding: PropTypes.string.isRequired,
};
const headingStyle = {
  color: "green",
  fontSize: "10px",
};

export default Header;
