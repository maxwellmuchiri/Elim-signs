import React from 'react';
import { FaFacebookSquare, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-icons">
              <a href="https://www.facebook.com/eliud.muhoro.16?mibextid=ZbWKwL" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
              <a href="https://wa.me/254725146025?text=I%27m%20interested%20in%20buying%20signs%20from%20your%20Elim signs" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
              <a href="mailto:eliudmaingi17@gmail.com"><FaEnvelope /></a>
              <a href="tel:+254725146025"><FaPhone /></a>
            </div>
            <p>&copy; 2023 Elim Signs. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
