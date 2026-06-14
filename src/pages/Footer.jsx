import "../css/Footer.css";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Artist Info */}
        <div className="footer-left">

          <div className="footer-image">
            IMAGE
          </div>

          <h2>AMAN RAJ SRIVASTAVA</h2>

          <p>
            Rock Singer • Live Performer • Musician
          </p>

        </div>

        {/* Contact Info */}
        <div className="footer-center">

          <h3>CONTACT INFO</h3>

          <p>📞 +91 97184 27187</p>

          <p>✉️ aman.sargammusic@gmail.com</p>

          <p>📍 Delhi, India</p>

        </div>

        {/* Social Links */}
        <div className="footer-right">

          <h3>FOLLOW ME</h3>

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

      </div>

      <div className="footer-bottom">
        © 2025 Aman Raj Srivastava | All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer;