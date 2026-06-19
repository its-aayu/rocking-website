// // // // const express = require("express");

// // // // const router = express.Router();

// // // // router.get("/", (req, res) => {
// // // //   res.json({
// // // //     message: "All Bookings"
// // // //   });
// // // // });

// // // // module.exports = router;

// // // const express = require("express");
// // // const router = express.Router();

// // // let bookings = [];

// // // // GET all bookings
// // // router.get("/", (req, res) => {
// // //   res.json(bookings);
// // // });

// // // // POST booking
// // // router.post("/", (req, res) => {
// // //   const booking = req.body;

// // //   bookings.push(booking);

// // //   res.status(201).json({
// // //     message: "Booking Added Successfully",
// // //     booking,
// // //   });
// // // });

// // // module.exports = router;


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
// // const nodemailer = require("nodemailer");

// // const router = express.Router();

// // let bookings = [];

// // const transporter = nodemailer.createTransport({
// //   service: "gmail",
// //   auth: {
// //     user: process.env.EMAIL_USER,
// //     pass: process.env.EMAIL_PASS,
// //   },
// // });

// // // GET all bookings
// // router.get("/", (req, res) => {
// //   res.json(bookings);
// // });

// // // POST booking
// // router.post("/", async (req, res) => {
// //   try {
// //     const booking = req.body;

// //     bookings.push(booking);

// //     console.log("Booking Received:", booking);

// //     await transporter.sendMail({
// //       from: process.env.EMAIL_USER,
// //       to: process.env.EMAIL_USER,
// //       subject: "🎤 New Singer Booking Request",
// //       html: `
// //         <h2>New Booking Received</h2>

// //         <p><strong>Name:</strong> ${booking.name}</p>
// //         <p><strong>Phone:</strong> ${booking.phone}</p>
// //         <p><strong>Email:</strong> ${booking.email}</p>
// //         <p><strong>Event:</strong> ${booking.event}</p>
// //         <p><strong>Date:</strong> ${booking.date}</p>
// //         <p><strong>Budget:</strong> ${booking.budget}</p>
// //         <p><strong>Message:</strong> ${booking.message}</p>
// //       `,
// //     });

// //     console.log("✅ Email Sent Successfully");

// //     res.status(201).json({
// //       message: "Booking Added Successfully & Email Sent",
// //       booking,
// //     });

// //   } catch (error) {
// //     console.log("❌ EMAIL ERROR:", error);

// //     res.status(500).json({
// //       message: "Email Failed",
// //       error: error.message,
// //     });
// //   }
// // });

// // module.exports = router;


// // const express = require("express");
// // const nodemailer = require("nodemailer");

// // const router = express.Router();

// // let bookings = [];

// // // Gmail Transporter
// // const transporter = nodemailer.createTransport({
// //   host: "smtp.gmail.com",
// //   port: 587,
// //   secure: false,
// //   auth: {
// //     user: process.env.EMAIL_USER,
// //     pass: process.env.EMAIL_PASS,
// //   },
// // });

// // // Verify Email Connection
// // transporter.verify((error, success) => {
// //   if (error) {
// //     console.log("❌ Email Configuration Error:", error);
// //   } else {
// //     console.log("✅ Email Server Ready");
// //   }
// // });

// // // Test Email Route
// // router.get("/test-email", async (req, res) => {
// //   try {
// //     await transporter.sendMail({
// //       from: process.env.EMAIL_USER,
// //       to: process.env.EMAIL_USER,
// //       subject: "Test Email",
// //       text: "Email is working successfully!",
// //     });

// //     res.send("✅ Test Email Sent Successfully");
// //   } catch (error) {
// //     console.log("❌ TEST EMAIL ERROR:", error);

// //     res.status(500).json({
// //       message: "Test Email Failed",
// //       error: error.message,
// //     });
// //   }
// // });

// // // Get All Bookings
// // router.get("/", (req, res) => {
// //   res.json(bookings);
// // });

// // // Add New Booking
// // router.post("/", async (req, res) => {
// //   try {
// //     const booking = req.body;

// //     bookings.push(booking);

