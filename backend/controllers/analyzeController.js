const store = require("../data/store");

/**
 * Mock AI sentiment analysis — keyword based, no external API needed.
 * Returns: { sentiment, confidence, themes, summary, suggested_reply }
 */
function mockAnalyze(text) {
  const lower = text.toLowerCase();

  // Positive keywords
  const positiveWords = ["great", "excellent", "amazing", "wonderful", "fantastic",
    "love", "loved", "beautiful", "perfect", "best", "awesome", "brilliant",
    "friendly", "clean", "peaceful", "delicious", "recommend", "superb", "comfortable"];

  // Negative keywords
  const negativeWords = ["terrible", "horrible", "bad", "worst", "dirty", "disgusting",
    "awful", "disappointing", "misleading", "rude", "slow", "broken", "insects",
    "unhappy", "waste", "never", "avoid", "poor", "unresponsive", "small"];

  let positiveScore = 0;
  let negativeScore = 0;

  positiveWords.forEach((w) => { if (lower.includes(w)) positiveScore++; });
  negativeWords.forEach((w) => { if (lower.includes(w)) negativeScore++; });

  let sentiment, confidence;
  if (positiveScore > negativeScore) {
    sentiment = "Positive";
    confidence = Math.min(0.99, 0.70 + positiveScore * 0.05);
  } else if (negativeScore > positiveScore) {
    sentiment = "Negative";
    confidence = Math.min(0.99, 0.70 + negativeScore * 0.05);
  } else {
    sentiment = "Neutral";
    confidence = 0.65;
  }

  // Theme detection
  const themes = [];
  if (lower.includes("clean") || lower.includes("dirty") || lower.includes("hygiene")) themes.push("Cleanliness");
  if (lower.includes("host") || lower.includes("friendly") || lower.includes("rude")) themes.push("Host");
  if (lower.includes("food") || lower.includes("breakfast") || lower.includes("delicious")) themes.push("Food");
  if (lower.includes("wifi") || lower.includes("internet") || lower.includes("connection")) themes.push("WiFi");
  if (lower.includes("view") || lower.includes("location") || lower.includes("mountain")) themes.push("Location");
  if (lower.includes("room") || lower.includes("bed") || lower.includes("bathroom")) themes.push("Rooms");
  if (lower.includes("value") || lower.includes("price") || lower.includes("budget")) themes.push("Value");
  if (themes.length === 0) themes.push("General");

  const summary = `${sentiment} review (${Math.round(confidence * 100)}% confidence). Key themes: ${themes.join(", ")}.`;

  const replyMap = {
    Positive: "Thank you so much for your kind words! We're delighted you had a great experience and hope to host you again soon.",
    Negative: "We sincerely apologize for your experience. This is not the standard we aim for. Please contact us directly so we can make it right.",
    Neutral: "Thank you for your balanced feedback. We've noted your suggestions and will work on improving your experience for next time.",
  };

  return {
    sentiment,
    confidence: Math.round(confidence * 100) / 100,
    themes,
    summary,
    suggested_reply: replyMap[sentiment],
  };
}

/**
 * POST /api/analyze
 * Body: { text, platform?, rating?, review_date? }
 * Analyzes a review using mock AI and saves to store.
 */
function analyze(req, res) {
  const { text, platform, rating, review_date } = req.body;
  if (!text || !text.trim()) {
    return res.status(400).json({ error: "Review text is required." });
  }

  const ai = mockAnalyze(text.trim());

  const newReview = {
    id: "r" + Date.now(),
    text: text.trim(),
    platform: platform || "Manual",
    rating: rating || null,
    review_date: review_date || new Date().toISOString().split("T")[0],
    ...ai,
    is_replied: false,
    created_at: new Date().toISOString(),
  };

  store.add(newReview);
  return res.json(newReview);
}

module.exports = { analyze };
