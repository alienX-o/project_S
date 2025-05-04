// app.js
const express = require("express");
const app = express();
const helloRoutes = require("./routes/helloRoutes");

// Middleware
app.use(express.json());

// Routes
app.use("/api/hello", helloRoutes);

module.exports = app;
