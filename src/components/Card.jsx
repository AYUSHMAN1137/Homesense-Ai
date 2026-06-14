const accentStyles = {
  brand:  { wrap: "bg-brand-50 border-brand-100",  icon: "bg-brand-100 text-brand-600"  },
  teal:   { wrap: "bg-teal-50 border-teal-100",    icon: "bg-teal-100 text-teal-600"    },
  amber:  { wrap: "bg-amber-50 border-amber-100",  icon: "bg-amber-100 text-amber-600"  },
  blue:   { wrap: "bg-blue-50 border-blue-100",    icon: "bg-blue-100 text-blue-600"    },
  red:    { wrap: "bg-red-50 border-red-100",      icon: "bg-red-100 text-red-600"      },
  purple: { wrap: "bg-purple-50 border-purple-100",icon: "bg-purple-100 text-purple-600"},
};

export default function Card({ icon: Icon, title, description, accent = "brand" }) {
  const style = accentStyles[accent] || accentStyles.brand;

  return (
    <div className={`rounded-2xl border ${style.wrap} p-6 flex flex-col gap-4 shadow-card hover:shadow-md transition-shadow`}>
      {Icon && (
        <div className={`h-11 w-11 rounded-xl ${style.icon} grid place-items-center shrink-0`}>
          <Icon size={22} />
        </div>
      )}
      <div>
        <h3 className="font-bold text-slate-800 text-base mb-1">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
