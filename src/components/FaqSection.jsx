import React, { useState } from "react";
import { FAQ_LIST } from "../data/cateringData";
import { ChevronDown, HelpCircle, PhoneCall } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-[#F4EDE1] relative overflow-hidden border-t border-craft-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-craft-200 text-craft-900 text-xs font-extrabold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-craft-700" />
              <span>Resolvemos tus Dudas</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-charcoal mb-4 tracking-tight">
              Preguntas Frecuentes
            </h2>
            <p className="text-base sm:text-lg text-charcoal/70 max-w-xl mx-auto">
              Todo lo que necesitas saber sobre espacio, tiempos, masa madre y
              dinámica del servicio para tu tranquilidad.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={index} animation="fade-up" delay={index * 60}>
                <div
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen
                      ? "bg-flour border-charcoal/30 shadow-warm"
                      : "bg-flour/80 border-craft-300 hover:border-craft-400"
                    }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-charcoal font-serif">
                      {faq.q}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen
                          ? "bg-charcoal text-flour rotate-180"
                          : "bg-craft-200 text-charcoal"
                        }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-charcoal/80 leading-relaxed border-t border-craft-200/60 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Extra Questions Box */}
        <ScrollReveal animation="zoom-in" delay={300} className="mt-14">
          <div className="p-6 sm:p-8 rounded-3xl bg-craft-300/50 border border-craft-400 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h4 className="text-lg font-bold text-charcoal">
                ¿Tienes otra pregunta sobre tu evento?
              </h4>
              <p className="text-xs sm:text-sm text-charcoal/75 mt-1">
                Escríbenos directamente y te asesoramos según la cantidad de
                invitados y lugar.
              </p>
            </div>
            <a
              href="https://wa.me/56949869112?text=Hola!%20Tengo%20una%20consulta%20sobre%20el%20servicio%20de%20catering."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal text-flour font-bold text-xs uppercase tracking-wider hover:bg-craft-900 transition-colors shadow-warm shrink-0"
            >
              <PhoneCall className="w-4 h-4 text-cometoYellow" />
              <span>Chatear por WhatsApp</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
