const pillars = [
  {
    num: "01",
    title: "Oferta Grand Slam",
    tag: "La base del éxito",
    desc: "Lo que va a definir el éxito de tu campaña es qué tan creativo seas con la oferta del mes. Una propuesta genérica no genera impacto. Te enseñamos a construir ofertas irresistibles que hacen que la gente compre sin pensarlo.",
  },
  {
    num: "02",
    title: "Guiones de Ventas Virales",
    tag: "El único guion que vende",
    desc: "El único guion que va a hacer que vendas más es uno enfocado en la venta de un producto. Te entregamos los guiones exactos que usamos para generar ventas masivas en locales gastronómicos.",
  },
  {
    num: "03",
    title: "Tomas y Food Porn",
    tag: "Solo con tu celular",
    desc: "Vas a recibir en un drive en crudo todas las tomas que desarrollamos en los locales de nuestra agencia. Vas a entender cómo vos solo, con tu celular, podés replicar el mismo nivel de calidad visual.",
  },
  {
    num: "04",
    title: "Estructura de Contenido",
    tag: "La fórmula exacta",
    desc: "Te damos exactamente la estructura de contenido que usamos para batir el récord de ventas de los locales gastronómicos. Sin improvisar. Sin perder tiempo. Con resultados desde la primera semana.",
  },
  {
    num: "05",
    title: "Anuncios que Convierten",
    tag: "Sin gastar de más",
    desc: "La metodología que usamos para vender 176.000.000gs con 1.900.000 invertidos en 30 días. Aprendés a lanzar campañas de bajo presupuesto con alto retorno — específicamente para locales gastronómicos.",
  },
];

export default function Solution() {
  return (
    <section className="relative py-20 bg-zinc-950 overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-35"
        src="/hielos.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#FF3333] font-bold text-sm uppercase tracking-widest">Lo Que Vas a Aprender</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 leading-tight">
            El{" "}
            <span className="text-[#FF3333]">Hungry Customers System</span>
          </h2>
          <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">
            Un sistema completo de 5 módulos para llenar tu local de clientes de manera consistente — enseñado por quienes ya lo hacen con resultados reales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.slice(0, 4).map(({ num, title, tag, desc }) => (
            <ModuleCard key={num} num={num} title={title} tag={tag} desc={desc} />
          ))}
        </div>

        {/* 5th card centered */}
        <div className="mt-6 max-w-2xl mx-auto">
          <ModuleCard {...pillars[4]} />
        </div>
      </div>
    </section>
  );
}

function ModuleCard({ num, title, tag, desc }: { num: string; title: string; tag: string; desc: string }) {
  return (
    <div className="relative bg-black border border-zinc-800 hover:border-[#FF3333]/50 rounded-2xl p-7 transition-all duration-300 group overflow-hidden cursor-default">
      <div className="absolute top-0 right-0 text-[120px] font-black text-zinc-900 leading-none select-none pointer-events-none group-hover:text-[#FF3333]/10 transition-colors">
        {num}
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-[#FF3333] font-black text-3xl">{num}</div>
          <span className="bg-[#FF3333]/10 border border-[#FF3333]/30 text-[#FF3333] text-xs font-bold px-3 py-1 rounded-full">
            {tag}
          </span>
        </div>
        <h3 className="font-black text-xl mb-3">{title}</h3>
        <p className="text-zinc-400 leading-relaxed text-sm">{desc}</p>
      </div>
    </div>
  );
}
