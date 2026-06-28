const express = require("express");
const router = express.Router();
const { getDashboard } = require("../controllers/dashboardController");

router.get("/", getDashboard);  // GET /api/dashboard

module.exports = router;
