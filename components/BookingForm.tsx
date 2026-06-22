"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const steps = [
  {
    id: "info",
    label: "Tu información",
  },
  {
    id: "local",
    label: "Tu local",
  },
  {
    id: "situacion",
    label: "Tu situación",
  },
];

export default function BookingForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    whatsapp: "",
    email: "",
    local: "",
    ciudad: "",
    tipo: "",
    facturacion: "",
    problema: "",
    intentos: "",
    compromiso: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function next() {
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function back() {
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: send form data to your CRM / GoHighLevel / Calendly webhook here
    // await fetch("/api/agendar", { method: "POST", body: JSON.stringify(form) })
    await new Promise((r) => setTimeout(r, 1000)); // simulate request
    router.push("/gracias");
  }

  return (
    <section className="min-h-screen pt-24 pb-20 bg-black">
      <div className="max-w-2xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-[#FF3333]/10 border border-[#FF3333]/30 text-[#FF3333] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-[#FF3333] rounded-full animate-pulse" />
            Cupos limitados este mes
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4">
            Agendá Tu{" "}
            <span className="text-[#FF3333]">Llamada Gratis</span>
          </h1>
          <p className="text-zinc-400 text-lg">
            Respondé estas preguntas para que podamos preparar la llamada y aprovechar cada minuto juntos.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-10 justify-center">
          {steps.map((s, i) => (
            <div key={s.id} className="flex items-center gap-2">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-black transition-all ${
                  i < step
                    ? "bg-green-500 text-white"
                    : i === step
                    ? "bg-[#FF3333] text-white"
                    : "bg-zinc-800 text-zinc-500"
                }`}
              >
                {i < step ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span className={`text-xs font-bold hidden sm:block ${i === step ? "text-white" : "text-zinc-600"}`}>
                {s.label}
              </span>
              {i < steps.length - 1 && (
                <div className={`w-8 h-px mx-1 ${i < step ? "bg-green-500" : "bg-zinc-800"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Form card */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8">

          {/* ── STEP 0: Info personal ── */}
          {step === 0 && (
            <div className="space-y-5">
              <h2 className="font-black text-xl mb-6">Contanos quién sos</h2>

              <Field label="Tu nombre completo" required>
                <input
                  name="nombre"
                  type="text"
                  required
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Ej: Carlos Méndez"
                  className={inputClass}
                />
              </Field>

              <Field label="WhatsApp" required>
                <input
                  name="whatsapp"
                  type="tel"
                  required
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="Ej: +595 981 123456"
                  className={inputClass}
                />
              </Field>

              <Field label="Email" required>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Ej: carlos@milocal.com"
                  className={inputClass}
                />
              </Field>

              <button
                type="button"
                onClick={next}
                disabled={!form.nombre || !form.whatsapp || !form.email}
                className="w-full bg-[#FF3333] hover:bg-[#CC0000] disabled:opacity-40 disabled:cursor-not-allowed text-white font-black text-lg py-4 rounded-xl transition-all mt-4 cursor-pointer"
              >
                Continuar →
              </button>
            </div>
          )}

          {/* ── STEP 1: Info del local ── */}
          {step === 1 && (
            <div className="space-y-5">
              <h2 className="font-black text-xl mb-6">Contanos sobre tu local</h2>

              <Field label="Nombre del local" required>
                <input
                  name="local"
                  type="text"
                  required
                  value={form.local}
                  onChange={handleChange}
                  placeholder="Ej: El Rancho Grill"
                  className={inputClass}
                />
              </Field>

              <Field label="Ciudad" required>
                <input
                  name="ciudad"
                  type="text"
                  required
                  value={form.ciudad}
                  onChange={handleChange}
                  placeholder="Ej: Asunción"
                  className={inputClass}
                />
              </Field>

              <Field label="Tipo de local" required>
                <select
                  name="tipo"
                  required
                  value={form.tipo}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled>Seleccioná una opción</option>
                  <option value="restaurante">Restaurante</option>
                  <option value="pizzeria">Pizzería</option>
                  <option value="hamburgueseria">Hamburguesería</option>
                  <option value="parrilla">Parrilla / BBQ</option>
                  <option value="sushi">Sushi / Comida asiática</option>
                  <option value="cafe">Café / Cafetería</option>
                  <option value="fast-casual">Fast Casual</option>
                  <option value="otro">Otro</option>
                </select>
              </Field>

              <Field label="Facturación mensual aproximada" required>
                <select
                  name="facturacion"
                  required
                  value={form.facturacion}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled>Seleccioná una opción</option>
                  <option value="menos-1300">Menos de $1,300/mes</option>
                  <option value="1300-3800">$1,300 – $3,800/mes</option>
                  <option value="3800-7700">$3,800 – $7,700/mes</option>
                  <option value="7700-12800">$7,700 – $12,800/mes</option>
                  <option value="mas-12800">Más de $12,800/mes</option>
                </select>
              </Field>

              <div className="flex gap-3 mt-4">
                <button
                  type="button"
                  onClick={back}
                  className="flex-1 border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-white font-bold py-4 rounded-xl transition-all cursor-pointer"
                >
                  ← Atrás
                </button>
                <button
                  type="button"
                  onClick={next}
                  disabled={!form.local || !form.ciudad || !form.tipo || !form.facturacion}
                  className="flex-[2] bg-[#FF3333] hover:bg-[#CC0000] disabled:opacity-40 disabled:cursor-not-allowed text-white font-black text-lg py-4 rounded-xl transition-all cursor-pointer"
                >
                  Continuar →
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 2: Situación actual ── */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="font-black text-xl mb-6">Tu situación actual</h2>

              <Field label="¿Cuál es tu mayor problema para conseguir clientes hoy?" required>
                <textarea
                  name="problema"
                  required
                  value={form.problema}
                  onChange={handleChange}
                  placeholder="Ej: Tengo muchos gastos en publicidad y no veo resultados, los martes y miércoles siempre están vacíos..."
                  rows={3}
                  className={inputClass + " resize-none"}
                />
              </Field>

              <Field label="¿Qué estrategias de marketing intentaste antes?" required>
                <select
                  name="intentos"
                  required
                  value={form.intentos}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled>Seleccioná una opción</option>
                  <option value="nada">Nunca hice marketing digital</option>
                  <option value="redes">Manejo redes sociales pero sin estrategia</option>
                  <option value="ads">Probé Facebook/Instagram Ads</option>
                  <option value="agencia">Contraté una agencia pero no funcionó</option>
                  <option value="varios">Probé varias cosas sin resultados</option>
                </select>
              </Field>

              <Field label="Si te damos el sistema, ¿estás listo para implementarlo en los próximos 30 días?" required>
                <select
                  name="compromiso"
                  required
                  value={form.compromiso}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled>Seleccioná una opción</option>
                  <option value="si-100">Sí, 100% — estoy listo para arrancar</option>
                  <option value="si-dudas">Sí, pero tengo algunas dudas primero</option>
                  <option value="quizas">Depende de lo que me digan en la llamada</option>
                  <option value="no-todavia">Todavía no, solo quiero información</option>
                </select>
              </Field>

              <div className="flex gap-3 mt-4">
                <button
                  type="button"
                  onClick={back}
                  className="flex-1 border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-white font-bold py-4 rounded-xl transition-all cursor-pointer"
                >
                  ← Atrás
                </button>
                <button
                  type="submit"
                  disabled={!form.problema || !form.intentos || !form.compromiso || loading}
                  className="cta-pulse flex-[2] bg-[#FF3333] hover:bg-[#CC0000] disabled:opacity-40 disabled:cursor-not-allowed text-white font-black text-lg py-4 rounded-xl transition-all cursor-pointer"
                >
                  {loading ? "Agendando..." : "AGENDAR MI LLAMADA →"}
                </button>
              </div>

              <p className="text-center text-zinc-600 text-xs pt-2">
                Sin compromiso · Cupos limitados · Te contactamos en menos de 24hs
              </p>
            </form>
          )}
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs text-zinc-600">
          <span>✓ Llamada gratuita</span>
          <span>✓ Sin presión de venta</span>
          <span>✓ Solo 20 minutos</span>
          <span>✓ 20+ locales activos</span>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full bg-zinc-900 border border-zinc-700 focus:border-[#FF3333] rounded-xl px-4 py-3 text-white placeholder-zinc-600 outline-none transition-colors";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-bold mb-2 text-zinc-300">
        {label}{" "}
        {required && <span className="text-[#FF3333]">*</span>}
      </label>
      {children}
    </div>
  );
}
