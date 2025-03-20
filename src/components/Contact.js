import React from "react";
import "../css/Contact.css";
import ScrollNavigator from "./ScrollNavigator";

const Contact = () => {
  return (
    <div className="contact-background">
      {/* <ScrollNavigator upPath="/resume" downPath="/contact" /> */}
      <div className="contact-container">
        <h1 className="contact-me-heading">Contact Me</h1>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Social Media Links */}
        <div className="social-links">
          <a href="https://github.com/AKHAASH" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/akhaash" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        
        {/* Email & Phone */}
        <p>Email: akhaash.ai22@krct.ac.in</p>
        <p>Phone: +91 7604964789</p>
      </div>
    </div>
  );
};

export default Contact;
