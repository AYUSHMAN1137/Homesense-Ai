import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Card from "../components/Card.jsx";
import Footer from "../components/Footer.jsx";
import { Sparkles, BarChart2, MessageSquareText, UploadCloud, ShieldCheck, Leaf } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Sentiment Analysis",
    description: "Instantly detect whether a review is Positive, Negative, or Neutral using Google Gemini — with a confidence score.",
    accent: "brand",
  },
  {
    icon: MessageSquareText,
    title: "Auto Reply Suggestions",
    description: "Get a warm, professional reply drafted by AI for every review — ready to copy and send to your guest.",
    accent: "teal",
  },
  {
    icon: BarChart2,
    title: "Analytics Dashboard",
    description: "Visualise sentiment distribution and most-mentioned themes with interactive pie and bar charts.",
    accent: "blue",
  },
  {
    icon: UploadCloud,
    title: "Bulk CSV Upload",
    description: "Upload hundreds of past reviews in one go. The AI processes them all and saves results to your history.",
    accent: "amber",
  },
  {
    icon: ShieldCheck,
    title: "Reply Tracker",
    description: "Mark reviews as replied or pending so nothing slips through the cracks.",
    accent: "purple",
  },
  {
    icon: Leaf,
    title: "Eco-Homestay Focused",
    description: "Tuned for the 8 themes that matter most: Food, Cleanliness, Host Behavior, Location, and more.",
    accent: "red",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <Hero />

      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-3">
              Everything you need to understand your guests
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-lg">
              HomeSense AI turns raw guest reviews into actionable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <Card
                key={f.title}
                icon={f.icon}
                title={f.title}
                description={f.description}
                accent={f.accent}
              />
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-brand-600 to-teal-600 py-14 px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Ready to understand your guests better?
            </h2>
            <p className="text-brand-100 mb-7">
              Paste your first review and watch the AI work in seconds.
            </p>
            <a
              href="/analyze"
              className="inline-flex items-center gap-2 bg-white text-brand-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-brand-50 transition-colors shadow-lg"
            >
              <Sparkles size={17} />
              Get Started — It's Free
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
