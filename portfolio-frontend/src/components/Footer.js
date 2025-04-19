import React from 'react';
import './Footer.css';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'; // Changed import

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>PRATEEK BHARDWAJ</h3>
          <p>
          Full-stack developer passionate about AI, building seamless web apps with machine learning to enhance frontend design and backend scalability.
          </p>
        </div>

        <div className="footer-right">
          <h3>SOCIAL</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/prateek-bhardwaj-190891203/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://github.com/PrateekBhardwajj" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://x.com/prateek15851996?s=11" target="_blank" rel="noreferrer"><FaTwitter /></a> {/* Added Twitter */}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>©Copyright {year}. Made by <a className="name-link" href="#">Prateek Bhardwaj</a></p>
      </div>
    </footer>
  );
};

export default Footer;
