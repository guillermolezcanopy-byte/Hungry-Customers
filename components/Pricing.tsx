export default function Pricing() {
  return (
    <section id="agendar" className="py-20 bg-zinc-950">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <span className="text-[#FF3333] font-bold text-sm uppercase tracking-widest">Siguiente Paso</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 mb-6 leading-tight">
          Agendá Tu{" "}
          <span className="text-[#FF3333]">Llamada Gratis</span>
        </h2>
        <p className="text-zinc-400 text-xl leading-relaxed mb-10 max-w-xl mx-auto">
          En 20 minutos te explicamos exactamente cómo el sistema funciona para tu local — y si es el momento indicado para arrancar.
        </p>

        {/* 3 bullets */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { title: "Diagnóstico gratis", desc: "Analizamos tu situación actual" },
            { title: "Plan personalizado", desc: "Qué módulos aplicar primero" },
            { title: "Sin presión", desc: "Si no encaja, te lo decimos" },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-black border border-zinc-800 rounded-xl p-5">
              <div className="font-bold text-sm">{title}</div>
              <div className="text-zinc-500 text-xs mt-1">{desc}</div>
            </div>
          ))}
        </div>

        <a
          href="/agendar"
          className="cta-pulse inline-block bg-[#FF3333] hover:bg-[#CC0000] text-white font-black text-xl px-12 py-5 rounded-xl transition-all duration-200 cursor-pointer shadow-2xl shadow-[#FF3333]/20"
        >
          AGENDAR MI LLAMADA GRATIS →
        </a>

        <p className="text-zinc-600 text-xs mt-5">
          Sin compromiso · Solo 20 minutos · Cupos limitados este mes
        </p>
      </div>
    </section>
  );
}
