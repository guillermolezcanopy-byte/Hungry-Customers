const steps = [
  {
    number: "01",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Revisá tu email ahora",
    desc: "Te enviamos un correo con la invitación oficial a la llamada. Tiene el enlace, el horario confirmado y todo lo que necesitás.",
    action: "Revisá también la carpeta de spam por si acaso.",
    highlight: false,
  },
  {
    number: "02",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Agregá el link a tu calendario",
    desc: "En el email hay un botón para agregar la llamada a Google Calendar, Apple Calendar o Outlook. Hacelo ahora para que no se te pase.",
    action: "Un recordatorio automático te avisa 1 hora antes.",
    highlight: false,
  },
  {
    number: "03",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Te llamamos para confirmar",
    desc: "Alguien de nuestro equipo te va a contactar por WhatsApp o llamada para confirmar que vas a estar presente. Es rápido — solo para asegurarnos.",
    action: "Asegurate de tener el WhatsApp activo.",
    highlight: true,
  },
  {
    number: "04",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Preparate para la llamada",
    desc: "Buscá un lugar tranquilo donde puedas concentrarte. Tené papel y lapicera a mano. La llamada dura 20-30 minutos y vas a querer tomar notas.",
    action: "Sin distracciones = mejor resultado para vos.",
    highlight: false,
  },
];

export default function NextSteps() {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#FF3333] font-bold text-sm uppercase tracking-widest">Próximos Pasos</span>
          <h2 className="text-3xl sm:text-4xl font-black mt-3">
            Hacé Esto{" "}
            <span className="text-[#FF3333]">Ahora Mismo</span>
          </h2>
          <p className="text-zinc-400 text-lg mt-4">
            Seguí estos 4 pasos para que todo salga perfecto el día de la llamada.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map(({ number, icon, title, desc, action, highlight }) => (
            <div
              key={number}
              className={`relative flex gap-6 p-6 rounded-2xl border transition-all ${
                highlight
                  ? "bg-[#FF3333]/5 border-[#FF3333]/40"
                  : "bg-black border-zinc-800"
              }`}
            >
              {/* Number + icon */}
              <div className="shrink-0 flex flex-col items-center gap-2">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-lg ${
                  highlight ? "bg-[#FF3333] text-white" : "bg-zinc-900 text-[#FF3333] border border-zinc-800"
                }`}>
                  {number}
                </div>
                <div className={highlight ? "text-[#FF3333]" : "text-zinc-500"}>
                  {icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="font-black text-xl mb-2">{title}</h3>
                <p className="text-zinc-400 leading-relaxed mb-3">{desc}</p>
                <div className={`inline-flex items-center gap-2 text-sm font-bold ${
                  highlight ? "text-[#FF3333]" : "text-zinc-500"
                }`}>
                  <span>→</span>
                  <span>{action}</span>
                </div>
              </div>

              {highlight && (
                <div className="absolute top-4 right-4 bg-[#FF3333] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  Importante
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
