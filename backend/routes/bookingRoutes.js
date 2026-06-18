// // // const express = require("express");

// // // const router = express.Router();

// // // router.get("/", (req, res) => {
// // //   res.json({
// // //     message: "All Bookings"
// // //   });
// // // });

// // // module.exports = router;

// // const express = require("express");
// // const router = express.Router();

// // let bookings = [];

// // // GET all bookings
// // router.get("/", (req, res) => {
// //   res.json(bookings);
// // });

// // // POST booking
// // router.post("/", (req, res) => {
// //   const booking = req.body;

// //   bookings.push(booking);

// //   res.status(201).json({
// //     message: "Booking Added Successfully",
// //     booking,
// //   });
// // });

// // module.exports = router;


// // const express = require("express");

// // const router = express.Router();

// // router.get("/", (req, res) => {
// //   res.json({
// //     message: "All Bookings"
// //   });
// // });

// // module.exports = router;

// const express = require("express");
// const router = express.Router();

// let bookings = [];

// // GET all bookings
// router.get("/", (req, res) => {
//   res.json(bookings);
// });

// // POST booking
// router.post("/", (req, res) => {
//   const booking = req.body;

//   bookings.push(booking);

//   res.status(201).json({
//     message: "Booking Added Successfully",
//     booking,
//   });
// });

// module.exports = router;


const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

let bookings = [];

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// GET all bookings
router.get("/", (req, res) => {
  res.json(bookings);
});

// POST booking
router.post("/", async (req, res) => {
  try {
    const booking = req.body;

    bookings.push(booking);

    console.log("Booking Received:", booking);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "🎤 New Singer Booking Request",
      html: `
        <h2>New Booking Received</h2>

        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Phone:</strong> ${booking.phone}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Event:</strong> ${booking.event}</p>
        <p><strong>Date:</strong> ${booking.date}</p>
        <p><strong>Budget:</strong> ${booking.budget}</p>
        <p><strong>Message:</strong> ${booking.message}</p>
      `,
    });

    console.log("✅ Email Sent Successfully");

    res.status(201).json({
      message: "Booking Added Successfully & Email Sent",
      booking,
    });

  } catch (error) {
    console.log("❌ EMAIL ERROR:", error);

    res.status(500).json({
      message: "Email Failed",
      error: error.message,
    });
  }
});

module.exports = router;