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
    logo: "/chempanadas-logo.jpeg",
    highlight: "2,100+ Empanadas al día",
    desc: "Con Chempanadas pasamos de 5 docenas al día a más de 2,100 empanadas al día.",
    metric: "Crecimiento Masivo",
    proofSrc: "/proof-1.jpeg",
    isBlur: false,
  },
  {
    brand: "MERCEDITA",
    highlight: "+200% Facturación",
    desc: "Con Merceditas aumentamos en un 200% la facturación.",
    metric: "Ventas Triplicadas",
    proofSrc: "/proof-2.jpeg",
    isBlur: false,
  },
  {
    brand: "DALU",
    highlight: "+200% Facturación",
    desc: "Con Dalu aumentamos en un 200% la facturación.",
    metric: "Ventas Triplicadas",
    proofSrc: "/proof-1.jpeg",
    isBlur: true,
  },
  {
    brand: "EXTREME HOUSE",
    highlight: "Récord Diario de Ventas",
    desc: "Con Extreme House posicionamos la marca en redes sociales y batimos récord diario.",
    metric: "Marca & Récord",
    proofSrc: "/proof-2.jpeg",
    isBlur: true,
  },
  {
    brand: "JALISCO",
    highlight: "+100% Facturación",
    desc: "Con Jalisco aumentamos en un 100% su facturación.",
    metric: "Ventas Duplicadas",
    proofSrc: "/proof-1.jpeg",
    isBlur: true,
  },
  {
    brand: "GRANJA KIM",
    highlight: "+100% Facturación",
    desc: "Con Granja Kim aumentamos en un 100% su facturación.",
    metric: "Ventas Duplicadas",
    proofSrc: "/proof-2.jpeg",
    isBlur: true,
  },
  {
    brand: "LEMOZTACHE",
    highlight: "+400% Facturación",
    desc: "Con Lemoztache aumentamos en un 400% su facturación.",
    metric: "Ventas x5",
    proofSrc: "/proof-1.jpeg",
    isBlur: true,
  },
  {
    brand: "LA CAMORRA",
    highlight: "100+ Pizzas al día",
    desc: "Con La Camorra pasamos de 9 pizzas al día a más de 100.",
    metric: "Crecimiento Masivo",
    proofSrc: "/proof-2.jpeg",
    isBlur: true,
  },
  {
    brand: "GALETO",
    highlight: "+300% Facturación",
    desc: "Con Galeto aumentamos en un 300% la facturación.",
    metric: "Ventas Cuadruplicadas",
    proofSrc: "/proof-1.jpeg",
    isBlur: true,
  },
  {
    brand: "ARIGUA RESTO BAR",
    highlight: "+1500% Facturación",
    desc: "Con Aragua aumentamos en un 1,500% la facturación.",
    metric: "Crecimiento Histórico",
    proofSrc: "/proof-2.jpeg",
    isBlur: true,
  },
  {
    brand: "IL MOSTACCIO",
    highlight: "+400% & Sucursal Nueva",
    desc: "Con Il Mostaccio aumentamos en un 400% y abrió una nueva sucursal.",
    metric: "Expansión de Marca",
    proofSrc: "/proof-1.jpeg",
    isBlur: true,
  },
  {
    brand: "CRIOLLO",
    highlight: "Ventas en Alza",
    desc: "Con Criollo reestructuramos el menú y optimizamos las ventas semanales.",
    metric: "Rentabilidad",
    proofSrc: "/proof-2.jpeg",
    isBlur: true,
  },
  {
    brand: "SCALA TASTY",
    highlight: "Atracción de Clientes",
    desc: "Con Scala Tasty lanzamos campañas y superamos el promedio mensual de visitas.",
    metric: "Tráfico Local",
    proofSrc: "/proof-1.jpeg",
    isBlur: true,
  },
  {
    brand: "KOKE",
    highlight: "Consolidación Digital",
    desc: "Con Koke posicionamos el delivery en las principales zonas de la ciudad.",
    metric: "Delivery",
    proofSrc: "/proof-2.jpeg",
    isBlur: true,
  },
  {
    brand: "BILLIE BURGER",
    highlight: "Lanzamiento Exitoso",
    desc: "Con Billie Burger implementamos el embudo de ofertas y llenamos el salón en la inauguración.",
    metric: "Inauguración",
    proofSrc: "/proof-1.jpeg",
    isBlur: true,
  },
  {
    isTeaser: true,
    brand: "+17 LOCALES MÁS",
    highlight: "Resultados en Vivo",
    desc: "Por razones de confidencialidad y para proteger los datos financieros de los dueños, las capturas de chats y facturación de otros 17 locales gastronómicos solo las mostramos en vivo en la llamada.",
    metric: "Teaser",
  },
];

