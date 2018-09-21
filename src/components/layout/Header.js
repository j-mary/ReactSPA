import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  const { branding } = props;
  return (
    <div className="nav navbar navbar-expand-sm navbar-dark fixed-top bg-danger mb-3 py-1">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {branding}
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/posts" className="nav-link">
                <i className="fas fa-newspaper" /> Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/albums" className="nav-link">
                <i className="fas fa-images" /> Albums
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/users" className="nav-link">
                <i className="fas fa-users" /> Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  branding: 'React SPA'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
