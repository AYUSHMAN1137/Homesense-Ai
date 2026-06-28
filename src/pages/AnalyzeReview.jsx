import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Loader } from "../components/ui";

const API = "http://localhost:3001";

export default function AnalyzeReview() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  async function handleAnalyze() {
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const res = await fetch(`${API}/api/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text.trim() }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Analysis failed.");
      }
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const sentimentColor = {
    Positive: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700",
    Negative: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700",
    Neutral: "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600",
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-12">
        <h1 className="text-3xl font-extrabold text-slate-800 dark:text-white mb-2">
          Analyze a Review
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          Paste a guest review below. Our backend will analyse sentiment, extract themes, and suggest a reply.
        </p>

        {/* Input Area */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 mb-6">
          <label
            htmlFor="review-input"
            className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
          >
            Guest Review
          </label>
          <textarea
            id="review-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste a guest review here…"
            rows={5}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white placeholder-slate-400 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
          />
          <div className="mt-4 flex items-center gap-3">
            <Button
              id="analyze-btn"
              onClick={handleAnalyze}
              disabled={!text.trim() || loading}
              variant="primary"
              size="md"
            >
              {loading ? "Analysing…" : "✦ Analyse with AI"}
            </Button>
            {loading && <Loader size="sm" />}
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl p-4 mb-6">
            <p className="text-red-600 dark:text-red-400 text-sm font-medium">⚠ {error}</p>
            <p className="text-red-400 dark:text-red-300 text-xs mt-1">
              Make sure the backend is running on port 5000.
            </p>
          </div>
        )}

        {/* Results */}
        {result && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">
              Analysis Results
            </h2>

            {/* Sentiment Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold ${sentimentColor[result.sentiment] || sentimentColor.Neutral}`}>
              <span>
                {result.sentiment === "Positive" ? "😊" : result.sentiment === "Negative" ? "😞" : "😐"}
              </span>
              Sentiment: {result.sentiment}
              <span className="text-xs font-normal opacity-75">
                ({Math.round(result.confidence * 100)}% confidence)
              </span>
            </div>

            {/* Themes */}
            {result.themes && result.themes.length > 0 && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-5">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                  Themes Detected
                </p>
                <div className="flex flex-wrap gap-2">
                  {result.themes.map((t) => (
                    <span
                      key={t}
                      className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Summary */}
            {result.summary && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-5">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                  Summary
                </p>
                <p className="text-slate-700 dark:text-slate-300 text-sm">{result.summary}</p>
              </div>
            )}

            {/* Suggested Reply */}
            {result.suggested_reply && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-5">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                  Suggested Reply
                </p>
                <p className="text-slate-700 dark:text-slate-300 text-sm italic">
                  "{result.suggested_reply}"
                </p>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
