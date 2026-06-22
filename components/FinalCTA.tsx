export default function FinalCTA() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF3333]/5 via-transparent to-[#FF3333]/5 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
          Tu Competencia{" "}
          <span className="text-[#FF3333]">Ya Lo Está Haciendo.</span>
          <br />
          ¿Vos Cuándo Empezás?
        </h2>

        <p className="text-zinc-400 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Cada día que esperás es un día que tu competidor llena las mesas que deberían ser tuyas. Con un único pago de $499 tenés el sistema completo funcionando en menos de una semana.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="/agendar"
            className="cta-pulse bg-[#FF3333] hover:bg-[#CC0000] text-white font-black text-xl px-10 py-5 rounded-xl transition-all duration-200 cursor-pointer"
          >
            AGENDAR MI LLAMADA GRATIS →
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
          <span>✓ Llamada gratis sin compromiso</span>
          <span>✓ Solo 20 minutos</span>
          <span>✓ Cupos limitados</span>
          <span>✓ Respondemos todas tus dudas</span>
        </div>

        <div className="mt-16 pt-10 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { num: "20+", label: "Locales con el sistema activo" },
            { num: "176M gs", label: "En ventas generadas" },
            { num: "30 días", label: "Para ver resultados" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="text-4xl font-black text-[#FF3333]">{num}</div>
              <div className="text-zinc-400 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
