import React from "react";
import { ShieldCheck, Heart, Sparkles, Award, Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ProcessStory() {
  return (
    <section
      id="proceso"
      className="py-28 bg-[#F4EDE1] relative overflow-hidden border-t border-craft-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Sourdough & Large Crumb Showcase */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal animation="fade-right">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Main Large Image: Sourdough Bread / Masa Madre crumb */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-flour bg-flour group">
                  <div className="overflow-hidden">
                    <img
                      src="/images/masa-madre.jpg"
                      alt="Masa madre con alveolos y fermentación perfecta 48 horas"
                      className="w-full h-80 sm:h-[460px] object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-6 sm:p-8 bg-flour">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-black uppercase tracking-wider text-craft-800">
                        El Secreto de ComeTocino
                      </span>
                      <span className="px-3 py-1 rounded-full bg-cometoBlue-light text-cometoBlue-dark text-xs font-black tracking-wide">
                        Fermento Natural Vivo
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-black text-charcoal">
                      Corteza Tostada & Alvéolos Como Nubes
                    </h3>
                    <p className="text-sm sm:text-base text-charcoal/70 mt-2 leading-relaxed">
                      El secreto de una pizza extraordinaria está en la
                      paciencia. Sin polvos de hornear ni levaduras químicas:
                      solo harina seleccionada, agua pura y masa madre cultivada
                      con cariño.
                    </p>
                  </div>
                </div>

                {/* Floating Badge on Sourdough image */}
                <div className="absolute -top-6 -right-3 sm:-right-6 bg-charcoal text-flour p-5 rounded-3xl shadow-2xl max-w-[220px] border-2 border-craft-400">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cometoYellow animate-ping"></span>
                    <p className="text-xs font-black text-cometoYellow uppercase tracking-wider">
                      48 Horas
                    </p>
                  </div>
                  <p className="text-xs text-flour/90 font-medium leading-snug">
                    Fermentación lenta en frío que descompone el gluten y los
                    almidones complejos.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Narrative & Big Typography Pillars */}
          <div className="lg:col-span-6">
            <ScrollReveal animation="fade-left" delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-craft-300 text-craft-900 text-xs font-extrabold uppercase tracking-wider mb-5">
                <Sparkles className="w-3.5 h-3.5 text-craft-800" />
                <span>Nuestra Filosofía Gastronómica</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-charcoal leading-[1.06] mb-6 tracking-tight">
                ¿Por qué nuestra pizza cae tan bien y no inflama?
              </h2>

              <p className="text-base sm:text-xl text-charcoal/80 leading-relaxed mb-8">
                En muchas ocaciones la pizza de grandes cadenas deja una
                sensacion de pesadez e indigestión. En{" "}
                <strong className="text-charcoal font-black">ComeTocino</strong>{" "}
                cambiamos las reglas: el proceso de predigestión de nuestra masa
                madre logra una pizza súper liviana, crujiente y fácil de
                digerir.
              </p>
            </ScrollReveal>

            {/* Pillars list */}
            <div className="space-y-4">
              <ScrollReveal animation="fade-up" delay={200}>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-flour border border-craft-300/80 shadow-warm hover:border-craft-400 transition-all hover:scale-101">
                  <div className="w-12 h-12 rounded-2xl bg-cometoYellow/40 text-charcoal flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-cometoYellow-dark" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-charcoal mb-1">
                      Cero Sensación de Pesadez
                    </h3>
                    <p className="text-sm text-charcoal/70 leading-relaxed">
                      Las bacterias lácticas naturales predigieren los
                      carbohidratos durante 48 horas. Tus invitados pueden comer
                      cuantas porciones quieran y sin molestias.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={300}>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-flour border border-craft-300/80 shadow-warm hover:border-craft-400 transition-all hover:scale-101">
                  <div className="w-12 h-12 rounded-2xl bg-cometoBlue/25 text-cometoBlue-dark flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Heart className="w-6 h-6 text-cometoBlue-dark" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-charcoal mb-1">
                      Ingredientes Nobles de Temporada
                    </h3>
                    <p className="text-sm text-charcoal/70 leading-relaxed">
                      Salsa rústica con tomates de maduración perfecta, albahaca
                      tierna fresca, fior di latte fundente y tocinos ahumados
                      de primera calidad sin rellenos industriales.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={400}>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-flour border border-craft-300/80 shadow-warm hover:border-craft-400 transition-all hover:scale-101">
                  <div className="w-12 h-12 rounded-2xl bg-craft-300 text-craft-900 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Award className="w-6 h-6 text-craft-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-charcoal mb-1">
                      Horneado Napolitano a 450°C
                    </h3>
                    <p className="text-sm text-charcoal/70 leading-relaxed">
                      El choque térmico a altísima temperatura carameliza los
                      azúcares naturales de la harina en escasos 90 segundos,
                      creando las clásicas motas de leopardo y borde aereado de
                      la alta pizzería.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
