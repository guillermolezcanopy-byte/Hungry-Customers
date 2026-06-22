export default function ThankYouHero() {
  return (
    <section className="relative pt-24 pb-16 bg-black overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF3333]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Confirmation badge */}
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-bold px-5 py-2.5 rounded-full mb-8">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Tu llamada fue agendada exitosamente
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-6">
          ¡Perfecto,{" "}
          <span className="text-[#FF3333]">nos vemos pronto!</span>
        </h1>

        <p className="text-zinc-400 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
          Antes de la llamada, mirá este video. Te explica exactamente qué va a pasar, qué preparar, y cómo aprovechar los 20 minutos al máximo.
        </p>

        {/* VSL placeholder */}
        <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl shadow-[#FF3333]/10 max-w-3xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <div className="absolute inset-0">
              {/* Replace src with your actual thank-you video URL */}
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                title="Lo que vas a experimentar en la llamada"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="bg-[#FF3333] px-4 py-3 text-center">
            <p className="text-white font-black text-sm uppercase tracking-wider">
              ▶ MIRÁ ESTE VIDEO ANTES DE LA LLAMADA — IMPORTANTE
            </p>
          </div>
        </div>

        <p className="text-zinc-600 text-sm mt-6">
          Duración: ~5 minutos · Preparate para tomar notas
        </p>
      </div>
    </section>
  );
}
