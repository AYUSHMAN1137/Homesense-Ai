/**
 * Input component
 *
 * @param {string}   label       - label text shown above the input
 * @param {string}   placeholder - placeholder text inside the input
 * @param {string}   type        - input type: "text" | "email" | "password" etc. (default: "text")
 * @param {string}   value       - controlled value
 * @param {function} onChange    - change handler (e) => void
 * @param {string}   error       - error message to display below the input
 * @param {string}   id          - input id (used for label association)
 */

export default function Input({
  label,
  placeholder = "",
  type = "text",
  value,
  onChange,
  error,
  id,
  className = "",
}) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 ${
          error
            ? "border-red-400 dark:border-red-500 focus:ring-red-400"
            : "border-slate-300 dark:border-slate-600"
        }`}
      />
      {error && (
        <p className="text-xs text-red-500 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}
