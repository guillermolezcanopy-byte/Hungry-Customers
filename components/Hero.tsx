"use client";
import { useEffect, useRef, useState } from "react";

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-black">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-35"
        src="/parrilla.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF3333]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF3333]/3 rounded-full blur-3xl pointer-events-none" />


      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        {/* Eyebrow badge */}
        <div className="flex justify-center md:justify-start mb-6">
          <span className="inline-flex items-center gap-2 bg-[#FF3333]/10 border border-[#FF3333]/30 text-[#FF3333] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
            <span className="w-2 h-2 bg-[#FF3333] rounded-full animate-pulse" />
            Curso para dueños de locales gastronómicos
          </span>
        </div>

        <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6">
              El Sistema Que Llena Tu{" "}
              <span className="text-[#FF3333]">Local</span> de{" "}
              <span className="text-[#FF3333]">Clientes</span>{" "}
              <span className="underline decoration-[#FF3333] decoration-4">Todas las Semanas</span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed mb-8 max-w-xl mx-auto">
              Aprende el sistema exacto que usamos para vender <strong className="text-white">200.000usd en 30 días</strong> - y replicarlo a tu local gastronómico
            </p>

            {/* Mini stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              {[
                { num: 20, suffix: "+", label: "Locales activos" },
                { num: 200, suffix: "K USD", label: "En ventas generadas" },
                { num: 30, suffix: " días", label: "Para ver resultados" },
              ].map(({ num, suffix, label }) => (
                <div key={label} className="text-center">
                  <div className="text-3xl font-black text-[#FF3333]">
                    <CountUp end={num} suffix={suffix} />
                  </div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/agendar"
                className="cta-pulse bg-[#FF3333] hover:bg-[#CC0000] text-white font-black text-lg px-8 py-4 rounded-xl transition-all duration-200 cursor-pointer text-center"
              >
                AGENDAR MI LLAMADA GRATIS →
              </a>
              <a
                href="#como-funciona"
                className="border border-zinc-600 hover:border-zinc-400 text-zinc-300 hover:text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 cursor-pointer text-center"
              >
                Ver cómo funciona
              </a>
            </div>

            <p className="text-xs text-zinc-500 mt-4">
              ✓ Llamada gratis sin compromiso &nbsp;·&nbsp; ✓ Cupos limitados &nbsp;·&nbsp; ✓ Solo 20 min
            </p>
        </div>
      </div>
    </section>
  );
}
