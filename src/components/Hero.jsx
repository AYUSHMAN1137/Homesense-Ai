import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-brand-900 to-teal-900 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-teal-500/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-500/20 border border-brand-400/30 text-brand-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
          <Sparkles size={13} />
          Powered by Google Gemini AI
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          Guest Review
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-teal-400">
            Intelligence Dashboard
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-300 text-lg leading-relaxed mb-10">
          AI-powered sentiment analysis for your eco-homestay. Know what guests love,
          what needs fixing, and get ready-made replies — all in one place.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/analyze"
            className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg"
          >
            <Sparkles size={17} />
            Analyze a Review
          </Link>
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
          >
            View Dashboard
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { value: "AI-Powered", label: "Sentiment Analysis" },
            { value: "8 Themes", label: "Auto-Detected" },
            { value: "Instant", label: "Reply Suggestions" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-xl sm:text-2xl font-extrabold text-brand-300">{stat.value}</p>
              <p className="text-xs text-slate-400 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
