import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us using the form below, or connect with us on social media.</p>
        <form className="contact-form">
  <div className="form-group">
    <label>Name:</label>
    <input type="text" placeholder="Your Name" />
  </div>
  <div className="form-group">
    <label>Email:</label>
    <input type="email" placeholder="Your Email" />
  </div>
  <div className="form-group">
    <label>Message:</label>
    <textarea placeholder="Your Message"></textarea>
  </div>
  <div className="button-container">
    <button type="submit">Send Message</button>
  </div>
</form>
<div className="social-media-icons-container">
        <h2>Find us on Social Media</h2>

          <div className="social-media-icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>

      <div className="contact-right">
        <h2>Our Location</h2>
        <p>123 Car Rental Street, City, Country</p>
        <p>Email: info@carrental.com</p>
        <p>Phone: +123 456 7890</p>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.348992213432!2d-122.3994101846828!3d37.79076197975923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809ab2a05167%3A0x70eae37018c67d3e!2sGoogle!5e0!3m2!1sen!2sus!4v1602060736742!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
