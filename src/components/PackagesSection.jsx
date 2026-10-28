import React from "react";
import { CATERING_PACKAGES } from "../data/cateringData";
import { Check, Star, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function PackagesSection({ onSelectPackage }) {
  const handleSelect = (pkgId) => {
    if (onSelectPackage) {
      onSelectPackage(pkgId);
    }
    const elem = document.getElementById("cotizador");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="planes"
      className="py-28 bg-[#F4EDE1] relative overflow-hidden border-t border-craft-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Big Editorial Typography */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-craft-300 text-craft-900 text-xs font-extrabold uppercase tracking-wider mb-4">
              <span>Paquetes Todo Incluido</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-charcoal mb-4 tracking-tight leading-[1.05]">
              Planes de Pizza Catering para Tu Evento
            </h2>
            <p className="text-base sm:text-xl text-charcoal/70">
              Planes con precio fijo según la cantidad de pizzas horneadas. Cada pizza de 32 cm se corta en 8 porciones; el rendimiento es una referencia de 2 a 3 porciones por comensal.
            </p>
          </div>
        </ScrollReveal>

        {/* Package cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
          {CATERING_PACKAGES.map((pkg, idx) => (
            <ScrollReveal
              key={pkg.id}
              animation="fade-up"
              delay={idx * 150}
              className="h-full"
            >
              <div
                className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative h-full ${pkg.popular
                    ? "bg-flour border-2 border-cometoYellow shadow-2xl lg:-translate-y-4 ring-4 ring-cometoYellow/20"
                    : "bg-flour/90 border border-craft-300 shadow-warm hover:shadow-warm-lg hover:-translate-y-2"
                  }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-charcoal text-cometoYellow px-5 py-2 rounded-full text-xs font-black tracking-widest uppercase shadow-xl flex items-center gap-1.5 border border-cometoYellow/60">
                    <Star className="w-4 h-4 fill-cometoYellow" />
                    <span>{pkg.highlightText}</span>
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="mb-6">
                    <span className="text-xs font-black uppercase tracking-wider text-craft-700">
                      {pkg.pizzaCount} pizzas · {pkg.diameterCm} cm
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-black text-charcoal mt-1.5 mb-2 leading-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed min-h-[40px]">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-craft-100/80 border border-craft-200 mb-8 min-w-0">
                    <div className="flex min-w-0 flex-col items-start gap-1">
                      <span className="max-w-full text-[clamp(1.5rem,2.2vw,2rem)] font-black font-serif text-charcoal tracking-[-0.045em] leading-none whitespace-nowrap">
                        ${pkg.price.toLocaleString("es-CL")}
                      </span>
                      <span className="text-xs sm:text-sm text-charcoal/70 font-bold leading-tight">
                        por paquete
                      </span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-craft-200 flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1 text-xs text-craft-900 font-bold">
                      <span>Rendimiento aprox.</span>
                      <span>{pkg.servingsMin}–{pkg.servingsMax} personas</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-10">
                    <p className="text-xs font-black uppercase tracking-wider text-charcoal">
                      ¿Qué incluye este plan?
                    </p>
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm text-charcoal/80 leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleSelect(pkg.id)}
                  className={`w-full py-4 px-6 rounded-full font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-200 shadow-warm ${pkg.popular
                      ? "bg-charcoal text-flour hover:bg-craft-900 hover:scale-102 active:scale-98 shadow-glow-yellow"
                      : "bg-craft-400 text-charcoal hover:bg-craft-500 hover:scale-102 active:scale-98"
                    }`}
                >
                  <span>Seleccionar y Cotizar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={100} className="mt-12">
          <div className="grid md:grid-cols-2 gap-6 rounded-3xl bg-craft-200/60 border border-craft-300 p-6 sm:p-8 text-charcoal">
            <div>
              <h3 className="font-serif text-xl font-black mb-3">Qué estás contratando</h3>
              <p className="text-sm leading-relaxed text-charcoal/75">El valor cubre las pizzas y su producción (incluye packaging y energía), el traslado y los costos variables del evento, además de la preparación y el horneado en vivo con maestro pizzero y horno profesional.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-black mb-3">Rendimiento y extras</h3>
              <p className="text-sm leading-relaxed text-charcoal/75">La estimación considera 8 porciones por pizza y 2–3 porciones por persona; puede variar según el apetito y los demás alimentos del evento. El servicio a la mesa no está incluido: se cotiza aparte según asistentes y requiere desde $50.000 por mesero/turno.</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Custom Event Notice */}
        <ScrollReveal
          animation="fade-up"
          delay={200}
          className="mt-16 text-center"
        >
          <p className="text-sm sm:text-base text-charcoal/80 font-medium">
            ¿Necesitas una cantidad distinta de pizzas?{" "}
            <a
              href="https://wa.me/56949869112?text=Hola!%20Tengo%20un%20evento%20grande%20y%20me%20gustar%C3%ADa%20una%20propuesta%20a%20medida."
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-cometoBlue-dark underline hover:text-charcoal transition-colors ml-1"
            >
              Hablemos directamente por WhatsApp para un menú personalizado
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
