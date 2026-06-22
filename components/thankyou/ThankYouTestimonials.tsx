const testimonials = [
  {
    name: "Tony Ricci",
    role: "Ricci's Italian Kitchen",
    stars: 5,
    text: "La llamada duró 25 minutos y salí con un plan de acción claro. Nunca pensé que en tan poco tiempo me pudieran mostrar exactamente qué estaba fallando en mi local y cómo arreglarlo.",
    avatar: "TR",
  },
  {
    name: "Jennifer Woo",
    role: "Golden Dragon Restaurant",
    stars: 5,
    text: "Entré escéptica a la llamada. Salí convencida. Me mostraron casos reales de locales parecidos al mío y los números no mentían. El equipo es directo y sin vueltas.",
    avatar: "JW",
  },
  {
    name: "Carlos Méndez",
    role: "El Rancho Grill",
    stars: 5,
    text: "Lo que más me gustó fue que no me vendieron aire. Me explicaron exactamente el sistema, cómo funciona para mi tipo de local, y cuándo iba a ver los primeros resultados. Cumplieron todo.",
    avatar: "CM",
  },
];

export default function ThankYouTestimonials() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#FF3333] font-bold text-sm uppercase tracking-widest">Lo Que Dicen Después de la Llamada</span>
          <h2 className="text-3xl sm:text-4xl font-black mt-3">
            Así la Vivieron{" "}
            <span className="text-[#FF3333]">Otros Dueños</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, stars, text, avatar }) => (
            <div
              key={name}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: stars }).map((_, i) => (
                  <span key={i} className="text-[#FF3333]">★</span>
                ))}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed flex-1 mb-6">&ldquo;{text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FF3333] rounded-full flex items-center justify-center font-black text-sm shrink-0">
                  {avatar}
                </div>
                <div>
                  <div className="font-bold text-sm">{name}</div>
                  <div className="text-zinc-500 text-xs">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
