const pains = [
  {
    title: "Invertís en publicidad y no ves resultados",
    desc: "Probaste Facebook Ads, Instagram, flyers — y aún así los martes y miércoles el local está vacío. El problema no es el presupuesto, es que no tenés un sistema.",
    fix: "→ Sistema de anuncios que convierten desde el día 1",
  },
  {
    title: "Los ingresos son impredecibles",
    desc: "Algunas semanas van bien, otras son un desastre. Sin ingresos constantes no podés contratar, crecer ni planificar nada con tranquilidad.",
    fix: "→ Oferta Grand Slam mensual que genera picos de venta",
  },
  {
    title: "Tu contenido no genera ventas",
    desc: "Subís fotos, reels, stories — pero nadie compra. El contenido bonito no alcanza si no tenés una estructura de ventas detrás.",
    fix: "→ Estructura de contenido y guiones virales probados",
  },
  {
    title: "No sabés cómo hacer tomas de calidad",
    desc: "Ves locales con videos increíbles y pensás que necesitás una productora. No. Con tu celular y la técnica correcta podés generar food porn que vende.",
    fix: "→ Tomas crudas + técnica de food porn con celular",
  },
];

export default function Problem() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#FF3333] font-bold text-sm uppercase tracking-widest">La Verdad Incómoda</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 leading-tight">
            ¿Te Suena Familiar?{" "}
            <span className="text-[#FF3333]">No Es Tu Culpa</span>
          </h2>
          <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">
            La mayoría de los dueños de locales trabajan 70 horas por semana sin un sistema. Cada problema tiene una solución específica — y te la vamos a enseñar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pains.map(({ title, desc, fix }) => (
            <div
              key={title}
              className="group bg-zinc-900/50 border border-zinc-800 hover:border-[#FF3333]/40 rounded-2xl p-6 transition-all duration-300 cursor-default"
            >
              <h3 className="font-black text-lg mb-2 group-hover:text-[#FF3333] transition-colors">{title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-3">{desc}</p>
              <p className="text-[#FF3333] text-xs font-bold">{fix}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-[#FF3333]/10 border border-[#FF3333]/30 rounded-2xl px-8 py-6">
            <p className="text-[#FF3333] font-black text-xl sm:text-2xl">
              176.000.000gs vendidos con 1.900.000 invertidos
            </p>
            <p className="text-zinc-400 mt-2">
              en 30 días. Con el sistema correcto, los números cambian.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
