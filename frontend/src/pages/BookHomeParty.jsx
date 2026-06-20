import { useState } from "react";
import "../css/Booking.css";

const API_URL = import.meta.env.VITE_API_URL;

function BookHomeParty() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    location: "",
    date: "",
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
        body: JSON.stringify({ ...formData, event: "Home Party" }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Home Party Booking Submitted Successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          guests: "",
          location: "",
          date: "",
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
    <section className="booking-page">
      <h1>BOOK FOR HOME PARTY</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="guests"
          placeholder="Number Of Guests"
          value={formData.guests}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "SUBMITTING..." : "SUBMIT BOOKING"}
        </button>
      </form>
    </section>
  );
}

export default BookHomeParty;
