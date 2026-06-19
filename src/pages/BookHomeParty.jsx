// import { useState } from "react";

// function BookHomeParty() {

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     guests: "",
//     location: "",
//     date: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(formData);

//     alert("Home Party Booking Submitted");
//   };

//   return (
//     <section className="booking-page">

//       <h1>BOOK FOR HOME PARTY</h1>

//       <form onSubmit={handleSubmit}>

//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone"
//           onChange={handleChange}
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="guests"
//           placeholder="Number Of Guests"
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="location"
//           placeholder="Location"
//           onChange={handleChange}
//         />

//         <input
//           type="date"
//           name="date"
//           onChange={handleChange}
//         />

//         <button type="submit">
//           SUBMIT
//         </button>

//       </form>

//     </section>
//   );
// }

// export default BookHomeParty;

import { useState } from "react";
import "../css/Booking.css";

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://rocking-website-3.onrender.com/api/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      console.log(data);

      alert("Concert Booking Submitted Successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        audience: "",
        venue: "",
        date: "",
        budget: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
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

        <button type="submit" onClick={() => alert("Button Clicked")}>
          SUBMIT BOOKING
        </button>
      </form>
    </section>
  );
}

export default BookConcert;