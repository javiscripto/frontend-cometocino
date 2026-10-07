import React from "react";
import { CATERING_PACKAGES } from "../data/cateringData";
import { Check, Star, ArrowRight, Flame } from "lucide-react";
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
              Planes para Cada Celebración
            </h2>
            <p className="text-base sm:text-xl text-charcoal/70">
              Tarifas transparentes por persona con todos los costos de insumos
              gourmet, maestros pizzeros en vivo, vajilla compostable y montaje
              incluidos.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Packages Cards with Scroll Animations */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
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
                      {pkg.recommendedFor}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-black text-charcoal mt-1.5 mb-2 leading-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed min-h-[40px]">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="p-5 rounded-2xl bg-craft-100/80 border border-craft-200 mb-8">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-5xl font-black font-serif text-charcoal tracking-tight">
                        ${pkg.pricePerPerson.toLocaleString("es-CL")}
                      </span>
                      <span className="text-xs sm:text-sm text-charcoal/70 font-bold">
                        / persona
                      </span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-craft-200 flex items-center justify-between text-xs text-craft-900 font-bold">
                      <span>⏱ {pkg.duration}</span>
                      <span>Mínimo {pkg.minGuests} pers.</span>
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

        {/* Custom Event Notice */}
        <ScrollReveal
          animation="fade-up"
          delay={200}
          className="mt-16 text-center"
        >
          <p className="text-sm sm:text-base text-charcoal/80 font-medium">
            ¿Tienes un evento con más invitados?{" "}
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