// //     console.log("📩 Booking Received:");
// //     console.log(booking);

// //     await transporter.sendMail({
// //       from: process.env.EMAIL_USER,
// //       to: process.env.EMAIL_USER,
// //       subject: "🎤 New Singer Booking Request",
// //       html: `
// //         <h2>New Booking Received</h2>

// //         <p><strong>Name:</strong> ${booking.name || "-"}</p>
// //         <p><strong>Phone:</strong> ${booking.phone || "-"}</p>
// //         <p><strong>Email:</strong> ${booking.email || "-"}</p>
// //         <p><strong>Event:</strong> ${booking.event || "-"}</p>
// //         <p><strong>Date:</strong> ${booking.date || "-"}</p>
// //         <p><strong>Budget:</strong> ${booking.budget || "-"}</p>
// //         <p><strong>Message:</strong> ${booking.message || "-"}</p>
// //       `,
// //     });

// //     console.log("✅ Email Sent Successfully");

// //     res.status(201).json({
// //       success: true,
// //       message: "Booking Added Successfully & Email Sent",
// //       booking,
// //     });
// //   } catch (error) {
// //     console.log("❌ EMAIL ERROR:", error);

// //     res.status(500).json({
// //       success: false,
// //       message: "Email Failed",
// //       error: error.message,
// //     });
// //   }
// // });

// // module.exports = router;



// const express = require("express");
// const nodemailer = require("nodemailer");

// const router = express.Router();

// let bookings = [];

// // Gmail Transporter
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // Verify Email Connection
// transporter.verify((error) => {
//   if (error) {
//     console.log("❌ Email Configuration Error:", error);
//   } else {
//     console.log("✅ Email Server Ready");
//   }
// });

// // TEST EMAIL ROUTE
// router.get("/test-email", async (req, res) => {
//   try {
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER,
//       subject: "Test Email",
//       text: "Email is working successfully!",
//     });

//     console.log("✅ Test Email Sent");

//     res.send("✅ Test Email Sent Successfully");
//   } catch (error) {
//     console.log("❌ TEST EMAIL ERROR:", error);

//     res.status(500).json({
//       message: "Test Email Failed",
//       error: error.message,
//     });
//   }
// });

// // GET ALL BOOKINGS
// router.get("/", (req, res) => {
//   res.json(bookings);
// });

// // CREATE BOOKING
// router.post("/", async (req, res) => {
//   try {
//     const booking = req.body;

//     console.log("================================");
//     console.log("📩 NEW BOOKING RECEIVED");
//     console.log(JSON.stringify(booking, null, 2));
//     console.log("================================");

//     // bookings.push(booking);

//     // EMAIL TO ADMIN
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER,
//       subject: "🎤 New Singer Booking Request",
//       text: `
// NEW BOOKING RECEIVED

// Name: ${booking.name || "-"}

// Phone: ${booking.phone || "-"}

// Email: ${booking.email || "-"}

// Event: ${booking.event || "-"}

// Date: ${booking.date || "-"}

// Budget: ${booking.budget || "-"}

// Message: ${booking.message || "-"}
//       `,
//     });

//     // CONFIRMATION EMAIL TO CUSTOMER
//     if (booking.email) {
//       await transporter.sendMail({
//         from: process.env.EMAIL_USER,
//         to: booking.email,
//         subject: "Booking Request Received",
//         text: `
// Hello ${booking.name},

// Thank you for your booking request.

// Event: ${booking.event}
// Date: ${booking.date}
// Budget: ${booking.budget}

// We will contact you shortly.

// Regards,
// Aman Raj Srivastava Team
//         `,
//       });
//     }

//     console.log("✅ Email Sent Successfully");

//     res.status(201).json({
//       success: true,
//       message: "Booking Added Successfully & Email Sent",
//       booking,
//     });

//   } catch (error) {
//     console.log("❌ EMAIL ERROR:", error);

//     res.status(500).json({
//       success: false,
//       message: "Email Failed",
//       error: error.message,
//     });
//   }
// });

// module.exports = router;

