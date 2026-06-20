/**
 * Toast notification component
 *
 * @param {string}   message  - the text to display in the toast
 * @param {string}   type     - "success" | "error" | "info"  (default: "success")
 * @param {boolean}  visible  - controls visibility
 * @param {function} onClose  - called after the toast auto-dismisses or is closed
 */

import { useEffect } from "react";
import { CheckCircle, XCircle, Info, X } from "lucide-react";

const config = {
  success: {
    icon: CheckCircle,
    bg: "bg-emerald-50 dark:bg-emerald-900/30",
    border: "border-emerald-200 dark:border-emerald-700",
    text: "text-emerald-800 dark:text-emerald-300",
    icon_color: "text-emerald-500",
  },
  error: {
    icon: XCircle,
    bg: "bg-red-50 dark:bg-red-900/30",
    border: "border-red-200 dark:border-red-700",
    text: "text-red-800 dark:text-red-300",
    icon_color: "text-red-500",
  },
  info: {
    icon: Info,
    bg: "bg-blue-50 dark:bg-blue-900/30",
    border: "border-blue-200 dark:border-blue-700",
    text: "text-blue-800 dark:text-blue-300",
    icon_color: "text-blue-500",
  },
};

export default function Toast({ message, type = "success", visible, onClose }) {
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [visible, onClose]);

  if (!visible) return null;

  const { icon: Icon, bg, border, text, icon_color } = config[type] || config.success;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fadeIn">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg ${bg} ${border}`}
      >
        <Icon size={18} className={icon_color} />
        <p className={`text-sm font-medium ${text}`}>{message}</p>
        <button
          onClick={onClose}
          className={`ml-1 p-0.5 rounded-md opacity-60 hover:opacity-100 transition-opacity ${text}`}
          aria-label="Dismiss"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
