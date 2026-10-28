import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { CATERING_PACKAGES } from "../data/cateringData";
import { Flame, Users, Calendar, Sparkles, Check, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const formatPrice = (price) => `$${price.toLocaleString("es-CL")}`;

export default function Calculator({ selectedPackageId, onSelectPackage }) {
  const [selectedPlanId, setSelectedPlanId] = useState(selectedPackageId || "pizza-6");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [comments, setComments] = useState("");

  useEffect(() => {
    if (selectedPackageId) setSelectedPlanId(selectedPackageId);
  }, [selectedPackageId]);

  const currentPlan = CATERING_PACKAGES.find((plan) => plan.id === selectedPlanId) || CATERING_PACKAGES[0];

  const handleSendWhatsApp = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#F6CE6E", "#D94A26", "#7298D7", "#D0B087"],
    });

    const details = [
      "Hola ComeTocino! 🔥",
      "",
      "Me gustaría cotizar el servicio de *Pizza Catering en Vivo*:",
      "",
      `*Plan:* ${currentPlan.name}`,
      `*Pizzas:* ${currentPlan.pizzaCount} pizzas horneadas de ${currentPlan.diameterCm} cm`,
      `*Rendimiento aproximado:* ${currentPlan.servingsMin}–${currentPlan.servingsMax} personas`,
      `*Valor del paquete:* ${formatPrice(currentPlan.price)} CLP`,
      "*Servicio a la mesa:* no incluido; agradecería cotizarlo como adicional si está disponible.",
      date ? `*Fecha tentativa:* ${date}` : "",
      location ? `*Comuna/Lugar:* ${location}` : "",
      comments ? `*Notas:* ${comments}` : "",
      "",
      "¿Tienen disponibilidad en su calendario? ¡Muchas gracias!",
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/56949869112?text=${encodeURIComponent(details)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="cotizador" className="py-24 bg-[#FAF6F0] relative overflow-hidden border-t border-craft-300">
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cometoYellow/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-craft-400/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-craft-200 text-craft-900 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cometoYellow-dark" />
              <span>Planes de Pizza Catering</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-charcoal mb-4 tracking-tight">
              Elige el plan para tu evento
            </h2>
            <p className="text-base sm:text-lg text-charcoal/70">
              Cada plan tiene un precio fijo e incluye pizzas de 32 cm horneadas en vivo. El rendimiento de personas es aproximado.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-flour rounded-3xl p-6 sm:p-10 border border-craft-300 shadow-warm">
            <div className="mb-8">
              <label className="block text-sm font-extrabold text-charcoal uppercase tracking-wider mb-3">
                Elige un plan
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {CATERING_PACKAGES.map((pkg) => {
                  const isSelected = selectedPlanId === pkg.id;
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => {
                        setSelectedPlanId(pkg.id);
                        onSelectPackage?.(pkg.id);
                      }}
                      className={`p-4 rounded-2xl text-left border-2 transition-all flex flex-col justify-between ${isSelected ? "border-charcoal bg-craft-100 shadow-warm" : "border-craft-300 bg-flour hover:border-craft-400 hover:bg-craft-50"}`}
                    >
                      <div>
                        {pkg.popular && <span className="text-[10px] font-black uppercase tracking-wider bg-cometoYellow px-2 py-0.5 rounded-full text-charcoal inline-block mb-1.5">Más elegido</span>}
                        <h4 className="text-sm font-bold text-charcoal leading-snug">{pkg.name}</h4>
                        <span className="text-xs text-charcoal/60">{pkg.pizzaCount} pizzas · {pkg.diameterCm} cm</span>
                      </div>
                      <div className="mt-3 pt-2 border-t border-craft-200">
                        <span className="text-base font-extrabold text-charcoal font-serif">{formatPrice(pkg.price)}</span>
                        <span className="text-[11px] text-charcoal/60 block">por paquete · {pkg.servingsMin}–{pkg.servingsMax} personas aprox.</span>
                      </div>
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-charcoal/60 mt-3">Estimación basada en 8 porciones por pizza y 2–3 porciones por persona. El consumo real puede variar.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-xs font-extrabold text-charcoal uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-craft-700" /> Fecha tentativa
                </label>
                <input type="date" value={date} onChange={(event) => setDate(event.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-craft-300 bg-[#FAF6F0] text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal" />
              </div>
              <div>
                <label className="block text-xs font-extrabold text-charcoal uppercase tracking-wider mb-2">Comuna o ciudad del evento</label>
                <input type="text" placeholder="Ej: Mariquina, Valdivia, Máfil..." value={location} onChange={(event) => setLocation(event.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-craft-300 bg-[#FAF6F0] text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold text-charcoal uppercase tracking-wider mb-2">¿Algún requerimiento especial? (Opcional)</label>
              <textarea rows="2" placeholder="Preferencias de variedades, horario u otros detalles..." value={comments} onChange={(event) => setComments(event.target.value)} className="w-full px-4 py-2 rounded-xl border border-craft-300 bg-[#FAF6F0] text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal resize-none" />
            </div>
          </div>

          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-charcoal text-flour rounded-3xl p-6 sm:p-8 shadow-warm-lg border-2 border-craft-400 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-cometoRed/25 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-cometoYellow/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center justify-between border-b border-craft-800 pb-4 mb-6">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-extrabold text-cometoYellow">Resumen del plan</span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-flour">{currentPlan.name}</h3>
                  </div>
                  <span className="w-10 h-10 rounded-xl bg-craft-400/20 border border-craft-400/40 flex items-center justify-center text-cometoYellow"><Flame className="w-5 h-5" /></span>
                </div>

                <div className="space-y-3 mb-6 text-xs sm:text-sm">
                  <div className="flex justify-between items-center text-flour/80"><span>Pizzas horneadas:</span><strong className="text-flour">{currentPlan.pizzaCount} de {currentPlan.diameterCm} cm</strong></div>
                  <div className="flex justify-between items-center text-flour/80"><span>Rendimiento estimado:</span><strong className="text-flour">{currentPlan.servingsMin}–{currentPlan.servingsMax} personas</strong></div>
                  <div className="flex justify-between items-center text-flour/80"><span>Preparación y horneado:</span><strong className="text-flour">En vivo</strong></div>
                </div>

                <div className="bg-flour/10 backdrop-blur-sm rounded-2xl p-5 border border-flour/15 mb-5 text-center">
                  <p className="text-xs uppercase font-extrabold text-craft-300 tracking-wider mb-1">Precio fijo del paquete</p>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-flour tracking-tight">
                    {formatPrice(currentPlan.price)}
                    <span className="text-xs font-normal text-flour/60 block mt-0.5">pesos chilenos</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-[11px] text-flour/75">
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-cometoYellow shrink-0" /><span>Producción de las pizzas, packaging y energía incluidos.</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-cometoYellow shrink-0" /><span>Incluye traslado y costos variables considerados para el servicio.</span></div>
                  <div className="flex items-start gap-2"><Check className="w-4 h-4 text-cometoYellow shrink-0" /><span>Maestro pizzero, horno profesional y masa fermentada por 48 horas.</span></div>
                  <div className="flex items-start gap-2"><Users className="w-4 h-4 text-cometoYellow shrink-0" /><span>Servicio a la mesa opcional, cotizado aparte según asistentes; referencia desde $50.000 por mesero/turno.</span></div>
                </div>

                <button onClick={handleSendWhatsApp} className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-cometoYellow via-cometoYellow-amber to-cometoYellow text-charcoal-black font-extrabold text-sm sm:text-base shadow-glow-yellow hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2.5 group">
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Consultar disponibilidad por WhatsApp</span>
                </button>
                <p className="text-[11px] text-center text-flour/60 mt-3 font-medium">La cantidad de comensales es una referencia; coordinaremos los detalles del evento por WhatsApp.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
