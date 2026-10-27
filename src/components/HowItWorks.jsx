import React from "react";
import {
  Truck,
  Flame,
  Pizza,
  Sparkles,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "../data/cateringData";
import ScrollReveal from "./ScrollReveal";

const ICONS_MAP = {
  Truck,
  Flame,
  Pizza,
  Sparkles,
};

export default function HowItWorks() {
  return (
    <section
      id="experiencia"
      className="py-28 bg-[#FAF6F0] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Catering hero with looping oven footage */}
        <ScrollReveal animation="fade-up">
          <div className="relative isolate overflow-hidden rounded-[1rem] min-h-[430px] sm:min-h-[500px] mb-20 flex items-center justify-center px-6 py-16 sm:px-12">
            <img
              src="/images/pizza_margherita.png"
              alt="Pizza Catering en Los Ríos"
              className="absolute inset-0 -z-20 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 -z-10 bg-charcoal/65" />
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cometoYellow text-charcoal text-xs font-extrabold uppercase tracking-wider mb-5 shadow-lg">
                <Flame className="w-4 h-4" />
                <span>Pizza Catering & Pizza Party en Los Ríos</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-white mb-6 tracking-tight leading-[1.05] drop-shadow-lg">
                Pizza Catering para Eventos en Valdivia, Mariquina y Máfil
              </h1>
              <p className="text-base sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                Llevamos nuestros hornos profesionales y maestros pizzeros en
                vivo a tu parcela, terraza o empresa en las comunas de{" "}
                <strong className="text-white font-bold">Valdivia</strong>,{" "}
                <strong className="text-white font-bold">Mariquina</strong> y{" "}
                <strong className="text-white font-bold">Máfil</strong>. Masa
                madre de 48 horas, show al fuego y barra libre de pizzas.
              </p>
              <p className="mt-6 text-xs text-white/70">
                Video:{" "}
                <a
                  href="https://www.pexels.com/video/a-pizza-oven-with-flames-coming-out-of-it-7090945/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-white"
                >
                  Pexels
                </a>
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Steps Grid with Staggered Scroll Animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((stepItem, index) => {
            const Icon = ICONS_MAP[stepItem.icon] || Sparkles;
            return (
              <ScrollReveal
                key={stepItem.step}
                animation="fade-up"
                delay={index * 120}
                className="h-full"
              >
                <div className="relative bg-flour rounded-3xl p-8 border border-craft-300 shadow-warm hover:shadow-warm-lg hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-5xl font-serif font-black text-craft-300 group-hover:text-cometoBlue transition-colors">
                        {stepItem.step}
                      </span>
                      <div className="w-14 h-14 rounded-2xl bg-craft-100 group-hover:bg-cometoYellow text-charcoal flex items-center justify-center transition-all duration-300 shadow-inner">
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-serif font-bold text-charcoal mb-3 group-hover:text-craft-900 transition-colors">
                      {stepItem.title}
                    </h3>
                    <p className="text-sm text-charcoal/75 leading-relaxed">
                      {stepItem.description}
                    </p>
                  </div>

                  {/* Sub-tag */}
                  <div className="mt-8 pt-4 border-t border-craft-200 flex items-center gap-2 text-xs font-bold text-craft-800">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Servicio Autónomo y Puntual</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Live Catering Action Photo Preview Banner with Large Images */}
        <ScrollReveal animation="zoom-in" delay={250} className="mt-20">
          <div className="rounded-3xl overflow-hidden bg-craft-400 p-8 sm:p-14 shadow-2xl border-2 border-craft-500/50 relative">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-flour-dots opacity-30 pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-6 text-charcoal-black">
                <span className="px-3.5 py-1.5 rounded-full bg-charcoal text-flour text-xs font-black uppercase tracking-wider mb-4 inline-block shadow-sm">
                  Show Gastronómico en Vivo
                </span>
                <h3 className="text-3xl sm:text-5xl font-serif font-black leading-[1.08] mb-5 tracking-tight">
                  Masa girando en el aire y queso fundido a 450°C.
                </h3>
                <p className="text-base sm:text-lg text-charcoal/85 mb-8 leading-relaxed font-medium">
                  Ver cómo la masa madre se infla en segundos con los alvéolos
                  dorados se convierte en el centro de atención de la fiesta. Es
                  entretenimiento y gastronomía de alto nivel juntos.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <a
                    href="/servicios#cotizador"
                    className="px-8 py-4 rounded-full bg-charcoal text-flour font-extrabold text-sm sm:text-base hover:bg-charcoal-light transition-all shadow-warm inline-flex items-center gap-2 hover:scale-105 active:scale-95"
                  >
                    <span>Reservar fecha para mi fiesta</span>
                    <ArrowRight className="w-4 h-4 text-cometoYellow" />
                  </a>
                  <span className="text-xs sm:text-sm font-extrabold text-charcoal">
                    ✓ Sin uso de tu cocina ni vajilla
                  </span>
                </div>
              </div>

              {/* Large Format Action Photos */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-flour group">
                  <img
                    src="/images/accion-masa.jpg"
                    alt="Amasado y estirado de pizza en vivo"
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="p-3 bg-flour text-center">
                    <p className="text-xs font-bold text-charcoal">
                      Estirado Artesanal
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-flour group">
                  <img
                    src="/images/accion-salsa.jpg"
                    alt="Salsa pomodoro artesanal e ingredientes de temporada"
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="p-3 bg-flour text-center">
                    <p className="text-xs font-bold text-charcoal">
                      Salsa Pomodoro San Marzano
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
