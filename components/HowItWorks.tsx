const steps = [
  {
    step: "1",
    title: "Te inscribís hoy",
    desc: "Completás el checkout seguro y tenés acceso inmediato a todos los módulos del curso.",
    time: "Hoy",
  },
  {
    step: "2",
    title: "Empezás con la Oferta Grand Slam",
    desc: "El módulo 1 te muestra cómo construir una oferta irresistible para este mes. Es la base de todo.",
    time: "Día 1",
  },
  {
    step: "3",
    title: "Grabás y publicás tu contenido",
    desc: "Con los guiones, las tomas y la estructura de contenido, publicás tu primera campaña en menos de una semana.",
    time: "Día 7",
  },
  {
    step: "4",
    title: "Las ventas empiezan a llegar",
    desc: "Con los anuncios activos y el sistema funcionando, empezás a ver resultados medibles antes de los 30 días.",
    time: "Día 30",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#FF3333] font-bold text-sm uppercase tracking-widest">El Proceso</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3">
            En Marcha en{" "}
            <span className="text-[#FF3333]">Una Semana</span>
          </h2>
          <p className="text-zinc-400 text-lg mt-4 max-w-xl mx-auto">
            Sin conocimientos técnicos. Solo seguís el sistema paso a paso.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#FF3333]/40 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map(({ step, title, desc, time }) => (
              <div key={step} className="text-center">
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-[#FF3333] rounded-full text-white font-black text-2xl mb-4 mx-auto shadow-lg shadow-[#FF3333]/30">
                  {step}
                  <span className="absolute -top-2 -right-2 bg-zinc-900 border border-zinc-700 text-zinc-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {time}
                  </span>
                </div>
                <h3 className="font-black text-lg mb-2">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <a
            href="/agendar"
            className="inline-block bg-[#FF3333] hover:bg-[#CC0000] text-white font-black text-lg px-10 py-4 rounded-xl transition-colors duration-200 cursor-pointer cta-pulse"
          >
            AGENDAR MI LLAMADA GRATIS →
          </a>
        </div>
      </div>
    </section>
  );
}
