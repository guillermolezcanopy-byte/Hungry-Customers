const roadmap = [
  {
    week: "Semana 1",
    title: "Oferta Grand Slam + Guiones",
    items: [
      "Construís tu oferta irresistible del mes",
      "Escribís tu primer guion de ventas viral",
      "Grabás tu primer contenido con el celular",
    ],
    color: "border-[#FF3333]",
    dot: "bg-[#FF3333]",
  },
  {
    week: "Semana 2",
    title: "Tomas, Food Porn y Contenido",
    items: [
      "Dominás las tomas que generan ventas",
      "Publicás con la estructura correcta",
      "Tu primer campaña de contenido activa",
    ],
    color: "border-zinc-600",
    dot: "bg-zinc-600",
  },
  {
    week: "Semana 3",
    title: "Anuncios y Primeras Ventas",
    items: [
      "Lanzás tus primeros anuncios pagos",
      "Invertís poco, medís todo",
      "Optimizás según resultados reales",
    ],
    color: "border-zinc-600",
    dot: "bg-zinc-600",
  },
  {
    week: "Semana 4+",
    title: "Escala y Resultados Constantes",
    items: [
      "Sistema funcionando en piloto automático",
      "Más clientes recurrentes cada semana",
      "Escala lo que funciona, eliminá lo que no",
    ],
    color: "border-zinc-600",
    dot: "bg-zinc-600",
  },
];

export default function Roadmap() {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#FF3333] font-bold text-sm uppercase tracking-widest">Tu Hoja de Ruta</span>
          <h2 className="text-3xl sm:text-4xl font-black mt-3">
            De Cero al Sistema en{" "}
            <span className="text-[#FF3333]">30 Días</span>
          </h2>
          <p className="text-zinc-400 text-lg mt-4 max-w-xl mx-auto">
            Así se ve el camino una vez que arrancás. Paso a paso, sin saltearte nada.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-zinc-800 hidden sm:block" />

          <div className="space-y-6">
            {roadmap.map(({ week, title, items, color, dot }, i) => (
              <div key={week} className="relative sm:pl-16">
                {/* Timeline dot */}
                <div className={`absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-zinc-950 hidden sm:block ${dot}`} />

                <div className={`bg-black border-l-4 ${color} border border-zinc-800 rounded-2xl p-6`}>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-[#FF3333]/10 border border-[#FF3333]/30 text-[#FF3333] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                      {week}
                    </span>
                    <h3 className="font-black text-lg">{title}</h3>
                    {i === 0 && (
                      <span className="bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                        Empezás aquí
                      </span>
                    )}
                  </div>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-zinc-400">
                        <span className="w-1.5 h-1.5 bg-[#FF3333] rounded-full shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
