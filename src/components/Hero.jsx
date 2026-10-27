import React from "react";
import {
  Flame,
  Star,
  Sparkles,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useScrollCounter } from "../hooks/useScrollReveal";

export default function Hero() {
  const eventsCount = useScrollCounter(150, 2000, true);
  const tempCount = useScrollCounter(450, 1800, true);
  const hoursCount = useScrollCounter(48, 1500, true);

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-gradient-to-b from-[#F4EDE1] via-[#FAF6F0] to-[#FAF6F0]">
      {/* Decorative background glows based on brand palette */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-craft-400/25 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute top-36 right-4 sm:right-10 w-80 h-80 bg-cometoBlue/15 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-4 sm:left-10 w-96 h-96 bg-cometoYellow/25 blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Subtle flour texture dots */}
      <div className="absolute inset-0 bg-flour-dots opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Bold Story & Big Impact Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Mascot & Service Pill Badge */}
            <ScrollReveal animation="fade-down" delay={100}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-flour border border-craft-300 shadow-warm-sm mb-6 hover:scale-102 transition-transform">
                <img
                  src="/images/logoDante_forni.png"
                  alt="ComeTocino Mascot"
                  className="w-6 h-6 object-contain"
                />
                <span className="text-xs sm:text-sm font-bold tracking-wide text-charcoal flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cometoRed animate-pulse"></span>
                  Pizza Catering & Pizzas a Domicilio en Los Ríos
                </span>
              </div>
            </ScrollReveal>

            {/* Giant Headline */}
            <ScrollReveal animation="fade-up" delay={200}>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-black text-charcoal tracking-tight leading-[1.02] mb-6">
                Pizzas estilo napoletano <br />
                <span className="relative inline-block text-craft-900">
                  en tu propio
                  <span className="absolute bottom-2 left-0 w-full h-3.5 sm:h-5 bg-cometoYellow/45 -z-10 -rotate-1 rounded-sm"></span>
                </span>{" "}
                <span className="text-cometoRed">evento.</span>
              </h1>
            </ScrollReveal>

            {/* Subtitle with high readability */}
            <ScrollReveal animation="fade-up" delay={300}>
              <p className="text-lg sm:text-xl md:text-2xl text-charcoal/80 font-normal leading-relaxed max-w-2xl mb-8">
                Instalamos nuestros hornos profesionales en tu jardín, parcela o salón en{" "}
                <strong className="font-extrabold text-charcoal">
                  Mariquina, Valdivia y Máfil
                </strong>
                . Masa madre con{" "}
                <strong className="font-extrabold text-charcoal">
                  48 horas de fermentación
                </strong>
                , show de estirado en vivo y{" "}
                <strong className="font-extrabold text-charcoal">
                  barra libre ilimitada
                </strong>{" "}
                horneada a 450°C.
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal
              animation="fade-up"
              delay={400}
              className="w-full sm:w-auto"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
                <a
                  href="/servicios#cotizador"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 rounded-full bg-charcoal text-flour font-extrabold text-base shadow-warm-lg hover:bg-craft-900 transition-all hover:scale-105 active:scale-95 group"
                >
                  <Flame className="w-5 h-5 text-cometoYellow animate-pulse" />
                  <span>Calcular Presupuesto Online</span>
                  <ArrowRight className="w-5 h-5 text-flour/70 group-hover:translate-x-1.5 transition-transform" />
                </a>

                <a
                  href="/servicios#menu"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 sm:py-5 rounded-full bg-flour border-2 border-craft-400 text-charcoal font-bold text-base hover:bg-craft-100 hover:border-craft-500 transition-all shadow-warm-sm"
                >
                  <span>Ver Carta de Pizzas</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Live Social Proof Strip with Animated Counters */}
            <ScrollReveal animation="fade-up" delay={500} className="w-full">
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-craft-300/60 w-full max-w-xl">
                <div>
                  <div className="flex items-center gap-1 text-cometoYellow-dark mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-cometoYellow text-cometoYellow"
                      />
                    ))}
                  </div>
                  <p className="text-base sm:text-xl font-serif font-black text-charcoal">
                    +{eventsCount}
                  </p>
                  <p className="text-[11px] sm:text-xs text-charcoal/70 font-medium">
                    Eventos realizados
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1 text-cometoBlue-dark font-extrabold text-sm sm:text-base mb-1">
                    <Clock className="w-4 h-4 text-cometoBlue" />
                    <span className="text-[11px] uppercase tracking-wide">
                      Masa Viva
                    </span>
                  </div>
                  <p className="text-base sm:text-xl font-serif font-black text-charcoal">
                    {hoursCount} Horas
                  </p>
                  <p className="text-[11px] sm:text-xs text-charcoal/70 font-medium">
                    Fermentación lenta
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1 text-cometoRed font-extrabold text-sm sm:text-base mb-1">
                    <Flame className="w-4 h-4 text-cometoRed" />
                    <span className="text-[11px] uppercase tracking-wide">
                      Express
                    </span>
                  </div>
                  <p className="text-base sm:text-xl font-serif font-black text-charcoal">
                    {tempCount}°C
                  </p>
                  <p className="text-[11px] sm:text-xs text-charcoal/70 font-medium">
                    Cocción en 90 seg
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Hero Visual Showcase (Large Impact Image & Floating Elements) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <ScrollReveal
              animation="zoom-in"
              delay={250}
              className="w-full max-w-[500px]"
            >
              <div className="relative w-full aspect-square">
                {/* Outer decorative dashed ring with slow rotation */}
                <div className="absolute -inset-4 rounded-full border-2 border-dashed border-craft-400/80 animate-spin-slow"></div>

                {/* Kraft circle background plate */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-craft-300 via-craft-400 to-craft-500 shadow-2xl flex items-center justify-center overflow-hidden border-4 border-flour">
                  {/* Close-up real pizza image */}
                  <img
                    src="/images/pizza-hero.png"
                    alt="Pizza gourmet ComeTocino recién salida del horno a la leña"
                    className="w-full h-full object-cover scale-110 hover:scale-120 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-charcoal/20 pointer-events-none" />
                </div>

                {/* Steam Effect indicator */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal/95 backdrop-blur-md text-flour text-xs font-black shadow-xl border border-flour/20">
                  <span className="w-2.5 h-2.5 rounded-full bg-cometoRed animate-ping"></span>
                  <span>¡Horneada en 90 segundos!</span>
                </div>

                {/* Floating Badge 1: Mascot & Unlimited Pizza */}
                <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-flour p-4 rounded-2xl shadow-2xl border border-craft-300 flex items-center gap-3.5 animate-float">
                  <div className="w-12 h-12 rounded-xl bg-craft-200/80 flex items-center justify-center p-1.5 shadow-inner">
                    <img
                      src="/images/logoDante_forni.png"
                      alt="Mascota ComeTocino"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-black text-cometoRed">
                      Formato Catering
                    </p>
                    <p className="text-sm sm:text-base font-serif font-black text-charcoal leading-none mt-0.5">
                      pizzas a elección
                    </p>
                    <p className="text-[11px] text-charcoal/65 font-medium mt-1">
                      Tus invitados comen a gusto
                    </p>
                  </div>
                </div>

                {/* Floating Badge 2: Sourdough Guarantee */}
                <div className="absolute -top-3 -right-3 sm:-right-6 bg-flour py-3 px-4 rounded-2xl shadow-xl border border-craft-300 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-cometoYellow/30 flex items-center justify-center text-charcoal">
                    <Sparkles className="w-4 h-4 text-cometoYellow-dark" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-charcoal">
                      100% Masa Madre
                    </p>
                    <p className="text-[10px] text-charcoal/60 font-medium">
                      Digestión suave & ligera
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
