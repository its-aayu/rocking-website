import { useState } from "react";
import "../css/Contact.css";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    event: "",
    date: "",
    budget: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Booking Submitted Successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          event: "",
          date: "",
          budget: "",
          message: "",
        });
      } else {
        alert("❌ " + (data.message || "Something went wrong. Please try again."));
      }
    } catch (error) {
      alert("❌ Network error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
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
          <a href="https://wa.me/919718427187" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/aman_r_srivastava" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://youtube.com/@amanrsrivastava1943" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="contact-right">
        <h3>BOOK ME FOR YOUR EVENT</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <select
            name="event"
            value={formData.event}
            onChange={handleChange}
            required
          >
            <option value="">Event Type</option>
            <option>Concert</option>
            <option>Wedding</option>
            <option>Party</option>
            <option>Corporate Event</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
          >
            <option value="">Your Budget</option>
            <option>₹10K - ₹25K</option>
            <option>₹25K - ₹50K</option>
            <option>₹50K+</option>
          </select>

          <textarea
            rows="5"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "SENDING..." : "SEND MESSAGE"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
