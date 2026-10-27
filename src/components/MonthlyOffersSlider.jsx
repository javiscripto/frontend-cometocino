import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Tag } from "lucide-react";

const offers = [
  {
    title: "Promo del mes",
    description: "una promo de miedo perfecta para acompañar tu pizza",
    image:
      "https://res.cloudinary.com/kt1vvb0c/image/upload/v1792002400/converted-2.webp",
    alt: "palitos de ajo",
  },
  {
    title: "Para compartir",
    description: "Encuentra una opción especial para disfrutar en compañía.",
    image:
      "https://res.cloudinary.com/kt1vvb0c/image/upload/v1792004096/converted-3.webp",
    alt: "Pizza al horno lista para compartir",
  },
  {
    title: "Una oferta para disfrutar",
    description: "Revisa la selección del mes y arma tu pedido online.",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1800&q=85",
    alt: "Pizza artesanal con ingredientes frescos",
  },
];

export default function MonthlyOffersSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % offers.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + offers.length) % offers.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % offers.length);
  };

  return (
    <section
      aria-label="Ofertas del mes"
      className="bg-[#F7F3EB] px-0 pt-24 pb-8 sm:px-6 sm:pt-28 lg:px-8"
    >
      <div className="relative mx-auto h-[360px] w-full max-w-7xl overflow-hidden rounded-none bg-charcoal shadow-warm-lg sm:h-[420px] sm:rounded-xl lg:h-[480px]">
        {offers.map((offer, index) => (
          <article
            key={offer.title}
            aria-hidden={index !== activeIndex}
            className={`absolute inset-0 transition-opacity duration-700 ${index === activeIndex
                ? "opacity-100"
                : "pointer-events-none opacity-0"
              }`}
          >
            <img
              src={offer.image}
              alt={offer.alt}
              className="absolute inset-0 h-full w-full object-contain"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-charcoal/10" />

            <div className="relative z-10 flex h-full max-w-2xl flex-col items-start justify-center px-8 py-10 text-flour sm:px-14 lg:px-20">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cometoYellow/40 bg-charcoal/45 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-cometoYellow backdrop-blur-sm">
                <Tag className="h-3.5 w-3.5" />
                Ofertas del mes
              </span>
              <h2 className="mb-4 font-serif text-2xl font-black leading-tight tracking-tight sm:text-5xl lg:text-3xl">
                {offer.title}
              </h2>
              <p className="mb-8 max-w-lg text-sm leading-relaxed text-flour/85 sm:text-lg">
                {offer.description}
              </p>
              <a
                href="#pedidos"
                tabIndex={index === activeIndex ? 0 : -1}
                className="inline-flex items-center gap-2 rounded-full bg-cometoYellow px-6 py-3.5 text-xs font-black uppercase tracking-wider text-charcoal shadow-warm transition hover:scale-105 hover:bg-cometoYellow-amber focus:outline-none focus:ring-2 focus:ring-flour focus:ring-offset-2 focus:ring-offset-charcoal"
              >
                Pedir online
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}

        <button
          type="button"
          onClick={showPrevious}
          aria-label="Ver oferta anterior"
          className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-charcoal/45 text-white backdrop-blur-sm transition hover:bg-charcoal/75 sm:left-5 sm:h-12 sm:w-12"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={showNext}
          aria-label="Ver oferta siguiente"
          className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-charcoal/45 text-white backdrop-blur-sm transition hover:bg-charcoal/75 sm:right-5 sm:h-12 sm:w-12"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {offers.map((offer, index) => (
            <button
              key={offer.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver oferta ${index + 1}: ${offer.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all ${index === activeIndex
                  ? "w-8 bg-cometoYellow"
                  : "w-2.5 bg-white/60 hover:bg-white"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
