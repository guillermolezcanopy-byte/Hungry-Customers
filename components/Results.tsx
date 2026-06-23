"use client";

import { useState } from "react";

const stats = [
  { number: "$22.5K", label: "En ventas generadas", sub: "en 30 días" },
  { number: "92x", label: "Retorno sobre inversión", sub: "con $250 invertidos" },
  { number: "4.8★", label: "Calificación promedio", sub: "de nuestros alumnos" },
  { number: "20+", label: "Locales con el sistema activo", sub: "y creciendo" },
];

const caseStudies = [
  {
    brand: "CHEMPANADAS",
    logo: "/chempanadas-logo.jpeg",
    highlight: "2,100+ Empanadas al día",
    desc: "Con Chempanadas pasamos de 5 docenas al día a más de 2,100 empanadas al día.",
    metric: "Crecimiento Masivo",
    tag: "VENTAS DIARIAS",
  },
  {
    brand: "MERCEDITA",
    highlight: "+200% Facturación",
    desc: "Con Merceditas aumentamos en un 200% la facturación.",
    metric: "Ventas Triplicadas",
    tag: "CRECIMIENTO",
  },
  {
    brand: "DALU",
    highlight: "+200% Facturación",
    desc: "Con Dalu aumentamos en un 200% la facturación.",
    metric: "Ventas Triplicadas",
    tag: "CRECIMIENTO",
  },
  {
    brand: "EXTREME HOUSE",
    highlight: "Récord Diario de Ventas",
    desc: "Con Extreme House posicionamos la marca en redes sociales y batimos récord diario.",
    metric: "Marca & Récord",
    tag: "POSICIONAMIENTO",
  },
  {
    brand: "JALISCO",
    highlight: "+100% Facturación",
    desc: "Con Jalisco aumentamos en un 100% su facturación.",
    metric: "Ventas Duplicadas",
    tag: "CRECIMIENTO",
  },
  {
    brand: "GRANJA KIM",
    highlight: "+100% Facturación",
    desc: "Con Granja Kim aumentamos en un 100% su facturación.",
    metric: "Ventas Duplicadas",
    tag: "CRECIMIENTO",
  },
  {
    brand: "LEMOZTACHE",
    highlight: "+400% Facturación",
    desc: "Con Lemoztache aumentamos en un 400% su facturación.",
    metric: "Ventas x5",
    tag: "CRECIMIENTO",
  },
  {
    brand: "LA CAMORRA",
    highlight: "100+ Pizzas al día",
    desc: "Con La Camorra pasamos de 9 pizzas al día a más de 100.",
    metric: "Crecimiento Masivo",
    tag: "VENTAS DIARIAS",
  },
  {
    brand: "GALETO",
    highlight: "+300% Facturación",
    desc: "Con Galeto aumentamos en un 300% la facturación.",
    metric: "Ventas Cuadruplicadas",
    tag: "CRECIMIENTO",
  },
  {
    brand: "ARIGUA RESTO BAR",
    highlight: "+1500% Facturación",
    desc: "Con Aragua aumentamos en un 1,500% la facturación.",
    metric: "Crecimiento Histórico",
    tag: "CRECIMIENTO",
  },
  {
    brand: "IL MOSTACCIO",
    highlight: "+400% & Sucursal Nueva",
    desc: "Con Il Mostaccio aumentamos en un 400% y abrió una nueva sucursal.",
    metric: "Expansión de Marca",
    tag: "CRECIMIENTO & EXPANSIÓN",
  },
  {
    brand: "CRIOLLO",
    highlight: "Ventas en Alza",
    desc: "Con Criollo reestructuramos el menú y optimizamos las ventas semanales.",
    metric: "Rentabilidad",
    tag: "OPTIMIZACIÓN",
  },
  {
    brand: "SCALA TASTY",
    highlight: "Atracción de Clientes",
    desc: "Con Scala Tasty lanzamos campañas y superamos el promedio mensual de visitas.",
    metric: "Tráfico Local",
    tag: "TRÁFICO",
  },
  {
    brand: "KOKE",
    highlight: "Consolidación Digital",
    desc: "Con Koke posicionamos el delivery en las principales zonas de la ciudad.",
    metric: "Delivery",
    tag: "DELIVERY",
  },
  {
    brand: "BILLIE BURGER",
    highlight: "Lanzamiento Exitoso",
    desc: "Con Billie Burger implementamos el embudo de ofertas y llenamos el salón en la inauguración.",
    metric: "Inauguración",
    tag: "LLENO COMPLETO",
  },
];

