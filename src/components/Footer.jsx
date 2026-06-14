import { NavLink } from "react-router-dom";
import { Leaf, Heart } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/analyze", label: "Analyze Review" },
  { to: "/history", label: "Review History" },
  { to: "/bulk", label: "Bulk Upload" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-brand-500 to-teal-500 grid place-items-center text-white shrink-0">
                <Leaf size={18} />
              </div>
              <div>
                <p className="font-extrabold text-white leading-none">
                  HomeSense<span className="text-brand-400">AI</span>
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">Guest Intelligence Dashboard</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              AI-powered review analytics for eco-homestays in Uttarakhand.
            </p>
            <p className="mt-3 text-xs text-slate-600">Chopta, Uttarakhand 🏔️</p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    className={({ isActive }) =>
                      `text-sm hover:text-brand-400 transition-colors ${
                        isActive ? "text-brand-400" : "text-slate-500"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Built With</h4>
            <ul className="space-y-1.5 text-sm text-slate-500">
              <li>⚛️ React + Vite</li>
              <li>🎨 Tailwind CSS</li>
              <li>🤖 Google Gemini AI</li>
              <li>🐘 PostgreSQL (Supabase)</li>
              <li>📦 Node.js + Express</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>
            Built with <Heart size={11} className="inline text-red-500 mx-0.5" /> for{" "}
            <span className="text-slate-500">TBI GEU Summer Internship 2026</span>
          </p>
          <p>© {new Date().getFullYear()} HomeSense AI</p>
        </div>
      </div>
    </footer>
  );
}