// const express = require("express");
// const nodemailer = require("nodemailer");

// const router = express.Router();

// // Temporary in-memory storage for bookings
// let bookings = [];

// // Gmail Transporter Setup
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // Verify Email Connection on Server Start
// transporter.verify((error) => {
//   if (error) {
//     console.log("❌ Email Configuration Error:", error);
//   } else {
//     console.log("✅ Email Server Ready");
//   }
// });

// /* ==========================================================================
//    1. GET /test-email
//    UPDATED: Now returns JSON data so your frontend console can capture it.
//    ========================================================================== */
// router.get("/test-email", async (req, res) => {
//   try {
//     // Mock details to simulate what a real form payload looks like
//     const mockBookingDetails = {
//       name: "Test User",
//       phone: "9876543210",
//       email: process.env.EMAIL_USER, // Sends it to yourself for testing
//       event: "Test Concert",
//       date: "2026-12-25",
//       budget: "50,000 INR",
//       message: "This is a verification test email containing form details."
//     };

//     // Send the email with the details included
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER,
//       subject: "🧪 Test Email with Form Details",
//       text: `
// TEST EMAIL WORKING SUCCESSFULLY

// Name: ${mockBookingDetails.name}
// Phone: ${mockBookingDetails.phone}
// Email: ${mockBookingDetails.email}
// Event: ${mockBookingDetails.event}
// Date: ${mockBookingDetails.date}
// Budget: ${mockBookingDetails.budget}
// Message: ${mockBookingDetails.message}
//       `,
//     });

//     console.log("✅ Test Email Sent with Details");

//     // CRITICAL FIX: Returning JSON structure instead of plain text res.send()
//     res.status(200).json({
//       success: true,
//       message: "Test Email Sent Successfully",
//       booking: mockBookingDetails // This payload will now show up in your frontend console!
//     });

//   } catch (error) {
//     console.log("❌ TEST EMAIL ERROR:", error);

//     res.status(500).json({
//       success: false,
//       message: "Test Email Failed",
//       error: error.message,
//     });
//   }
// });

// /* ==========================================================================
//    2. GET / 
//    Fetch all bookings currently stored in memory
//    ========================================================================== */
// router.get("/", (req, res) => {
//   res.status(200).json(bookings);
// });

// /* ==========================================================================
//    3. POST /
//    Create a live booking from actual frontend form submission
//    ========================================================================== */
// router.post("/", async (req, res) => {
//   try {
//     const booking = req.body;

//     console.log("================================");
//     console.log("📩 NEW LIVE BOOKING RECEIVED");
//     console.log(JSON.stringify(booking, null, 2));
//     console.log("================================");

//     // Optional: Uncomment below if you want to keep track of bookings in the local array
//     // bookings.push(booking);

//     // EMAIL TO ADMIN
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER,
//       subject: "🎤 New Singer Booking Request",
//       text: `
// NEW BOOKING RECEIVED

// Name: ${booking.name || "-"}
// Phone: ${booking.phone || "-"}
// Email: ${booking.email || "-"}
// Event: ${booking.event || "-"}
// Date: ${booking.date || "-"}
// Budget: ${booking.budget || "-"}
// Message: ${booking.message || "-"}
//       `,
//     });

//     // CONFIRMATION EMAIL TO CUSTOMER
//     if (booking.email) {
//       await transporter.sendMail({
//         from: process.env.EMAIL_USER,
//         to: booking.email,
//         subject: "Booking Request Received",
//         text: `
// Hello ${booking.name || "Customer"},

// Thank you for your booking request.

// Event: ${booking.event || "-"}
// Date: ${booking.date || "-"}
// Budget: ${booking.budget || "-"}

// We will contact you shortly.

// Regards,
// Aman Raj Srivastava Team
//         `,
//       });
//     }

//     console.log("✅ Live Booking Emails Sent Successfully");

//     // Responds to frontend with full structured JSON data
//     res.status(201).json({
//       success: true,
//       message: "Booking Added Successfully & Email Sent",
//       booking,
//     });

//   } catch (error) {
//     console.log("❌ LIVE EMAIL ERROR:", error);

