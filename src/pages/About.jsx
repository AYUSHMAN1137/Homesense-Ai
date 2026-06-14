import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Leaf, Target, Lightbulb, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <div className="text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-500 to-teal-500 text-white shadow-lg mx-auto mb-5">
            <Leaf size={26} />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-800 mb-4">About HomeSense AI</h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            HomeSense AI is an AI-powered guest review intelligence dashboard built for eco-homestays
            in Uttarakhand, India. It helps owners understand guest sentiment, track review themes,
            and respond faster using AI-generated reply suggestions.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-brand-100 text-brand-600 grid place-items-center">
              <Target size={20} />
            </div>
            <h2 className="text-xl font-bold text-slate-800">Our Mission</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Small eco-homestay owners don't always have the time or tools to analyse every guest
            review. HomeSense AI automates that process — detecting sentiment, extracting themes like{" "}
            <em>Cleanliness</em>, <em>Host Behavior</em>, and <em>Value for Money</em>, and drafting
            professional replies — so owners can focus on delivering a great stay.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-teal-100 text-teal-600 grid place-items-center">
              <Lightbulb size={20} />
            </div>
            <h2 className="text-xl font-bold text-slate-800">How It Works</h2>
          </div>
          <ol className="space-y-5">
            {[
              { step: "01", title: "Paste or upload a review", desc: "Enter a guest review manually or upload a CSV of past reviews for bulk analysis." },
              { step: "02", title: "AI analysis runs instantly", desc: "Google Gemini reads the review and returns the sentiment, confidence score, relevant themes, and a one-line summary." },
              { step: "03", title: "Get a ready-made reply", desc: "The AI drafts a warm, professional response you can copy and send to your guest." },
              { step: "04", title: "Track & improve", desc: "Monitor trends in your dashboard and act on AI business insights." },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <span className="shrink-0 h-8 w-8 rounded-lg bg-brand-50 text-brand-600 font-extrabold text-sm grid place-items-center">
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold text-slate-800">{item.title}</p>
                  <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-600 grid place-items-center">
              <Users size={20} />
            </div>
            <h2 className="text-xl font-bold text-slate-800">Built By</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            This project was built as part of the{" "}
            <span className="font-semibold text-slate-800">TBI GEU Summer Internship Program 2026</span>.
            It uses React, Tailwind CSS, Node.js, PostgreSQL, and Google Gemini AI.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
