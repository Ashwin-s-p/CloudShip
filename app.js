const express = require("express");

const app = express();
const PORT = 3000;

/* =========================
   REQUEST LOGGING
========================= */
app.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.url}`
  );
  next();
});

/* =========================
   HOME ROUTE
========================= */
app.get("/", (req, res) => {
  res.send("CloudShip is running successfully!");
});

/* =========================
   HEALTH CHECK ROUTE
========================= */
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    service: "CloudShip",
    uptime: process.uptime(),
    timestamp: new Date(),
  });
});

/* =========================
   START SERVER
========================= */
app.listen(PORT, () => {
  console.log(`CloudShip server running on port ${PORT}`);
});