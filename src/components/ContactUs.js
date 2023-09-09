import React from 'react';

function ContactsUs() {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>
          <strong>Address:</strong> Gohil Building, Kirinyaga Road, Nairobi, Kenya
        </p>
        <p>
          <strong>Email:</strong> info@elimsigns.com
        </p>
        <p>
          <strong>Phone:</strong> +254 123 456 789
        </p>
      </div>
      <div className="google-map">
        {/* You can embed a Google Maps iframe here */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.7256501321117!2d36.8287108160146!3d-1.2848909997990542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15d798d70b0d%3A0x8d42f98d98b0c244!2sGohill%20Building%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1630255019532!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactsUs;
