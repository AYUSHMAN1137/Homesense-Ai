require("dotenv").config();
const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const healthRoutes = require("./routes/health");
const reviewsRoutes = require("./routes/reviews");
const analyzeRoutes = require("./routes/analyze");
const dashboardRoutes = require("./routes/dashboard");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/health", healthRoutes);
app.use("/api/reviews", reviewsRoutes);
app.use("/api/analyze", analyzeRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Global error handler (must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ HomeSense AI backend running on http://localhost:${PORT}`);
  console.log(`   Health:    GET  http://localhost:${PORT}/api/health`);
  console.log(`   Reviews:   GET  http://localhost:${PORT}/api/reviews`);
  console.log(`   Analyze:   POST http://localhost:${PORT}/api/analyze`);
  console.log(`   Dashboard: GET  http://localhost:${PORT}/api/dashboard`);
});
