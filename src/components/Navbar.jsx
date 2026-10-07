import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone, Flame, ShoppingBag } from "lucide-react";

const navLinks = [
  { name: "Pedir online", href: "/pedir-online" },
  { name: "Catering, pizzas y simuladores", href: "/servicios" },
  { name: "Quiénes somos", href: "/quienes-somos" },
];

const linkClass = ({ isActive }) =>
  `text-sm font-semibold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-cometoBlue after:transition-all ${
    isActive
      ? "text-charcoal after:w-full"
      : "text-charcoal/80 hover:text-charcoal after:w-0 hover:after:w-full"
  }`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF6F0]/95 backdrop-blur-md shadow-warm py-2.5 border-b border-craft-300/40"
          : "bg-[#FAF6F0]/80 backdrop-blur-sm py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <NavLink to="/quienes-somos" onClick={closeMenu} className="flex items-center gap-3 group shrink-0">
          <img
            src="/images/logoDante_forni.png"
            alt="ComeTocino"
            className="h-11 w-auto transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 drop-shadow-sm"
          />
          <span className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-charcoal font-serif leading-none">
              DanteForni
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold text-craft-800 flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cometoRed animate-pulse" />
              Pizza Catering en Vivo
            </span>
          </span>
        </NavLink>

        <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
          {navLinks.map((link) => (
            <NavLink key={link.href} to={link.href} className={linkClass}>
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3">
          <a
            href="https://wa.me/56949869112?text=Hola%20!%20Me%20gustar%C3%ADa%20cotizar%20un%20servicio%20de%20pizza%20catering%20para%20un%20evento"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-craft-400/50 bg-flour text-charcoal text-xs font-bold hover:bg-craft-100 transition-all shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-cometoBlue-dark" />
            <span>WhatsApp</span>
          </a>
          <NavLink
            to="/pedir-online"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-charcoal/20 bg-flour text-charcoal text-xs font-bold uppercase tracking-wider hover:bg-craft-100 transition-all shadow-sm hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-cometoRed" />
            <span>Pedir Online</span>
          </NavLink>
          <NavLink
            to="/servicios#cotizador"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal text-flour text-xs font-bold uppercase tracking-wider hover:bg-charcoal-light transition-all shadow-warm hover:shadow-warm-lg hover:scale-105 active:scale-95"
          >
            <Flame className="w-3.5 h-3.5 text-cometoYellow" />
            <span>Cotizar Evento</span>
          </NavLink>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-xl text-charcoal hover:bg-craft-200/50 xl:hidden transition-colors"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-[#FAF6F0] border-b border-craft-300 px-6 py-5 shadow-warm animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-base font-semibold py-3 border-b border-craft-200/50 hover:text-cometoBlue ${isActive ? "text-cometoRed" : "text-charcoal"}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              <NavLink
                to="/pedir-online"
                onClick={closeMenu}
                className="w-full text-center py-3 rounded-full bg-craft-300/80 text-charcoal font-bold text-sm shadow-sm flex items-center justify-center gap-2 border border-craft-400"
              >
                <ShoppingBag className="w-4 h-4 text-cometoRed" />
                Hacer Pedido Online
              </NavLink>
              <NavLink
                to="/servicios#cotizador"
                onClick={closeMenu}
                className="w-full text-center py-3 rounded-full bg-charcoal text-flour font-bold text-sm shadow-warm flex items-center justify-center gap-2"
              >
                <Flame className="w-4 h-4 text-cometoYellow" />
                Calcular Presupuesto Catering
              </NavLink>
              <a
                href="https://wa.me/56949869112?text=Hola%20ComeTocino!%20Me%20gustar%C3%ADa%20hacer%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full text-center py-2.5 rounded-full border border-craft-400 bg-flour text-charcoal font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-cometoBlue-dark" />
                Consultar por WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
