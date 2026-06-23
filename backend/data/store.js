/**
 * In-memory data store for HomeSense AI backend.
 * Week 5 will replace this with a real PostgreSQL/Supabase database.
 *
 * Each review object shape:
 * {
 *   id: string,
 *   text: string,
 *   platform: string,
 *   rating: number,
 *   review_date: string (ISO),
 *   sentiment: string | null,
 *   confidence: number | null,
 *   themes: string[],
 *   summary: string | null,
 *   suggested_reply: string | null,
 *   is_replied: boolean,
 *   created_at: string (ISO)
 * }
 */

let reviews = [
  {
    id: "r1",
    text: "The homestay was absolutely wonderful! The host was very welcoming and the rooms were spotless. Loved the mountain view from the balcony.",
    platform: "Airbnb",
    rating: 5,
    review_date: "2026-06-01",
    sentiment: "Positive",
    confidence: 0.97,
    themes: ["Cleanliness", "Host", "View"],
    summary: "Excellent experience with great host, clean rooms and stunning views.",
    suggested_reply: "Thank you so much for your kind words! We're thrilled you enjoyed the mountain view. Hope to host you again soon!",
    is_replied: true,
    created_at: "2026-06-01T10:00:00.000Z",
  },
  {
    id: "r2",
    text: "Nice place overall but the wifi was very slow and the hot water took too long to heat up. Breakfast was delicious though.",
    platform: "Booking.com",
    rating: 3,
    review_date: "2026-06-03",
    sentiment: "Neutral",
    confidence: 0.78,
    themes: ["WiFi", "Food", "Amenities"],
    summary: "Mixed experience — good food but connectivity and hot water issues.",
    suggested_reply: "Thank you for your feedback! We've noted the WiFi and hot water issues and are working to fix them. Glad you enjoyed breakfast!",
    is_replied: false,
    created_at: "2026-06-03T14:30:00.000Z",
  },
  {
    id: "r3",
    text: "Terrible experience. The room was dirty, the host was unresponsive, and there were insects everywhere. Would not recommend.",
    platform: "Google",
    rating: 1,
    review_date: "2026-06-05",
    sentiment: "Negative",
    confidence: 0.95,
    themes: ["Cleanliness", "Host", "Hygiene"],
    summary: "Very poor experience with cleanliness and host responsiveness issues.",
    suggested_reply: "We sincerely apologize for your experience. This is not our standard. We'd love to make it right — please contact us directly.",
    is_replied: false,
    created_at: "2026-06-05T09:15:00.000Z",
  },
  {
    id: "r4",
    text: "Beautiful property in Chopta. The host arranged a guided trek which was an amazing bonus. Food was homemade and delicious.",
    platform: "Airbnb",
    rating: 5,
    review_date: "2026-06-08",
    sentiment: "Positive",
    confidence: 0.98,
    themes: ["Location", "Food", "Host", "Activities"],
    summary: "Outstanding stay with guided trek, excellent food and warm hospitality.",
    suggested_reply: "Thank you! The guided trek is one of our favourite offerings. We look forward to hosting you again on your next adventure!",
    is_replied: true,
    created_at: "2026-06-08T11:00:00.000Z",
  },
  {
    id: "r5",
    text: "The location is stunning but the road to reach the property is very rough. Took us 2 hours from the main road. Plan accordingly.",
    platform: "TripAdvisor",
    rating: 3,
    review_date: "2026-06-10",
    sentiment: "Neutral",
    confidence: 0.72,
    themes: ["Location", "Accessibility"],
    summary: "Great location but difficult road access — guests should be prepared.",
    suggested_reply: "Thank you for the heads up! We mention the road conditions in our listing. We recommend a 4WD vehicle and will improve our directions.",
    is_replied: false,
    created_at: "2026-06-10T08:00:00.000Z",
  },
  {
    id: "r6",
    text: "Peaceful, quiet, and absolutely refreshing. We stayed for 4 nights and the host treated us like family. Will definitely return.",
    platform: "Airbnb",
    rating: 5,
    review_date: "2026-06-12",
    sentiment: "Positive",
    confidence: 0.96,
    themes: ["Atmosphere", "Host", "Value"],
    summary: "Peaceful retreat with exceptional hospitality — guests felt at home.",
    suggested_reply: "What a wonderful review! We loved having you for 4 nights. You're always welcome here — like family!",
    is_replied: true,
    created_at: "2026-06-12T16:00:00.000Z",
  },
  {
    id: "r7",
    text: "The property photos are misleading. The actual rooms are much smaller and older than shown. Very disappointing.",
    platform: "Booking.com",
    rating: 2,
    review_date: "2026-06-15",
    sentiment: "Negative",
    confidence: 0.88,
    themes: ["Accuracy", "Rooms"],
    summary: "Guest felt property photos were misleading — rooms smaller than advertised.",
    suggested_reply: "We're sorry to hear this. We've updated our photos to better reflect the rooms. Thank you for helping us improve.",
    is_replied: false,
    created_at: "2026-06-15T13:45:00.000Z",
  },
  {
    id: "r8",
    text: "Good value for money. Basic amenities, clean bathroom, friendly host. Perfect for a budget traveller exploring Uttarakhand.",
    platform: "Google",
    rating: 4,
    review_date: "2026-06-18",
    sentiment: "Positive",
    confidence: 0.84,
    themes: ["Value", "Cleanliness", "Host"],
    summary: "Good budget-friendly option with clean facilities and a friendly host.",
    suggested_reply: "Thank you! We're glad to offer great value for budget travellers. Hope your Uttarakhand trip was amazing!",
    is_replied: false,
    created_at: "2026-06-18T10:30:00.000Z",
  },
];

/**
 * Returns all reviews (optionally filtered).
 */
function getAll() {
  return reviews;
}

/**
 * Returns a single review by id, or undefined.
 */
function getById(id) {
  return reviews.find((r) => r.id === id);
}

/**
 * Adds a new review to the store. Returns the new review.
 */
function add(review) {
  reviews.push(review);
  return review;
}

/**
 * Removes a review by id. Returns true if removed, false if not found.
 */
function remove(id) {
  const idx = reviews.findIndex((r) => r.id === id);
  if (idx === -1) return false;
  reviews.splice(idx, 1);
  return true;
}

/**
 * Searches reviews by text (case-insensitive).
 */
function search(query) {
  const q = query.toLowerCase();
  return reviews.filter(
    (r) =>
      r.text.toLowerCase().includes(q) ||
      (r.platform && r.platform.toLowerCase().includes(q)) ||
      (r.themes && r.themes.some((t) => t.toLowerCase().includes(q)))
  );
}

module.exports = { getAll, getById, add, remove, search };
