import React from 'react';
import { Flame, Clock, Users, Sparkles, UtensilsCrossed, Leaf } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function HighlightsBanner() {
  const highlights = [
    {
      icon: Clock,
      title: 'Masa Madre 48h',
      desc: 'Fermentación lenta y digestión liviana'
    },
    {
      icon: Flame,
      title: 'Hornos a 450°C',
      desc: 'Cocción napolitana en 90 segundos'
    },
    {
      icon: Users,
      title: 'Servicio Ilimitado',
      desc: 'Rondas continuas para todos'
    },
    {
      icon: UtensilsCrossed,
      title: 'Estación Autónoma',
      desc: 'Cero uso de tu cocina de casa'
    },
    {
      icon: Leaf,
      title: 'Eco Friendly',
      desc: 'Vajilla compostable y biodegradable'
    }
  ];

  return (
    <section className="bg-charcoal text-flour py-12 relative overflow-hidden border-y-4 border-craft-400">
      {/* Background glow */}
      <div className="absolute inset-0 bg-dark-fire opacity-90 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal
                key={idx}
                animation="fade-up"
                delay={idx * 80}
              >
                <div className="flex flex-col items-center text-center p-3 rounded-2xl hover:bg-white/5 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-craft-400/20 border border-craft-400/40 flex items-center justify-center mb-3 group-hover:scale-115 group-hover:bg-cometoYellow group-hover:text-charcoal transition-all text-cometoYellow shadow-lg">
                    <Icon className="w-7 h-7 transition-colors" />
                  </div>
                  <h4 className="text-base sm:text-lg font-serif font-bold text-flour mb-1 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-flour/70 font-light leading-snug">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
