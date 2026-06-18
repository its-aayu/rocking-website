import { useState } from "react";

function BookHomeParty() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    location: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Home Party Booking Submitted");
  };

  return (
    <section className="booking-page">

      <h1>BOOK FOR HOME PARTY</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="text"
          name="guests"
          placeholder="Number Of Guests"
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          onChange={handleChange}
        />

        <button type="submit">
          SUBMIT
        </button>

      </form>

    </section>
  );
}

export default BookHomeParty;