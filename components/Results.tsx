const stats = [
  { number: "176M gs", label: "En ventas generadas", sub: "en 30 días" },
  { number: "92x", label: "Retorno sobre inversión", sub: "con 1.9M invertidos" },
  { number: "4.8★", label: "Calificación promedio", sub: "de nuestros alumnos" },
  { number: "20+", label: "Locales con el sistema activo", sub: "y creciendo" },
];

const caseStudies = [
  {
    name: "Marco's Pizzería",
    location: "Asunción, PY",
    before: "18M gs/mes",
    after: "61M gs/mes",
    result: "+43M gs en 60 días",
    quote: "Pensé que era demasiado bueno para ser real. No lo era.",
  },
  {
    name: "Sakura Sushi",
    location: "San Lorenzo, PY",
    before: "22M gs/mes",
    after: "74M gs/mes",
    result: "+52M gs en 90 días",
    quote: "Ahora tengo lista de espera los viernes.",
  },
  {
    name: "Casa del Sol",
    location: "Luque, PY",
    before: "31M gs/mes",
    after: "89M gs/mes",
    result: "+58M gs en 75 días",
    quote: "La mejor inversión que hice para mi local.",
  },
];

export default function Results() {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#FF3333] font-bold text-sm uppercase tracking-widest">Números Reales</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3">
            Resultados Que{" "}
            <span className="text-[#FF3333]">Hablan Solos</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map(({ number, label, sub }) => (
            <div
              key={label}
              className="text-center bg-black border border-zinc-800 rounded-2xl p-6"
            >
              <div className="text-3xl sm:text-4xl font-black text-[#FF3333] mb-2">{number}</div>
              <div className="font-bold text-sm sm:text-base">{label}</div>
              <div className="text-zinc-500 text-xs mt-1">{sub}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map(({ name, location, before, after, result, quote }) => (
            <div
              key={name}
              className="bg-black border border-zinc-800 rounded-2xl p-6 hover:border-[#FF3333]/40 transition-colors"
            >
              <div className="mb-4">
                <div className="font-black text-lg">{name}</div>
                <div className="text-zinc-500 text-sm">{location}</div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="text-center">
                  <div className="text-zinc-400 text-xs mb-1">ANTES</div>
                  <div className="font-bold text-zinc-300 line-through">{before}</div>
                </div>
                <div className="text-[#FF3333] font-black text-xl">→</div>
                <div className="text-center">
                  <div className="text-zinc-400 text-xs mb-1">DESPUÉS</div>
                  <div className="font-black text-white text-lg">{after}</div>
                </div>
              </div>

              <div className="bg-[#FF3333]/10 border border-[#FF3333]/30 rounded-lg px-3 py-2 mb-4 text-center">
                <span className="text-[#FF3333] font-black">{result}</span>
              </div>

              <p className="text-zinc-400 text-sm italic">&ldquo;{quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
