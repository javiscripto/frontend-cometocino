import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar, Flame, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Cómo Funciona", href: "#experiencia" },
    { name: "Nuestras Pizzas", href: "#menu" },
    { name: "Hacer Pedido", href: "#pedidos" },
    { name: "Masa Madre", href: "#proceso" },
    { name: "Planes", href: "#planes" },
    { name: "Cotizador", href: "#cotizador" },
    { name: "Preguntas", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#FAF6F0]/95 backdrop-blur-md shadow-warm py-2.5 border-b border-craft-300/40"
          : "bg-[#FAF6F0]/80 backdrop-blur-sm py-4 border-b border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="/images/logoDante_forni.png"
              alt="ComeTocino Logo"
              className="h-11 w-auto transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 drop-shadow-sm"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-charcoal font-serif flex items-center leading-none">
              Dante<span className="text-charcoal relative">Forni</span>
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold text-craft-800 flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cometoRed animate-pulse"></span>
              Pizza Catering en Vivo
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-charcoal/80 hover:text-charcoal hover:text-craft-900 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cometoBlue after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/56949869112?text=Hola%20!%20Me%20gustar%C3%ADa%20cotizar%20un%20servicio%20de%20pizza%20catering%20para%20un%20evento"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-craft-400/50 bg-flour text-charcoal text-xs font-bold hover:bg-craft-100 transition-all hover:border-craft-500 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-cometoBlue-dark" />
            <span>WhatsApp</span>
          </a>

          <a
            href="#pedidos"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-charcoal/20 bg-flour text-charcoal text-xs font-bold uppercase tracking-wider hover:bg-craft-100 transition-all shadow-sm hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-cometoRed" />
            <span>Pedir Online</span>
          </a>

          <a
            href="#cotizador"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal text-flour text-xs font-bold uppercase tracking-wider hover:bg-charcoal-light transition-all shadow-warm hover:shadow-warm-lg hover:scale-105 active:scale-95"
          >
            <Flame className="w-3.5 h-3.5 text-cometoYellow" />
            <span>Cotizar Evento</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-xl text-charcoal hover:bg-craft-200/50 lg:hidden transition-colors"
          aria-label="Abrir menú"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#FAF6F0] border-b border-craft-300 px-6 py-5 shadow-warm animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-charcoal py-2 border-b border-craft-200/50 hover:text-cometoBlue"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href="#pedidos"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 rounded-full bg-craft-300/80 text-charcoal font-bold text-sm shadow-sm flex items-center justify-center gap-2 border border-craft-400"
              >
                <ShoppingBag className="w-4 h-4 text-cometoRed" />
                <span>Hacer Pedido Online</span>
              </a>
              <a
                href="#cotizador"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 rounded-full bg-charcoal text-flour font-bold text-sm shadow-warm flex items-center justify-center gap-2"
              >
                <Flame className="w-4 h-4 text-cometoYellow" />
                <span>Calcular Presupuesto Catering</span>
              </a>
              <a
                href="https://wa.me/56949869112?text=Hola%20ComeTocino!%20Me%20gustar%C3%ADa%20hacer%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-full border border-craft-400 bg-flour text-charcoal font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-cometoBlue-dark" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
