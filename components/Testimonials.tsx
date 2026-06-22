const testimonials = [
  {
    name: "Tony Ricci",
    role: "Dueño, Ricci's Italian Kitchen",
    stars: 5,
    text: "En 3 semanas ya tenía 40 clientes nuevos solo con el módulo de oferta. Los guiones son una locura — la gente realmente compra. Pasé de martes vacíos a lleno completo en la semana 6.",
    revenue: "+28M gs/mes",
    avatar: "TR",
  },
  {
    name: "Jennifer Woo",
    role: "Dueña, Golden Dragon Restaurant",
    stars: 5,
    text: "Era escéptica de gastar en otro curso. Pero esto se pagó solo en la primera semana. Mis reseñas en Google pasaron de 3.4 a 4.7 estrellas en 45 días. Ahora los clientes me eligen a mí.",
    revenue: "+41M gs/mes",
    avatar: "JW",
  },
  {
    name: "Carlos Méndez",
    role: "Dueño, El Rancho Grill",
    stars: 5,
    text: "Lo que más me sorprendió fue el módulo de tomas. Nunca pensé que con mi celular podía lograr eso. Mis reels ahora tienen 10 veces más alcance y las ventas subieron 180% desde que arrancué.",
    revenue: "+35M gs/mes",
    avatar: "CM",
  },
  {
    name: "Sarah Kim",
    role: "Dueña, Seoul Garden",
    stars: 5,
    text: "Probé todo — descuentos en apps, publicidad en redes, volantes. Nada funcionó como este sistema. La estructura de contenido sola ya justifica el precio del curso.",
    revenue: "+22M gs/mes",
    avatar: "SK",
  },
  {
    name: "Mike Thompson",
    role: "Dueño, The Smokehouse BBQ",
    stars: 5,
    text: "Mi temporada baja del año pasado fue devastadora. Este año, con el sistema activo, mi 'temporada baja' fue mi mejor trimestre. Es un antes y después total.",
    revenue: "+53M gs/mes",
    avatar: "MT",
  },
  {
    name: "Ana Pereira",
    role: "Dueña, Café São Paulo",
    stars: 5,
    text: "El módulo de anuncios es oro puro. Con 1.900.000 invertidos generamos 176 millones en ventas. El ROI es algo que nunca había visto antes en mi negocio.",
    revenue: "+31M gs/mes",
    avatar: "AP",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#FF3333] font-bold text-sm uppercase tracking-widest">Prueba Social</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3">
            Dueños Reales,{" "}
            <span className="text-[#FF3333]">Resultados Reales</span>
          </h2>
          <p className="text-zinc-400 text-lg mt-4">
            No te creás solo a nosotros — esto es lo que dicen quienes ya lo aplicaron
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, stars, text, revenue, avatar }) => (
            <div
              key={name}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-[#FF3333]/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: stars }).map((_, i) => (
                  <span key={i} className="text-[#FF3333] text-lg">★</span>
                ))}
              </div>

              <p className="text-zinc-300 leading-relaxed mb-6 flex-1 text-sm">&ldquo;{text}&rdquo;</p>

              <div className="bg-[#FF3333]/10 border border-[#FF3333]/30 rounded-lg px-3 py-2 mb-4 text-center">
                <span className="text-[#FF3333] font-black">{revenue}</span>
                <span className="text-zinc-500 text-xs ml-2">extra</span>
              </div>

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
