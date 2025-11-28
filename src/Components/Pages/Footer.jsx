import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-socials">
          <a href="#" aria-label="GitHub">GitHub</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="Twitter">Twitter</a>
        </div>

        <div className="footer-line"></div>

        <p className="footer-text">
          © 2025 All rights reserved | Built with ❤️ using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
