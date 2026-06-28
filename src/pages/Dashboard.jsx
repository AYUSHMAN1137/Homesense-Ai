import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Loader } from "../components/ui";

const API = "http://localhost:5000";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API}/api/dashboard`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load dashboard data.");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-12">
        <h1 className="text-3xl font-extrabold text-slate-800 dark:text-white mb-2">
          Dashboard
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          Live analytics powered by the HomeSense AI backend.
        </p>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <Loader size="lg" onBrand />
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Fetching data from backend…
            </p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl p-6 text-center">
            <p className="text-red-600 dark:text-red-400 font-semibold text-lg mb-1">
              ⚠ Could not connect to backend
            </p>
            <p className="text-red-500 dark:text-red-300 text-sm">{error}</p>
            <p className="text-slate-500 dark:text-slate-400 text-xs mt-3">
              Make sure the backend is running: <code className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">cd backend && npm run dev</code>
            </p>
          </div>
        )}

        {/* Dashboard Data */}
        {data && (
          <>
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <StatCard
                label="Total Reviews"
                value={data.total}
                icon="📋"
                color="blue"
              />
              <StatCard
                label="Positive Sentiment"
                value={`${data.positivePercent}%`}
                icon="😊"
                color="green"
              />
              <StatCard
                label="Avg. Rating"
                value={data.avgRating > 0 ? `${data.avgRating} / 5` : "N/A"}
                icon="⭐"
                color="yellow"
              />
              <StatCard
                label="Pending Replies"
                value={data.pendingReplies}
                icon="💬"
                color="orange"
              />
            </div>

            {/* Sentiment Breakdown */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 mb-6">
              <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                Sentiment Breakdown
              </h2>
              <div className="flex gap-4 flex-wrap">
                <SentimentBar
                  label="Positive"
                  count={data.positive}
                  total={data.total}
                  color="bg-emerald-500"
                />
                <SentimentBar
                  label="Neutral"
                  count={data.neutral}
                  total={data.total}
                  color="bg-slate-400"
                />
                <SentimentBar
                  label="Negative"
                  count={data.negative}
                  total={data.total}
                  color="bg-red-500"
                />
              </div>
            </div>

            {/* Top Themes */}
            {data.topThemes && data.topThemes.length > 0 && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6">
                <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                  Top Themes
                </h2>
                <div className="space-y-3">
                  {data.topThemes.map((t) => (
                    <div key={t.theme} className="flex items-center gap-3">
                      <span className="w-28 text-sm text-slate-600 dark:text-slate-300 font-medium shrink-0">
                        {t.theme}
                      </span>
                      <div className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-full h-3">
                        <div
                          className="bg-emerald-500 h-3 rounded-full transition-all duration-500"
                          style={{
                            width: `${Math.min(100, (t.count / data.total) * 100 * 2)}%`,
                          }}
                        />
                      </div>
                      <span className="text-sm text-slate-500 dark:text-slate-400 w-6 text-right">
                        {t.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

function StatCard({ label, value, icon, color }) {
  const colorMap = {
    blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    green: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
    yellow: "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400",
    orange: "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
  };
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3 ${colorMap[color]}`}>
        {icon}
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
      <p className="text-2xl font-extrabold text-slate-800 dark:text-white mt-1">{value}</p>
    </div>
  );
}

function SentimentBar({ label, count, total, color }) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div className="flex-1 min-w-[120px]">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-slate-600 dark:text-slate-300 font-medium">{label}</span>
        <span className="text-slate-500 dark:text-slate-400">{count} ({pct}%)</span>
      </div>
      <div className="bg-slate-100 dark:bg-slate-700 rounded-full h-3">
        <div className={`${color} h-3 rounded-full transition-all duration-500`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