export default function Results() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealedCards, setRevealedCards] = useState<Record<number, boolean>>({});

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

  const toggleReveal = (index: number) => {
    setRevealedCards((prev) => ({ ...prev, [index]: !prev[index] }));
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
    <section id="resultados" className="py-20 bg-zinc-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
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
        <div className="relative max-w-3xl mx-auto px-1 sm:px-4">
          
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
                const isTeaser = study.isTeaser;
                const isRevealed = !!revealedCards[index];

                return (
                  <div key={study.brand} className="w-full flex-shrink-0 flex flex-col justify-between min-h-[500px]">
                    {isTeaser ? (
                      /* TEASER CARD */
                      <div className="flex flex-col items-center justify-center text-center h-full py-10 px-4">
                        <div className="w-20 h-20 rounded-full bg-[#FF3333]/10 border border-[#FF3333]/20 flex items-center justify-center mb-6">
                          <svg className="w-10 h-10 text-[#FF3333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF3333] bg-[#FF3333]/10 border border-[#FF3333]/20 rounded-full px-3 py-1 mb-4">
                          {study.metric}
                        </span>
                        <h3 className="font-black text-3xl text-white tracking-tight mb-4">{study.brand}</h3>
                        <p className="text-zinc-300 text-base leading-relaxed max-w-lg mb-8">
                          {study.desc}
                        </p>
                        <a
                          href="/agendar"
                          className="cta-pulse bg-[#FF3333] hover:bg-[#CC0000] text-white font-black text-lg px-10 py-4 rounded-xl transition-all shadow-xl shadow-[#FF3333]/20 active:scale-95 cursor-pointer"
                        >
                          AGENDAR LLAMADA Y VER PRUEBAS →
                        </a>
                      </div>
                    ) : (
                      /* STANDARD CASE STUDY CARD */
                      <div className="space-y-6">
                        {/* Header info */}
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4">
                            {renderLogo(study.logo, study.brand)}
                            <div>
                              <h3 className="font-black text-xl text-white tracking-tight">{study.brand}</h3>
                              <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF3333] bg-[#FF3333]/10 border border-[#FF3333]/20 rounded-full px-2.5 py-0.5 mt-1 inline-block">
                                {study.metric}
                              </span>
                            </div>
                          </div>
                          <span className="text-[#FF3333] font-black text-lg sm:text-xl bg-[#FF3333]/5 border border-[#FF3333]/20 rounded-xl px-4 py-2 shrink-0">
                            {study.highlight}
                          </span>
                        </div>

                        {/* Testimonial Quote */}
                        <blockquote className="text-lg sm:text-xl font-bold text-zinc-200 italic leading-relaxed border-l-2 border-[#FF3333] pl-4">
                          &ldquo;{study.desc}&rdquo;
                        </blockquote>

                        {/* Curtain Proof Component */}
                        <div 
                          className="relative w-full h-[320px] sm:h-[420px] bg-black rounded-2xl border border-zinc-800 overflow-hidden group cursor-pointer"
                          onClick={() => !isRevealed && toggleReveal(index)}
                        >
                          {/* Revealed Content (Screenshot) */}
                          <div className="absolute inset-0 flex items-center justify-center bg-zinc-950">
                            <img
                              src={study.proofSrc}
                              alt={`Captura de prueba para ${study.brand}`}
                              className={`w-full h-full object-contain transition-all duration-500 ${study.isBlur ? 'blur-lg opacity-30 select-none pointer-events-none' : ''}`}
                            />
                            {study.isBlur && (
                              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black/50 backdrop-blur-xs z-10">
                                <svg className="w-10 h-10 text-[#FF3333] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <h4 className="text-white font-black text-lg mb-1">Prueba Protegida</h4>
                                <p className="text-zinc-400 text-xs max-w-xs leading-relaxed">
                                  Por confidencialidad de este local, mostramos la captura de facturación completa y real en nuestra llamada de diagnóstico.
                                </p>
                              </div>
                            )}
                            
                            {/* Ocultar button overlay */}
                            {isRevealed && (
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleReveal(index);
                                }}
                                className="absolute bottom-4 right-4 bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-700/80 rounded-full px-4 py-2 text-xs font-bold transition-all shadow-lg active:scale-95 cursor-pointer z-20 flex items-center gap-1.5"
                              >
                                <span>🔒 Ocultar prueba</span>
                              </button>
                            )}
                          </div>

                          {/* Curtain Left Panel */}
                          <div 
                            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-zinc-900 to-zinc-950 border-r border-zinc-800/80 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] z-10 origin-left"
                            style={{ transform: isRevealed ? 'translateX(-100%)' : 'translateX(0)' }}
                          />
                          {/* Curtain Right Panel */}
                          <div 
                            className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-900 to-zinc-950 border-l border-zinc-800/80 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] z-10 origin-right"
                            style={{ transform: isRevealed ? 'translateX(100%)' : 'translateX(0)' }}
                          />

                          {/* Closed curtain trigger layout */}
                          {!isRevealed && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-15 select-none pointer-events-none">
                              <div className="w-16 h-16 rounded-full bg-[#FF3333]/15 border border-[#FF3333]/30 flex items-center justify-center mb-4 animate-pulse">
                                <svg className="w-8 h-8 text-[#FF3333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                              </div>
                              <h4 className="text-white font-black text-lg mb-2">Comprobante Real de Ventas</h4>
                              <p className="text-zinc-400 text-sm max-w-sm mb-5 leading-relaxed">
                                Hacé clic abajo para abrir la cortina y ver la prueba real de este caso.
                              </p>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleReveal(index);
                                }}
                                className="pointer-events-auto bg-[#FF3333] hover:bg-[#CC0000] text-white font-black text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-[#FF3333]/20 active:scale-95 cursor-pointer flex items-center gap-2"
                              >
                                <span>🔓 REVELAR PRUEBA REAL</span>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
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

          {/* Slide dots and counter */}
          <div className="mt-8 flex flex-col items-center gap-4">
            {/* Dots */}
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

            {/* Slider Counter */}
            <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
              Caso {currentIndex + 1} de {caseStudies.length}
            </span>
          </div>
        </div>

        {/* Persistent Teaser Banner */}
        <div className="mt-14 max-w-2xl mx-auto bg-gradient-to-r from-[#FF3333]/10 to-transparent border border-[#FF3333]/20 rounded-2xl p-5 flex items-center justify-between gap-6 flex-col sm:flex-row text-center sm:text-left">
          <div>
            <h4 className="text-white font-black text-lg">¿Querés ver más casos?</h4>
            <p className="text-zinc-400 text-sm mt-1">
              Tenemos capturas e informes completos de **17 locales gastronómicos más** que mantendremos privados.
            </p>
          </div>
          <a
            href="/agendar"
            className="cta-pulse bg-[#FF3333] hover:bg-[#CC0000] text-white font-black text-sm px-6 py-3 rounded-xl transition-all shrink-0 cursor-pointer shadow-lg shadow-[#FF3333]/15 text-center"
          >
            VER RESTANTES EN LLAMADA →
          </a>
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
