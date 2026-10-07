import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Flame, Sparkles, ZoomIn, Eye, Heart } from "lucide-react";

export default function ImpactGallery() {
  const [activePhoto, setActivePhoto] = useState(null);

  const galleryItems = [
    {
      id: 1,
      image: "/images/pizza-overhead.jpg",
      title: "Pizzas Recién Salidas del Fuego",
      subtitle: "Borde inflado (cornicione) dorado y crocante",
      category: "Pizzas al Horno",
      size: "col-span-12 lg:col-span-8 h-[420px] sm:h-[500px]",
      featured: true,
    },
    {
      id: 2,
      image: "/images/accion-masa.jpg",
      title: "Estirado Tradicional en Vivo",
      subtitle: "Sin usleros: aire atrapado en los alvéolos",
      category: "El Show en Vivo",
      size: "col-span-12 sm:col-span-6 lg:col-span-4 h-[420px] sm:h-[500px]",
      featured: false,
    },
    {
      id: 3,
      image: "/images/accion-salsa.jpg",
      title: "Salsa Pomodoro San Marzano & Fior di Latte",
      subtitle: "Ingredientes puros que explotan en sabor",
      category: "Ingredientes Nobles",
      size: "col-span-12 sm:col-span-6 lg:col-span-4 h-[380px] sm:h-[460px]",
      featured: false,
    },
    {
      id: 4,
      image: "/images/masa-madre.jpg",
      title: "Alvéolos de Fermentación Lenta",
      subtitle: "48 horas de paciencia y masa madre viva",
      category: "Masa Madre 48h",
      size: "col-span-12 lg:col-span-8 h-[380px] sm:h-[460px]",
      featured: true,
    },
  ];

  return (
    <section className="py-24 bg-[#191715] text-flour relative overflow-hidden">
      {/* Background radial glow of wood-fired embers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-cometoRed/15 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cometoYellow/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Big Impact Typography */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-craft-900/90 text-cometoYellow border border-cometoYellow/30 text-xs font-black uppercase tracking-widest mb-4">
              <Flame className="w-3.5 h-3.5 text-cometoRed animate-pulse" />
              <span>Experiencia Visual de Alto Impacto</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight leading-[1.08] text-flour mb-6">
              El Espectáculo del Fuego <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cometoYellow via-craft-300 to-cometoYellow">
                Frente a tus Ojos.
              </span>
            </h2>

            <p className="text-base sm:text-xl text-flour/75 font-normal max-w-2xl leading-relaxed">
              No es solo comida, es una atracción inolvidable. Nuestros hornos
              encendidos a 450°C transforman cualquier jardín, terraza o salón
              en una auténtica pizzería artesanal.
            </p>
          </div>
        </ScrollReveal>

        {/* Large Format Asymmetric Gallery Grid */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {galleryItems.map((item, index) => (
            <ScrollReveal
              key={item.id}
              animation={index % 2 === 0 ? "fade-right" : "fade-left"}
              delay={index * 120}
              className={item.size}
            >
              <div
                onClick={() => setActivePhoto(item)}
                className="group relative w-full h-full rounded-3xl overflow-hidden cursor-pointer shadow-warm-lg border border-craft-700/40 bg-charcoal-light"
              >
                {/* Image with zoom on scroll / hover */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.92] group-hover:brightness-100"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black via-charcoal/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Top Badge */}
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-charcoal/80 backdrop-blur-md text-cometoYellow text-xs font-black uppercase tracking-wider border border-cometoYellow/30">
                    {item.category}
                  </span>
                </div>

                {/* Hover zoom icon */}
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-flour/20 backdrop-blur-md text-flour flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-5 h-5 text-cometoYellow" />
                </div>

                {/* Bottom Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform transition-transform duration-300">
                  <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-flour leading-snug mb-2 group-hover:text-cometoYellow transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-flour/80 font-medium">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Big Full-Bleed Live Fire Experience Banner */}
        <ScrollReveal
          animation="zoom-in"
          delay={200}
          className="mt-12 sm:mt-16"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-craft-900 via-charcoal to-craft-900 border-2 border-craft-600/50 p-8 sm:p-14 shadow-2xl">
            {/* Background Texture & Warm Embers */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#F6CE6E_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-xs font-black uppercase tracking-widest text-cometoYellow mb-3 inline-block">
                  ● Servicio Todo Terreno en Toda la RM y Alrededores
                </span>
                <h3 className="text-3xl sm:text-5xl font-serif font-black text-flour leading-tight mb-4">
                  ¿Tienes un jardín, terraza o patio? <br />
                  <span className="text-cometoYellow">
                    Nosotros ponemos la fiesta.
                  </span>
                </h3>
                <p className="text-base sm:text-lg text-flour/80 max-w-2xl leading-relaxed">
                  Llevamos mesas rústicas de presentación, tablas de madera de
                  autor, vajilla 100% compostable y los hornos a gas de alto
                  rendimiento listos para operar sin enchufes ni humos molestos.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center items-stretch lg:items-end">
                <a
                  href="/servicios#cotizador"
                  className="px-8 py-4 rounded-full bg-cometoYellow text-charcoal font-black text-base shadow-glow-yellow hover:bg-cometoYellow-amber hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                >
                  <Flame className="w-5 h-5 text-cometoRed" />
                  <span>Calcular mi Evento Ahora</span>
                </a>
                <a
                  href="https://wa.me/56949869112?text=Hola%20!%20Quiero%20saber%20si%20tienen%20disponibilidad%20para%20un%20evento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full border border-flour/30 bg-flour/10 text-flour font-bold text-sm hover:bg-flour/20 transition-all text-center"
                >
                  Preguntar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-charcoal rounded-3xl overflow-hidden border border-craft-500 shadow-2xl"
          >
            <img
              src={activePhoto.image}
              alt={activePhoto.title}
              className="w-full max-h-[70vh] object-cover"
            />
            <div className="p-6 bg-charcoal text-flour flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-cometoYellow font-bold">
                  {activePhoto.category}
                </span>
                <h4 className="text-xl font-serif font-bold text-flour mt-0.5">
                  {activePhoto.title}
                </h4>
                <p className="text-xs text-flour/70 mt-1">
                  {activePhoto.subtitle}
                </p>
              </div>
              <button
                onClick={() => setActivePhoto(null)}
                className="px-5 py-2 rounded-full bg-flour/10 text-flour text-xs font-bold hover:bg-flour/20 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
