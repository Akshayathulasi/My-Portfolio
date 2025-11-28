import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


function Contact() {
  return (
    <div className="contact-page">
      {/* Floating shapes */}
      <div className="floating-shapes">
        <div className="shape circle"></div>
        <div className="shape square"></div>
        <div className="shape triangle"></div>
      </div>

      {/* Header */}
      <header className="contact-header">
        <h1>
          Get In <span>Touch</span>
        </h1>
        <p>
          Have a project idea, collaboration request, or just want to say hi?  
          I’d love to hear from you!
        </p>
      </header>

      {/* Contact Form */}
      <section className="contact-form-section">
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent successfully! ✨");
          }}
        >
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" required></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </section>

<footer className="contact-footer">
  <p>© 2025 MyPortfolio | Connect with me</p>
  <div className="footer-social">
    <a href="https://github.com/" target="_blank" rel="noreferrer">
      <FaGithub />
    </a>
    <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
      <FaLinkedin />
    </a>
    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
      <FaTwitter />
    </a>
  </div>
</footer>


    </div>
  );
}

export default Contact;