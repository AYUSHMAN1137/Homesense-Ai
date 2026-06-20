import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import UIShowcase from "./pages/UIShowcase.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ui-showcase" element={<UIShowcase />} />
      <Route path="/dashboard" element={<Placeholder title="Dashboard" desc="Analytics and insights for your reviewed guests." />} />
      <Route path="*" element={<Placeholder title="404 — Page Not Found" desc="This page doesn't exist." />} />
    </Routes>
  );
}

function Placeholder({ title, desc }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
      <div className="text-center p-8">
        <h1 className="text-3xl font-extrabold text-slate-800 dark:text-white mb-2">{title}</h1>
        <p className="text-slate-500 dark:text-slate-400">{desc}</p>
      </div>
    </div>
  );
}
