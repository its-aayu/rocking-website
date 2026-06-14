import "../css/Contact.css";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section" id="contact">

      {/* Left Side */}
      <div className="contact-left">

        <h2>GET IN TOUCH</h2>
        <p>Let's create something amazing together.</p>

        <div className="contact-info">
          <h4>📞 Phone / WhatsApp</h4>
          <span>+91 97184 27187</span>
        </div>

        <div className="contact-info">
          <h4>✉️ Email</h4>
          <span>aman.sargammusic@gmail.com</span>
        </div>

        <div className="contact-info">
          <h4>📍 Location</h4>
          <span>Delhi, India</span>
        </div>

        <div className="social-icons">

          <a
            href="https://wa.me/919718427187"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.instagram.com/aman_r_srivastava?igsh=cmtxeDlleHJsbTFn"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://youtube.com/@amanrsrivastava1943?si=xoD0yAuUI2UmOlRQ"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube />
          </a>

        </div>

      </div>

      {/* Right Side Form */}
      <div className="contact-right">

        <h3>BOOK ME FOR YOUR EVENT</h3>

        <form>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="text"
            placeholder="Phone Number"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <select>
            <option>Event Type</option>
            <option>Concert</option>
            <option>Wedding</option>
            <option>Party</option>
            <option>Corporate Event</option>
          </select>

          <input type="date" />

          <select>
            <option>Your Budget</option>
            <option>₹10K - ₹25K</option>
            <option>₹25K - ₹50K</option>
            <option>₹50K+</option>
          </select>

          <textarea
            rows="5"
            placeholder="Message"
          ></textarea>

          <button type="submit">
            SEND MESSAGE
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;