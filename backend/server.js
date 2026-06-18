// // const express = require("express");
// // const cors = require("cors");

// // const app = express();

// // app.use(cors());
// // app.use(express.json());

// // app.get("/", (req, res) => {
// //   res.send("Singer Portfolio Backend Running");
// // });

// // app.listen(5000, () => {
// //   console.log("Server Running On Port 5000");
// // });

// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB Connected Successfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// app.get("/", (req, res) => {
//   res.send("Singer Portfolio Backend Running");
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server Running On Port ${PORT}`);
// });

// const bookingRoutes = require("./routes/bookingRoutes");
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.json());
// app.use("/api/bookings", bookingRoutes);

// // mongoose
// //   .connect(process.env.MONGO_URI)
// //   .then(() => console.log("✅ MongoDB Connected Successfully"))
// //   .catch((err) => console.log("❌ MongoDB Error:", err));

// app.get("/", (req, res) => {
//   res.send("Singer Portfolio Backend Running");
// });

// app.listen(5000, () => {
//   console.log("🚀 Server Running On Port 5000");
// });

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Check .env values
console.log("EMAIL USER:", process.env.EMAIL_USER);
console.log(
  "EMAIL PASS:",
  process.env.EMAIL_PASS ? "Loaded Successfully" : "Not Loaded"
);

// Routes
app.use("/api/bookings", bookingRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Singer Portfolio Backend Running");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server Running On Port ${PORT}`);
});