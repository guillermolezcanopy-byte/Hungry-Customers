"use client";

import { useRef, useState } from "react";

const stats = [
  { number: "$22.5K", label: "En ventas generadas", sub: "en 30 días" },
  { number: "92x", label: "Retorno sobre inversión", sub: "con $250 invertidos" },
  { number: "4.8★", label: "Calificación promedio", sub: "de nuestros alumnos" },
  { number: "20+", label: "Locales con el sistema activo", sub: "y creciendo" },
];

const caseStudies = [
  {
    brand: "CHEMPANADAS",
    highlight: "2,100+ Empanadas al día",
    desc: "Con Chempanadas pasamos de 5 docenas al día a más de 2,100 empanadas al día.",
    metric: "Crecimiento Masivo",
  },
  {
    brand: "MERCEDITA",
    highlight: "+200% Facturación",
    desc: "Con Merceditas aumentamos en un 200% la facturación.",
    metric: "Ventas Triplicadas",
  },
  {
    brand: "DALU",
    highlight: "+200% Facturación",
    desc: "Con Dalu aumentamos en un 200% la facturación.",
    metric: "Ventas Triplicadas",
  },
  {
    brand: "EXTREME HOUSE",
    highlight: "Récord Diario de Ventas",
    desc: "Con Extreme House posicionamos la marca en redes sociales y batimos récord diario.",
    metric: "Marca & Récord",
  },
  {
    brand: "JALISCO",
    highlight: "+100% Facturación",
    desc: "Con Jalisco aumentamos en un 100% su facturación.",
    metric: "Ventas Duplicadas",
  },
  {
    brand: "GRANJA KIM",
    highlight: "+100% Facturación",
    desc: "Con Granja Kim aumentamos en un 100% su facturación.",
    metric: "Ventas Duplicadas",
  },
  {
    brand: "LEMOZTACHE",
    highlight: "+400% Facturación",
    desc: "Con Lemoztache aumentamos en un 400% su facturación.",
    metric: "Ventas x5",
  },
  {
    brand: "LA CAMORRA",
    highlight: "100+ Pizzas al día",
    desc: "Con La Camorra pasamos de 9 pizzas al día a más de 100.",
    metric: "Crecimiento Masivo",
  },
  {
    brand: "GALETO",
    highlight: "+300% Facturación",
    desc: "Con Galeto aumentamos en un 300% la facturación.",
    metric: "Ventas Cuadruplicadas",
  },
  {
    brand: "ARIGUA RESTO BAR",
    highlight: "+1500% Facturación",
    desc: "Con Aragua aumentamos en un 1,500% la facturación.",
    metric: "Crecimiento Histórico",
  },
  {
    brand: "IL MOSTACCIO",
    highlight: "+400% & Sucursal Nueva",
    desc: "Con Il Mostaccio aumentamos en un 400% y abrió una nueva sucursal.",
    metric: "Expansión de Marca",
  },
];

export default function Results() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="resultados" className="py-20 bg-zinc-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-14 gap-6">
          <div>
            <span className="text-[#FF3333] font-bold text-sm uppercase tracking-widest">Resultados Reales</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3">
              Resultados Que <span className="text-[#FF3333]">Hablan Solos</span>
            </h2>
            <p className="text-zinc-400 text-lg mt-4 max-w-xl">
              Nuestros clientes no solo crecen: dominan sus zonas y baten récords de ventas día a día.
            </p>
          </div>
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-[#FF3333]/50 transition-all cursor-pointer shadow-lg active:scale-95"
              aria-label="Anterior"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-[#FF3333]/50 transition-all cursor-pointer shadow-lg active:scale-95"
              aria-label="Siguiente"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map(({ number, label, sub }) => (
            <div
              key={label}
              className="text-center bg-black border border-zinc-800 rounded-2xl p-6 hover:border-[#FF3333]/20 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-black text-[#FF3333] mb-2">{number}</div>
              <div className="font-bold text-sm sm:text-base">{label}</div>
              <div className="text-zinc-500 text-xs mt-1">{sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Container (Spans full screen width on mobile) */}
      <div className="relative max-w-6xl mx-auto md:px-4">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 md:px-0 py-6 scrollbar-none scroll-smooth"
        >
          {caseStudies.map(({ brand, highlight, desc, metric }, index) => {
            const isAnyActive = activeIndex !== null;
            const isActive = activeIndex === index;

            return (
              <div
                key={brand}
                className={`flex-shrink-0 w-[290px] sm:w-[340px] bg-gradient-to-br from-zinc-900 to-zinc-950 border rounded-3xl p-6 flex flex-col justify-between h-[260px] cursor-pointer snap-start transition-all duration-300 select-none
                  ${isAnyActive && !isActive ? "blur-[2px] opacity-40 scale-[0.98]" : "blur-0 opacity-100"}
                  ${isActive ? "border-[#FF3333] shadow-xl shadow-[#FF3333]/10 scale-[1.03]" : "border-zinc-800/80 hover:border-zinc-700"}
                `}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() => setActiveIndex(isActive ? null : index)}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF3333] bg-[#FF3333]/10 border border-[#FF3333]/20 rounded-full px-3 py-1">
                      {metric}
                    </span>
                    <span className="text-xs text-zinc-500 font-medium">★ Real</span>
                  </div>
                  <h3 className="font-black text-xl text-white tracking-tight mb-2">{brand}</h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">&ldquo;{desc}&rdquo;</p>
                </div>

                <div className="mt-4 pt-4 border-t border-zinc-900/60 flex items-center justify-between">
                  <span className="text-zinc-500 text-xs font-bold">RESULTADO:</span>
                  <span className="text-white font-black text-sm sm:text-base text-[#FF3333]">
                    {highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Scroll Prompt on Mobile */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-4 text-zinc-600 text-xs font-bold uppercase tracking-wider animate-pulse">
          <span>Desliza para ver más</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>

      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-none {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
}
