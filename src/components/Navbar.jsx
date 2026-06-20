import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Leaf, Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/login", label: "Login" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-brand-500 to-teal-500 grid place-items-center text-white">
              <Leaf size={18} />
            </div>
            <div>
              <p className="font-extrabold text-slate-800 dark:text-white leading-none">
                HomeSense<span className="text-brand-600">AI</span>
              </p>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">Guest Intelligence</p>
            </div>
          </NavLink>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/analyze"
              className="ml-2 px-4 py-2 rounded-xl text-sm font-semibold bg-brand-600 text-white hover:bg-brand-700 transition-colors"
            >
              Analyze Review
            </NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark((prev) => !prev)}
              className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 space-y-1 animate-fadeIn">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/analyze"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-sm font-semibold bg-brand-600 text-white text-center mt-1"
          >
            Analyze Review
          </NavLink>
        </div>
      )}
    </header>
  );
}
