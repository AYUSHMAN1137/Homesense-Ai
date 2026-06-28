const express = require("express");
const router = express.Router();
const {
  getReviews,
  getReview,
  createReview,
  deleteReview,
  searchReviews,
} = require("../controllers/reviewsController");

// NOTE: /search must come before /:id to avoid Express matching "search" as an ID
router.get("/search", searchReviews);  // GET  /api/reviews/search?q=
router.get("/", getReviews);           // GET  /api/reviews
router.get("/:id", getReview);         // GET  /api/reviews/:id
router.post("/", createReview);        // POST /api/reviews
router.delete("/:id", deleteReview);   // DELETE /api/reviews/:id

module.exports = router;
