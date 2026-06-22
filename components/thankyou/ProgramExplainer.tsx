const modules = [
  {
    num: "01",
    title: "Oferta Grand Slam",
    tag: "La base del éxito",
    desc: "Una oferta genérica no mueve la aguja. Te enseñamos a construir la oferta del mes que hace que la gente compre sin pensarlo — diseñada específicamente para tu local y tu público.",
  },
  {
    num: "02",
    title: "Guiones de Ventas Virales",
    tag: "El único guion que vende",
    desc: "El guion que usás importa más que el presupuesto. Te damos los guiones exactos que usamos para generar picos de venta en locales gastronómicos — listos para copiar y adaptar.",
  },
  {
    num: "03",
    title: "Tomas y Food Porn",
    tag: "Con tu celular",
    desc: "Recibís en un drive en crudo todas las tomas que desarrollamos en los locales de nuestra agencia. Entendés la técnica y la replicás con tu celular. Sin cámara profesional. Sin productora.",
  },
  {
    num: "04",
    title: "Estructura de Contenido",
    tag: "La fórmula exacta",
    desc: "No improvisés más. Te damos la estructura de contenido que usamos para batir el récord de ventas de los locales gastronómicos. Publicás con intención y cada post trabaja para vos.",
  },
  {
    num: "05",
    title: "Anuncios que Convierten",
    tag: "$22.5K con $250 invertidos",
    desc: "La metodología real que usamos en nuestra agencia. Cómo armar una campaña de bajo presupuesto que genera alto retorno — y cómo escalar cuando encontrás lo que funciona.",
  },
];

export default function ProgramExplainer() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#FF3333] font-bold text-sm uppercase tracking-widest">El Programa</span>
          <h2 className="text-3xl sm:text-4xl font-black mt-3">
            Qué Vas a Aprender en{" "}
            <span className="text-[#FF3333]">Cada Módulo</span>
          </h2>
          <p className="text-zinc-400 text-lg mt-4 max-w-xl mx-auto">
            Esto es exactamente lo que cubre el Hungry Customers System — lo que vamos a repasar juntos en la llamada.
          </p>
        </div>

        <div className="space-y-4">
          {modules.map(({ num, title, tag, desc }) => (
            <div
              key={num}
              className="group flex gap-6 bg-zinc-900/50 border border-zinc-800 hover:border-[#FF3333]/40 rounded-2xl p-6 transition-all duration-300 cursor-default"
            >
              <div className="shrink-0 w-14 h-14 bg-[#FF3333]/10 border border-[#FF3333]/30 rounded-xl flex items-center justify-center">
                <span className="text-[#FF3333] font-black text-xl">{num}</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-black text-lg group-hover:text-[#FF3333] transition-colors">{title}</h3>
                  <span className="bg-zinc-800 text-zinc-400 text-xs font-bold px-3 py-1 rounded-full">{tag}</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-12 bg-[#FF3333]/5 border border-[#FF3333]/20 rounded-2xl p-8 text-center">
          <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl mx-auto">
            En la llamada te mostramos <strong className="text-white">cuál de estos módulos aplicar primero</strong> según la situación actual de tu local — para que empieces a ver resultados desde la primera semana.
          </p>
        </div>
      </div>
    </section>
  );
}
