"use client";
import { useState } from "react";

const faqs = [
  {
    q: "¿Necesito conocimientos técnicos para aplicar esto?",
    a: "Para nada. El curso está diseñado para dueños de locales, no para marketers. Te mostramos exactamente qué hacer, cómo grabarlo con tu celular, y cómo publicarlo. Si podés usar Instagram, podés aplicar este sistema.",
  },
  {
    q: "¿Qué tan rápido veo resultados?",
    a: "La mayoría de los alumnos ven su primera campaña activa dentro de la primera semana. Los resultados en ventas empiezan a aparecer entre los días 7 y 30. La garantía te cubre los primeros 30 días completos.",
  },
  {
    q: "¿Funciona para cualquier tipo de local gastronómico?",
    a: "Sí — pizzerías, sushi, parrillas, fast casual, cafeterías, hamburgueserías. El sistema es adaptable a cualquier propuesta gastronómica. Lo que cambia es la oferta, el guion y el estilo visual — todo eso lo aprendés en el curso.",
  },
  {
    q: "¿Esto es un pago único o tiene mensualidad?",
    a: "Es un único pago de $499. Sin cuotas mensuales, sin costos ocultos, sin sorpresas. Pagás una vez y tenés acceso de por vida al contenido y todas sus actualizaciones.",
  },
  {
    q: "¿Qué pasa si lo aplico y no funciona?",
    a: "Te devolvemos el 100% del dinero dentro de los 30 días. Sin preguntas, sin procesos complicados. Estamos tan seguros de los resultados que asumimos todo el riesgo nosotros.",
  },
  {
    q: "¿Cuánto necesito invertir en publicidad además del curso?",
    a: "El módulo de anuncios está diseñado específicamente para presupuestos pequeños. Generamos $22,500 en ventas con solo $250 invertidos en ads. Empezás con poco y escalás cuando ves resultados.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-zinc-800 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-zinc-900/50 transition-colors cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-bold text-base">{q}</span>
        <span className={`text-[#FF3333] font-black text-xl shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-zinc-400 leading-relaxed text-sm border-t border-zinc-800 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#FF3333] font-bold text-sm uppercase tracking-widest">Preguntas Frecuentes</span>
          <h2 className="text-3xl sm:text-4xl font-black mt-3">
            ¿Tenés Dudas? Las{" "}
            <span className="text-[#FF3333]">Respondemos</span>
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <FAQItem key={q} q={q} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
