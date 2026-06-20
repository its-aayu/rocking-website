import { useState } from "react";
import "../css/Booking.css";

const API_URL = import.meta.env.VITE_API_URL;

function BookConcert() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    audience: "",
    venue: "",
    date: "",
    budget: "",
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
        body: JSON.stringify({ ...formData, event: "Concert" }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Concert Booking Submitted Successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          audience: "",
          venue: "",
          date: "",
          budget: "",
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
      <h1>BOOK FOR CONCERT</h1>

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
          name="audience"
          placeholder="Audience Size"
          value={formData.audience}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="venue"
          placeholder="Venue"
          value={formData.venue}
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

        <input
          type="text"
          name="budget"
          placeholder="Budget"
          value={formData.budget}
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

export default BookConcert;
