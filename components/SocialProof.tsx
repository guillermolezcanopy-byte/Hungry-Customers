const logos = [
  "Chempanadas",
  "Mercedita",
  "Dalu",
  "Extreme",
  "Jalisco",
  "Granja Kim",
  "Lemoztache",
  "La Camorra",
  "Galeto",
  "Arigua Resto Bar",
  "Il Mostaccio",
  "Criollo",
  "Scala Tasty",
  "Koke",
  "Billie Burger",
];

export default function SocialProof() {
  return (
    <section className="bg-zinc-950 border-y border-zinc-800 py-8 overflow-hidden">
      <p className="text-center text-zinc-500 text-xs uppercase tracking-widest mb-6 px-4">
        Confiado por 20+ locales gastronómicos
      </p>
      <div className="flex gap-12 animate-[scroll_45s_linear_infinite] whitespace-nowrap">
        {[...logos, ...logos].map((name, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-zinc-400 font-bold text-sm uppercase tracking-wider shrink-0"
          >
            <span className="w-2 h-2 bg-[#FF3333] rounded-full" />
            {name}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
