const store = require("../data/store");

/**
 * GET /api/dashboard
 * Returns aggregated stats computed from the in-memory store.
 */
function getDashboard(req, res) {
  const reviews = store.getAll();

  const total = reviews.length;

  let positive = 0, negative = 0, neutral = 0;
  let ratingSum = 0, ratingCount = 0;
  const themeCounts = {};
  let pendingReplies = 0;

  reviews.forEach((r) => {
    if (r.sentiment === "Positive") positive++;
    else if (r.sentiment === "Negative") negative++;
    else if (r.sentiment === "Neutral") neutral++;

    if (r.rating) {
      ratingSum += r.rating;
      ratingCount++;
    }

    if (!r.is_replied) pendingReplies++;

    if (r.themes && Array.isArray(r.themes)) {
      r.themes.forEach((t) => {
        themeCounts[t] = (themeCounts[t] || 0) + 1;
      });
    }
  });

  const positivePercent = total > 0 ? Math.round((positive / total) * 100) : 0;
  const avgRating = ratingCount > 0 ? Math.round((ratingSum / ratingCount) * 10) / 10 : 0;

  // Top 5 themes sorted by count
  const topThemes = Object.entries(themeCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([theme, count]) => ({ theme, count }));

  return res.json({
    total,
    positive,
    negative,
    neutral,
    positivePercent,
    avgRating,
    pendingReplies,
    topThemes,
  });
}

module.exports = { getDashboard };
