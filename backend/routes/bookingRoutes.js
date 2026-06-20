const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

// In-memory store (bookings survive until server restarts)
const bookings = [];

// ─── Gmail SMTP ───────────────────────────────────────────────────────────────
// port 465 + secure:true + family:4 (force IPv4) fixes the ENETUNREACH error
// that happens on Render.com because their free tier blocks outbound IPv6.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  family: 4,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000,
});

transporter.verify((err) => {
  if (err) console.log("❌ Email config error:", err.message);
  else console.log("✅ Email server ready");
});

// ─── Validation ───────────────────────────────────────────────────────────────
function validate(data) {
  if (!data.name || data.name.trim().length < 2)
    return "Name must be at least 2 characters.";
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return "A valid email address is required.";
  const phone = (data.phone || "").replace(/[\s\-\+\(\)]/g, "");
  if (!phone || !/^\d{7,15}$/.test(phone))
    return "A valid phone number is required.";
  if (!data.event) return "Event type is required.";
  if (!data.date) return "Event date is required.";
  const eventDate = new Date(data.date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (eventDate < today) return "Event date cannot be in the past.";
  return null;
}

// ─── POST /api/bookings ───────────────────────────────────────────────────────
router.post("/", async (req, res) => {
  const booking = req.body;

  console.log("📩 New booking received:", booking);

  const validationError = validate(booking);
  if (validationError) {
    return res.status(400).json({ success: false, message: validationError });
  }

  bookings.push({ ...booking, receivedAt: new Date().toISOString() });

  // Send both emails independently — one failing won't block the other
  let adminSent = false;
  let customerSent = false;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "🎤 New Booking Request",
      html: `
        <h2 style="font-family:sans-serif;color:#111;">New Booking Received</h2>
        <table style="font-family:sans-serif;font-size:14px;line-height:2.2;border-collapse:collapse;">
          <tr><td style="padding-right:16px;font-weight:bold;">Name</td><td>${booking.name}</td></tr>
          <tr><td style="font-weight:bold;">Phone</td><td>${booking.phone}</td></tr>
          <tr><td style="font-weight:bold;">Email</td><td><a href="mailto:${booking.email}">${booking.email}</a></td></tr>
          <tr><td style="font-weight:bold;">Event</td><td>${booking.event || "-"}</td></tr>
          <tr><td style="font-weight:bold;">Date</td><td>${booking.date || "-"}</td></tr>
          <tr><td style="font-weight:bold;">Budget</td><td>${booking.budget || "-"}</td></tr>
          <tr><td style="font-weight:bold;">Audience</td><td>${booking.audience || "-"}</td></tr>
          <tr><td style="font-weight:bold;">Venue</td><td>${booking.venue || "-"}</td></tr>
          <tr><td style="font-weight:bold;">Guests</td><td>${booking.guests || "-"}</td></tr>
          <tr><td style="font-weight:bold;">Location</td><td>${booking.location || "-"}</td></tr>
          <tr><td style="font-weight:bold;vertical-align:top;">Message</td><td>${booking.message || "-"}</td></tr>
        </table>
      `,
    });
    adminSent = true;
    console.log("✅ Admin email sent");
  } catch (e) {
    console.log("❌ Admin email failed:", e.message);
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: booking.email,
      subject: "Your Booking Request Has Been Received",
      html: `
        <p style="font-family:sans-serif;">Hello <strong>${booking.name}</strong>,</p>
        <p style="font-family:sans-serif;">Thank you for reaching out! We have received your booking request.</p>
        <ul style="font-family:sans-serif;line-height:1.8;">
          <li><strong>Event:</strong> ${booking.event || "-"}</li>
          <li><strong>Date:</strong> ${booking.date || "-"}</li>
          <li><strong>Budget:</strong> ${booking.budget || "-"}</li>
        </ul>
        <p style="font-family:sans-serif;">We will review your request and get back to you soon.</p>
        <p style="font-family:sans-serif;margin-top:20px;">
          Best regards,<br><strong>Aman Raj Srivastava Team</strong>
        </p>
      `,
    });
    customerSent = true;
    console.log("✅ Customer email sent");
  } catch (e) {
    console.log("❌ Customer email failed:", e.message);
  }

  if (!adminSent && !customerSent) {
    return res.status(500).json({
      success: false,
      message:
        "Booking received but emails could not be sent. We will contact you shortly.",
    });
  }

  return res.status(201).json({
    success: true,
    message: "Booking confirmed! A confirmation email has been sent to you.",
    booking,
  });
});

// ─── GET /api/bookings ────────────────────────────────────────────────────────
router.get("/", (req, res) => {
  res.status(200).json(bookings);
});

module.exports = router;