//     res.status(500).json({
//       success: false,
//       message: "Email Failed",
//       error: error.message,
//     });
//   }
// });

// module.exports = router;

const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

// Temporary in-memory storage for bookings
let bookings = [];

// Gmail Transporter Setup
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify Email Connection on Server Start
transporter.verify((error) => {
  if (error) {
    console.log("❌ Email Configuration Error:", error);
  } else {
    console.log("✅ Email Server Ready");
  }
});

/* ==========================================================================
   1. LIVE BOOKING ROUTE (POST /)
   ========================================================================== */
router.post("/", async (req, res) => {
  try {
    const booking = req.body;

    console.log("=====================================");
    console.log("📩 NEW LIVE FORM SUBMISSION RECEIVED");
    console.log(JSON.stringify(booking, null, 2));
    console.log("=====================================");

    bookings.push(booking);

    // A. EMAIL TO ADMIN WITH THE NEW CLEAN HTML LOOK
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "🎤 New Singer Booking Request",
      html: `
        <h2 style="font-family: sans-serif; color: #111;">New Booking Received</h2>
        <table style="font-family: sans-serif; font-size: 14px; line-height: 2; border-collapse: collapse;">
          <tr>
            <td style="padding: 4px 0; width: 80px;"><strong>Name:</strong></td>
            <td style="padding: 4px 0;">${booking.name || "-"}</td>
          </tr>
          <tr>
            <td style="padding: 4px 0;"><strong>Phone:</strong></td>
            <td style="padding: 4px 0;">${booking.phone || "-"}</td>
          </tr>
          <tr>
            <td style="padding: 4px 0;"><strong>Email:</strong></td>
            <td style="padding: 4px 0;"><a href="mailto:${booking.email}">${booking.email || "-"}</a></td>
          </tr>
          <tr>
            <td style="padding: 4px 0;"><strong>Event:</strong></td>
            <td style="padding: 4px 0;">${booking.event || "-"}</td>
          </tr>
          <tr>
            <td style="padding: 4px 0;"><strong>Date:</strong></td>
            <td style="padding: 4px 0;">${booking.date || "-"}</td>
          </tr>
          <tr>
            <td style="padding: 4px 0;"><strong>Budget:</strong></td>
            <td style="padding: 4px 0;">${booking.budget || "-"}</td>
          </tr>
          <tr>
            <td style="padding: 4px 0; vertical-align: top;"><strong>Message:</strong></td>
            <td style="padding: 4px 0;">${booking.message || "-"}</td>
          </tr>
        </table>
      `,
    });

    // B. CONFIRMATION EMAIL TO THE CUSTOMER
    if (booking.email) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: booking.email,
        subject: "Booking Request Received Successfully",
        html: `
          <p style="font-family: sans-serif;">Hello <strong>${booking.name || "Customer"}</strong>,</p>
          <p style="font-family: sans-serif;">Thank you for reaching out! We have received your booking request details:</p>
          <ul style="font-family: sans-serif; line-height: 1.6;">
            <li><strong>Event Type:</strong> ${booking.event || "-"}</li>
            <li><strong>Date of Event:</strong> ${booking.date || "-"}</li>
            <li><strong>Proposed Budget:</strong> ${booking.budget || "-"}</li>
          </ul>
          <p style="font-family: sans-serif;">Our team will review the details and get back to you as soon as possible.</p>
          <p style="font-family: sans-serif; margin-top: 20px;">Best regards,<br><strong>Aman Raj Srivastava Team</strong></p>
        `,
      });
    }

    console.log("✅ Live Booking Emails Sent Successfully!");

    // This data payload goes straight back to your frontend framework state
    res.status(201).json({
      success: true,
      message: "Test Email Sent Successfully", 
      booking: booking 
    });

  } catch (error) {
    console.log("❌ LIVE EMAIL ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process booking or send email",
      error: error.message,
    });
  }
});

/* ==========================================================================
   2. GET / 
   ========================================================================== */
router.get("/", (req, res) => {
  res.status(200).json(bookings);
});

module.exports = router;