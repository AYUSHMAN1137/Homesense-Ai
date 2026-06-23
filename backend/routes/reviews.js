const express = require("express");
const router = express.Router();
const {
  getReviews,
  getReview,
  createReview,
  deleteReview,
} = require("../controllers/reviewsController");

router.get("/", getReviews);          // GET  /api/reviews
router.get("/:id", getReview);        // GET  /api/reviews/:id
router.post("/", createReview);       // POST /api/reviews
router.delete("/:id", deleteReview);  // DELETE /api/reviews/:id

module.exports = router;
