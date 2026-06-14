import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/login", label: "Login" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-brand-500 to-teal-500 grid place-items-center text-white">
              <Leaf size={18} />
            </div>
            <div>
              <p className="font-extrabold text-slate-800 leading-none">
                HomeSense<span className="text-brand-600">AI</span>
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">Guest Intelligence</p>
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
                      ? "bg-brand-50 text-brand-700"
                      : "text-slate-600 hover:bg-slate-100"
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

          <button
            className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-3 space-y-1 animate-fadeIn">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive ? "bg-brand-50 text-brand-700" : "text-slate-600 hover:bg-slate-100"
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
