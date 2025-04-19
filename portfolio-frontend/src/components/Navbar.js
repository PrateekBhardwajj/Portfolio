import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <button
          className="logo-button"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo('home');
          }}
        >
          <img src="/images/alphabet.png" alt="Prateek Bhardwaj Logo" className="logo" />
          <span className="logo-text">PRATEEK BHARDWAJ</span>
        </button>
      </div>
      <ul className="nav-links">
        <li>
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo('home');
            }}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/#about"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo('about');
            }}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            to="/#projects"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo('projects');
            }}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            to="/#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo('contact');
            }}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
