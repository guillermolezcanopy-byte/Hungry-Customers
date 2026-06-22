export default function Guarantee() {
  return (
    <section className="py-20 bg-[#FF3333]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-8 shadow-2xl">
          <span className="text-4xl">🛡️</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
          Garantía de 30 Días:<br />&ldquo;Resultados o te Devolvemos Todo&rdquo;
        </h2>

        <p className="text-white/90 text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
          Si aplicás el sistema y no ves resultados medibles en tu local dentro de los 30 días, te devolvemos el 100% de tu dinero. Sin preguntas. Sin burocracia. Sin letra chica.
        </p>

        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 mb-10 text-left max-w-2xl mx-auto">
          <h3 className="text-white font-black text-xl mb-4">Esto es lo que garantizamos:</h3>
          <ul className="space-y-3">
            {[
              "Acceso inmediato a todos los módulos al inscribirte",
              "Plantillas, guiones y materiales listos para usar",
              "Verás capturas de clientes nuevos en los primeros 7 días",
              "Si no ves resultados en 30 días — reembolso completo",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/90">
                <span className="text-white font-black text-lg leading-none mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="/agendar"
          className="inline-block bg-white hover:bg-zinc-100 text-[#FF3333] font-black text-xl px-12 py-5 rounded-xl shadow-2xl transition-all duration-200 cursor-pointer"
        >
          AGENDAR MI LLAMADA GRATIS →
        </a>

        <p className="text-white/70 text-sm mt-4">
          Sin riesgo · Garantía 30 días · Acceso inmediato
        </p>
      </div>
    </section>
  );
}
