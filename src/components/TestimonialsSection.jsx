import React from 'react';
import { TESTIMONIALS } from '../data/cateringData';
import { Star, Quote, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Big Editorial Typography */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-craft-200 text-craft-900 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-cometoYellow text-cometoYellow-dark" />
              <span>Experiencias Reales de Nuestros Clientes</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-charcoal mb-4 tracking-tight">
              Eventos que se Convirtieron en Fiesta
            </h2>
            <p className="text-base sm:text-lg text-charcoal/70">
              Más de 150 matrimonios, cumpleaños y celebraciones avalan nuestro servicio de pizza catering en vivo.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <ScrollReveal
              key={t.id}
              animation="fade-up"
              delay={idx * 150}
              className="h-full"
            >
              <div className="bg-flour rounded-3xl p-8 border border-craft-300 shadow-warm hover:shadow-warm-lg transition-all duration-300 flex flex-col justify-between h-full group">
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1 text-cometoYellow">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-cometoYellow text-cometoYellow" />
                      ))}
                    </div>
                    <span className="w-10 h-10 rounded-2xl bg-craft-100 flex items-center justify-center text-craft-500 group-hover:text-charcoal transition-colors">
                      <Quote className="w-5 h-5" />
                    </span>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-base text-charcoal/80 italic leading-relaxed mb-6 font-serif">
                    "{t.text}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-5 border-t border-craft-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-bold text-charcoal">{t.name}</h4>
                      <p className="text-xs font-semibold text-craft-700 flex items-center gap-1 mt-0.5">
                        <Calendar className="w-3.5 h-3.5 text-craft-500" />
                        <span>{t.event}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-charcoal/60 bg-craft-100 px-2.5 py-1 rounded-full">
                      <MapPin className="w-3 h-3 text-cometoRed" />
                      <span>{t.location}</span>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Client Trust Metrics Strip */}
        <ScrollReveal animation="fade-up" delay={250} className="mt-16">
          <div className="bg-craft-100/80 rounded-2xl p-6 sm:p-8 border border-craft-300/80 flex flex-wrap items-center justify-around gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-serif font-black text-charcoal">100%</div>
              <p className="text-xs sm:text-sm font-bold text-craft-800 uppercase tracking-wider mt-1">Puntualidad en Montaje</p>
            </div>
            <div className="w-px h-10 bg-craft-300 hidden sm:block" />
            <div>
              <div className="text-3xl sm:text-4xl font-serif font-black text-charcoal">4.9 / 5.0</div>
              <p className="text-xs sm:text-sm font-bold text-craft-800 uppercase tracking-wider mt-1">Calificación Promedio</p>
            </div>
            <div className="w-px h-10 bg-craft-300 hidden sm:block" />
            <div>
              <div className="text-3xl sm:text-4xl font-serif font-black text-charcoal">+150</div>
              <p className="text-xs sm:text-sm font-bold text-craft-800 uppercase tracking-wider mt-1">Eventos Realizados</p>
            </div>
            <div className="w-px h-10 bg-craft-300 hidden sm:block" />
            <div>
              <div className="text-3xl sm:text-4xl font-serif font-black text-charcoal">0 Lavados</div>
              <p className="text-xs sm:text-sm font-bold text-craft-800 uppercase tracking-wider mt-1">Tú Solo Disfrutas</p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
