import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Button, Input, Modal, Toast, Loader } from "../components/ui/index.js";
import { Sparkles, Palette, Layout } from "lucide-react";

export default function UIShowcase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: "", type: "success" });
  const [inputVal, setInputVal] = useState("");
  const [inputError, setInputError] = useState("");

  function showToast(message, type = "success") {
    setToast({ visible: true, message, type });
  }

  function validateInput() {
    if (!inputVal.trim()) {
      setInputError("This field cannot be empty.");
    } else {
      setInputError("");
      showToast("Input looks good!", "success");
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-500 to-teal-500 text-white shadow-lg mx-auto mb-5">
            <Palette size={26} />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-800 dark:text-white mb-3">
            UI Component Showcase
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
            Reusable components built for HomeSense AI — all support dark mode and responsive layouts.
          </p>
        </div>

        {/* Button */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-7">
          <div className="flex items-center gap-2 mb-6">
            <Layout size={18} className="text-brand-600 dark:text-brand-400" />
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">Button</h2>
            <span className="text-xs text-slate-400 font-mono">variant · size · disabled</span>
          </div>

          <div className="space-y-5">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Variants</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="primary" disabled>Disabled</Button>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Sizes</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">With icon</p>
              <Button onClick={() => showToast("Action triggered!", "info")}>
                <Sparkles size={15} /> Analyze Review
              </Button>
            </div>
          </div>
        </section>

        {/* Input */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-7">
          <div className="flex items-center gap-2 mb-6">
            <Layout size={18} className="text-brand-600 dark:text-brand-400" />
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">Input</h2>
            <span className="text-xs text-slate-400 font-mono">label · error · dark mode</span>
          </div>
          <div className="max-w-sm space-y-4">
            <Input
              label="Guest review"
              placeholder="Paste a review here..."
              value={inputVal}
              onChange={(e) => { setInputVal(e.target.value); setInputError(""); }}
              error={inputError}
            />
            <Button onClick={validateInput} variant="primary" size="sm">Validate</Button>
          </div>
        </section>

        {/* Modal */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-7">
          <div className="flex items-center gap-2 mb-6">
            <Layout size={18} className="text-brand-600 dark:text-brand-400" />
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">Modal</h2>
            <span className="text-xs text-slate-400 font-mono">isOpen · onClose · Escape key</span>
          </div>
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Analysis Complete"
          >
            <p>Your guest review has been analysed. Sentiment: <strong className="text-brand-600 dark:text-brand-400">Positive (92%)</strong>.</p>
            <p className="mt-3">Themes detected: Cleanliness, Host Behavior, Food Quality.</p>
            <div className="mt-5">
              <Button onClick={() => { setModalOpen(false); showToast("Review saved!", "success"); }}>
                Save Result
              </Button>
            </div>
          </Modal>
        </section>

        {/* Toast */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-7">
          <div className="flex items-center gap-2 mb-6">
            <Layout size={18} className="text-brand-600 dark:text-brand-400" />
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">Toast</h2>
            <span className="text-xs text-slate-400 font-mono">success · error · info · auto-dismiss</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" size="sm" onClick={() => showToast("Review analysed successfully!", "success")}>
              Success Toast
            </Button>
            <Button variant="outline" size="sm" onClick={() => showToast("Something went wrong. Try again.", "error")}>
              Error Toast
            </Button>
            <Button variant="secondary" size="sm" onClick={() => showToast("Analysis may take a few seconds.", "info")}>
              Info Toast
            </Button>
          </div>
        </section>

        {/* Loader */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-7">
          <div className="flex items-center gap-2 mb-6">
            <Layout size={18} className="text-brand-600 dark:text-brand-400" />
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">Loader</h2>
            <span className="text-xs text-slate-400 font-mono">sm · md · lg · color variants</span>
          </div>
          <div className="flex flex-wrap items-center gap-8">
            <div className="text-center">
              <Loader size="sm" />
              <p className="text-xs text-slate-400 mt-2">Small</p>
            </div>
            <div className="text-center">
              <Loader size="md" />
              <p className="text-xs text-slate-400 mt-2">Medium</p>
            </div>
            <div className="text-center">
              <Loader size="lg" />
              <p className="text-xs text-slate-400 mt-2">Large</p>
            </div>
            <div className="bg-brand-600 rounded-xl p-4 text-center">
              <Loader size="md" color="white" />
              <p className="text-xs text-brand-100 mt-2">On brand</p>
            </div>
          </div>
        </section>
      </main>

      <Toast
        message={toast.message}
        type={toast.type}
        visible={toast.visible}
        onClose={() => setToast((t) => ({ ...t, visible: false }))}
      />

      <Footer />
    </div>
  );
}
