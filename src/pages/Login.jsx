import { useState } from "react";
import { Link } from "react-router-dom";
import { Leaf, Eye, EyeOff, LogIn } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setError("Authentication not yet implemented — coming in Week 6!");
    }, 800);
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-8">
            <div className="flex justify-center mb-6">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-500 to-teal-500 grid place-items-center text-white shadow-lg">
                <Leaf size={26} />
              </div>
            </div>

            <h1 className="text-2xl font-extrabold text-slate-800 text-center mb-1">
              Sign in to HomeSense AI
            </h1>
            <p className="text-sm text-slate-400 text-center mb-8">
              Enter your credentials to access the dashboard
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1.5">
                  Email address
                </label>
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="w-full rounded-xl border border-slate-200 p-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className="w-full rounded-xl border border-slate-200 p-3 pr-10 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-400 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
                  {error}
                </div>
              )}

              <button
                type="submit"
                id="login-submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-xl transition disabled:opacity-60 mt-2"
              >
                {loading ? (
                  <span className="h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                ) : (
                  <LogIn size={17} />
                )}
                {loading ? "Signing in…" : "Sign In"}
              </button>
            </form>

            <p className="mt-6 text-center text-xs text-slate-400">
              Don't have an account?{" "}
              <Link to="/about" className="text-brand-600 hover:underline font-medium">
                Learn more
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
