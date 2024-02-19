// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './index.css';
function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <p className='follow'>Follow us on</p>
        <div className='media-icons'>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" className='media'/>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" className='media'/>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" className='media' />
        </a>
      </div>
      <p className='follow'>&copy; 2024 Your Company</p>
      </div>
     
    </footer>
  );
}

export default Footer;
