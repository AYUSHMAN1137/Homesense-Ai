/**
 * Loader component
 *
 * @param {string} size    - "sm" | "md" | "lg"  (default: "md")
 * @param {string} color   - "brand" | "white" | "slate"  (default: "brand")
 * @param {string} label   - accessible screen-reader label (default: "Loading...")
 */

const sizes = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-2",
  lg: "h-12 w-12 border-[3px]",
};

const colors = {
  brand: "border-brand-200 border-t-brand-600 dark:border-brand-800 dark:border-t-brand-400",
  white: "border-white/30 border-t-white",
  slate: "border-slate-200 border-t-slate-500 dark:border-slate-700 dark:border-t-slate-300",
};

export default function Loader({ size = "md", color = "brand", label = "Loading..." }) {
  return (
    <div role="status" className="flex items-center justify-center">
      <div
        className={`rounded-full animate-spin ${sizes[size]} ${colors[color]}`}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}
