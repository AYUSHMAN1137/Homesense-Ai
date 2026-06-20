/**
 * Button component
 *
 * @param {string}   variant  - "primary" | "secondary" | "outline"  (default: "primary")
 * @param {string}   size     - "sm" | "md" | "lg"                   (default: "md")
 * @param {boolean}  disabled - disables the button when true
 * @param {function} onClick  - click handler
 * @param {node}     children - button label / content
 */

const styles = {
  base: "inline-flex items-center justify-center font-semibold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed",
  variant: {
    primary: "bg-brand-600 text-white hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600",
    secondary: "bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600",
    outline: "border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800",
  },
  size: {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2 gap-2",
    lg: "text-base px-6 py-3 gap-2.5",
  },
};

export default function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  children,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${styles.base} ${styles.variant[variant]} ${styles.size[size]} ${className}`}
    >
      {children}
    </button>
  );
}
