export default function JoinCallCTA() {
  return (
    <section className="py-20 bg-[#FF3333]">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-8 shadow-2xl">
          <svg className="w-9 h-9 text-[#FF3333]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
          Ya Estás a Un Paso.<br />No Faltes a la Llamada.
        </h2>

        <p className="text-white/90 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Esta llamada puede cambiar la dirección de tu local. 20 minutos de tu tiempo para entender exactamente qué está frenando tus ventas y cómo solucionarlo.
        </p>

        {/* Checklist final reminder */}
        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 mb-10 text-left max-w-xl mx-auto">
          <h3 className="text-white font-black text-lg mb-5 text-center">Checklist antes de la llamada:</h3>
          <ul className="space-y-4">
            {[
              { check: "Revisé mi email y vi la invitación", sub: "Agregala a tu calendario ahora" },
              { check: "Miré el video de esta página", sub: "El video de arriba — 5 minutos" },
              { check: "Confirmé por WhatsApp con el equipo", sub: "Esperá nuestra llamada de confirmación" },
              { check: "Tengo papel y lapicera listos", sub: "Y 30 minutos sin interrupciones" },
            ].map(({ check, sub }) => (
              <li key={check} className="flex items-start gap-4">
                <div className="w-6 h-6 bg-white/20 border-2 border-white rounded mt-0.5 shrink-0" />
                <div>
                  <div className="text-white font-bold">{check}</div>
                  <div className="text-white/60 text-sm">{sub}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-white/70 text-base mb-8">
          ¿Preguntas? Escribinos a{" "}
          <a href="https://wa.me/595000000000" className="underline font-bold text-white hover:text-white/80 cursor-pointer">
            WhatsApp
          </a>{" "}
          y te respondemos al toque.
        </p>

        {/* Social share nudge */}
        <div className="mt-12 pt-10 border-t border-white/20">
          <p className="text-white/60 text-sm">
            ¿Conocés a otro dueño de local que necesite esto?
          </p>
          <a
            href="/"
            className="inline-block mt-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all cursor-pointer"
          >
            Compartí la página con él →
          </a>
        </div>
      </div>
    </section>
  );
}
