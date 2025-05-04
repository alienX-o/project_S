// routes/helloRoutes.js
const express = require("express");
const router = express.Router();
const { sayHi } = require("../controllers/helloController");

router.get("/", sayHi);

module.exports = router;