export default function Results() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Swipe gesture hooks
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const renderLogo = (logo: string | undefined, brand: string) => {
    if (logo) {
      return (
        <img
          src={logo}
          alt={brand}
          className="w-14 h-14 rounded-full object-cover border border-zinc-700 shadow-md shrink-0"
        />
      );
    }
    const initials = brand.split(" ").map((w) => w[0]).join("").slice(0, 2);
    return (
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF3333] to-zinc-950 border border-[#FF3333]/30 flex items-center justify-center text-white font-black text-lg shadow-md shrink-0 uppercase">
        {initials}
      </div>
    );
  };

  return (
    <section id="resultados" className="py-20 bg-gradient-to-b from-zinc-950 via-[#120202] to-zinc-950 relative overflow-hidden">
      {/* Background ambient red glow to make it catchy */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF3333]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-[#FF3333] font-bold text-sm uppercase tracking-widest">Resultados Reales</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3">
            Resultados Que <span className="text-[#FF3333]">Hablan Solos</span>
          </h2>
          <p className="text-zinc-400 text-lg mt-4 max-w-xl mx-auto">
            Nuestros clientes no solo crecen: dominan sus zonas y baten récords de ventas día a día.
          </p>
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

        {/* Carousel Container (1 Result Per Row) */}
        <div className="relative max-w-2xl mx-auto px-1 sm:px-4">
          
          {/* Slider Counter (Bigger and above the card/logo picture) */}
          <div className="text-center mb-6">
            <span className="text-xl sm:text-2xl font-black tracking-widest text-[#FF3333] uppercase">
              Caso {currentIndex + 1} de {caseStudies.length}
            </span>
          </div>

          {/* Main slider track wrapper */}
          <div 
            className="relative overflow-hidden rounded-3xl bg-zinc-900/40 border border-zinc-800/80 p-6 sm:p-8"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {caseStudies.map((study, index) => {
                return (
                  <div key={study.brand} className="w-full flex-shrink-0 flex flex-col justify-between min-h-[340px]">
                    {/* STANDARD CASE STUDY CARD (Direct presentation) */}
                    <div className="relative w-full h-[340px] bg-zinc-950/80 border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#FF3333]/30 transition-all duration-300">
                      {/* Header */}
                      <div className="flex justify-between items-center gap-4">
                        <div className="flex items-center gap-4">
                          {renderLogo(study.logo, study.brand)}
                          <div>
                            <h4 className="font-black text-lg sm:text-xl text-white tracking-tight leading-none">{study.brand}</h4>
                            <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF3333] bg-[#FF3333]/10 border border-[#FF3333]/20 rounded-full px-2.5 py-0.5 mt-2 inline-block">
                              {study.tag || "CASO DE ÉXITO"}
                            </span>
                          </div>
                        </div>
                        <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider hidden sm:inline">
                          {study.metric}
                        </span>
                      </div>

                      {/* Main statistics display */}
                      <div className="text-center my-auto py-2">
                        <div className="text-3xl sm:text-4xl font-black text-[#FF3333] tracking-tight mb-3 drop-shadow-[0_4px_12px_rgba(255,51,51,0.15)]">
                          {study.highlight}
                        </div>
                        <p className="text-zinc-200 text-base sm:text-lg font-bold italic leading-relaxed max-w-xl mx-auto px-4">
                          &ldquo;{study.desc}&rdquo;
                        </p>
                      </div>

                      {/* Card bottom info */}
                      <div className="flex justify-between items-center text-xs text-zinc-500 pt-2 border-t border-zinc-900/60">
                        <span>✓ Caso Verificado</span>
                        <span className="sm:hidden text-[10px] font-bold text-[#FF3333] uppercase">
                          {study.metric}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute left-[-20px] sm:left-[-30px] top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-[#FF3333]/50 transition-all cursor-pointer shadow-xl active:scale-95 z-20"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute right-[-20px] sm:right-[-30px] top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-[#FF3333]/50 transition-all cursor-pointer shadow-xl active:scale-95 z-20"
            aria-label="Siguiente"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide dots */}
          <div className="mt-6 flex justify-center">
            <div className="flex gap-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-8 bg-[#FF3333]" : "w-2 bg-zinc-800 hover:bg-zinc-700"
                  }`}
                  aria-label={`Ir al caso ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
