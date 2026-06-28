const store = require("../data/store");

/**
 * GET /api/reviews
 * Returns all reviews from the in-memory store.
 */
function getReviews(req, res) {
  const reviews = store.getAll();
  return res.json(reviews);
}

/**
 * GET /api/reviews/:id
 * Returns a single review by ID. 404 if not found.
 */
function getReview(req, res) {
  const review = store.getById(req.params.id);
  if (!review) {
    return res.status(404).json({ error: "Review not found." });
  }
  return res.json(review);
}

/**
 * POST /api/reviews
 * Body: { text, platform?, rating?, review_date? }
 * Adds a new review. Returns 201 with the new review.
 */
function createReview(req, res) {
  const { text, platform, rating, review_date } = req.body;
  if (!text || !text.trim()) {
    return res.status(400).json({ error: "Review text is required." });
  }
  const newReview = {
    id: "r" + Date.now(),
    text: text.trim(),
    platform: platform || "Manual",
    rating: rating || null,
    review_date: review_date || new Date().toISOString().split("T")[0],
    sentiment: null,
    confidence: null,
    themes: [],
    summary: null,
    suggested_reply: null,
    is_replied: false,
    created_at: new Date().toISOString(),
  };
  store.add(newReview);
  return res.status(201).json(newReview);
}

/**
 * DELETE /api/reviews/:id
 * Deletes a review by ID. 404 if not found.
 */
function deleteReview(req, res) {
  const removed = store.remove(req.params.id);
  if (!removed) {
    return res.status(404).json({ error: "Review not found." });
  }
  return res.json({ ok: true, message: "Review deleted successfully." });
}

/**
 * GET /api/reviews/search?q=
 * Searches reviews by text, platform, or themes. Case-insensitive.
 */
function searchReviews(req, res) {
  const { q } = req.query;
  if (!q || !q.trim()) {
    return res.status(400).json({ error: "Query parameter 'q' is required." });
  }
  const results = store.search(q.trim());
  return res.json(results);
}

module.exports = { getReviews, getReview, createReview, deleteReview, searchReviews };
