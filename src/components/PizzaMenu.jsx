import React, { useState } from 'react';
import { PIZZA_VARIETIES } from '../data/cateringData';
import { Sparkles, Flame, Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const CATEGORIES = [
  { id: 'todas', label: 'Todas las Variedades' },
  { id: 'especiales', label: 'Especialidades ComeTocino' },
  { id: 'clasicas', label: 'Clásicas Napolitanas' },
  { id: 'vegetarianas', label: 'Vegetarianas' },
  { id: 'dulces', label: 'Pizzas Dulces (Postre)' }
];

export default function PizzaMenu() {
  const [activeCategory, setActiveCategory] = useState('todas');

  const filteredPizzas = activeCategory === 'todas'
    ? PIZZA_VARIETIES
    : PIZZA_VARIETIES.filter(p => p.category === activeCategory);

  return (
    <section id="menu" className="py-28 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Big Editorial Typography */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-craft-200 text-craft-900 text-xs font-extrabold uppercase tracking-wider mb-4">
              <Flame className="w-3.5 h-3.5 text-cometoRed" />
              <span>Carta Exclusiva para Eventos</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-charcoal mb-4 tracking-tight leading-[1.05]">
              Sabores de Autor al Fuego
            </h2>
            <p className="text-base sm:text-xl text-charcoal/70">
              Cada paquete de catering incluye una selección de estas pizzas preparadas en vivo con masa madre y horneadas al momento frente a tus invitados.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
            {CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-charcoal text-flour shadow-warm scale-105 ring-2 ring-cometoYellow'
                    : 'bg-flour text-charcoal/80 hover:bg-craft-200 border border-craft-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Pizzas Grid with Large Visuals */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredPizzas.map((pizza, index) => (
            <ScrollReveal
              key={pizza.id}
              animation="fade-up"
              delay={(index % 4) * 80}
              className="h-full"
            >
              <div className="bg-flour rounded-3xl overflow-hidden border border-craft-300 shadow-warm hover:shadow-warm-lg hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
                
                {/* Large Image Frame */}
                <div className="relative h-56 bg-craft-300/40 overflow-hidden flex items-center justify-center">
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-70"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-md ${
                      pizza.tag === 'Recomendada' 
                        ? 'bg-cometoYellow text-charcoal'
                        : pizza.tag === 'Vegetariana'
                        ? 'bg-emerald-600 text-white'
                        : pizza.tag === 'Postre'
                        ? 'bg-pink-600 text-white'
                        : 'bg-cometoBlue-dark text-white'
                    }`}>
                      {pizza.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold font-serif text-charcoal mb-2.5 group-hover:text-craft-900 transition-colors">
                      {pizza.name}
                    </h3>
                    <p className="text-sm text-charcoal/75 leading-relaxed mb-6">
                      {pizza.description}
                    </p>
                  </div>

                  {/* Ingredients chips */}
                  <div className="pt-4 border-t border-craft-200">
                    <p className="text-[11px] font-black uppercase tracking-wider text-craft-800 mb-2">Ingredientes clave:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {pizza.ingredients.map((ing, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-craft-100 text-charcoal text-xs font-semibold border border-craft-200"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Dietary Note Banner */}
        <ScrollReveal animation="zoom-in" delay={200} className="mt-14 max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 rounded-3xl bg-flour border border-craft-300 shadow-warm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-cometoBlue-light text-cometoBlue-dark flex items-center justify-center shrink-0 shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-serif font-bold text-charcoal">¿Tienes invitados con intolerancias o veganos?</h4>
                <p className="text-xs sm:text-sm text-charcoal/70 mt-0.5">Adaptamos preparaciones con queso vegano, opciones sin lactosa o sin gluten bajo aviso previo.</p>
              </div>
            </div>
            <a
              href="/servicios#cotizador"
              className="px-6 py-3 rounded-full bg-craft-400 hover:bg-craft-500 text-charcoal text-xs font-black uppercase tracking-wider transition-all shrink-0 shadow-sm hover:scale-105 active:scale-95"
            >
              Cotizar con requerimientos
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
