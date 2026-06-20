/**
 * Modal component
 *
 * @param {boolean}  isOpen   - controls visibility of the modal
 * @param {function} onClose  - called when user clicks backdrop or presses Escape
 * @param {string}   title    - heading text shown at the top of the modal
 * @param {node}     children - content rendered inside the modal body
 */

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, title, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    modalRef.current?.focus();

    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative z-10 w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 animate-fadeIn focus:outline-none"
      >
        <div className="flex items-center justify-between mb-4">
          <h2
            id="modal-title"
            className="text-lg font-bold text-slate-800 dark:text-white"
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
