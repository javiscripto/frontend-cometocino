import React from "react";
import { Flame, Phone, Mail, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-flour relative overflow-hidden border-t-4 border-craft-400">
      {/* Decorative Warm Embers Background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cometoRed/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-craft-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-craft-800">
          {/* Brand Presentation */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logoDante_forni.png"
                alt="ComeTocino Logo"
                className="h-12 w-auto object-contain"
              />
              <div>
                <span className="text-2xl font-serif font-black tracking-tight text-flour block leading-none">
                  Dante Forni
                </span>
                <span className="text-[11px] uppercase tracking-widest font-bold text-cometoYellow mt-0.5 block">
                  Pizza Catering & Eventos
                </span>
              </div>
            </div>

            <p className="text-sm text-flour/75 leading-relaxed mb-6">
              Llevamos la auténtica experiencia de la pizza napolitana a tu
              evento. Masa madre fermentada 48 horas, ingredientes seleccionados
              y horneado en vivo a 450°C.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-craft-800/80 text-flour hover:bg-cometoYellow hover:text-charcoal flex items-center justify-center transition-all"
                aria-label="Instagram ComeTocino"
              ></a>
              <a
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-craft-800/80 text-flour hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all"
                aria-label="WhatsApp ComeTocino"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-cometoYellow mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm text-flour/80">
              <li>
                <a
                  href="#experiencia"
                  className="hover:text-cometoYellow transition-colors"
                >
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="hover:text-cometoYellow transition-colors"
                >
                  Carta de Pizzas
                </a>
              </li>
              <li>
                <a
                  href="#pedidos"
                  className="hover:text-cometoYellow transition-colors font-semibold text-cometoYellow/90"
                >
                  Hacer Pedido
                </a>
              </li>
              <li>
                <a
                  href="#proceso"
                  className="hover:text-cometoYellow transition-colors"
                >
                  Masa Madre 48h
                </a>
              </li>
              <li>
                <a
                  href="#planes"
                  className="hover:text-cometoYellow transition-colors"
                >
                  Planes y Precios
                </a>
              </li>
              <li>
                <a
                  href="#cotizador"
                  className="hover:text-cometoYellow transition-colors"
                >
                  Cotizador Online
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-cometoYellow transition-colors"
                >
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Coverage Areas */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-cometoYellow mb-4">
              Zonas de Cobertura
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-flour/80">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cometoRed shrink-0" />
                <span>Comuna de Mariquina</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cometoRed shrink-0" />
                <span>Comuna de Valdivia</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cometoRed shrink-0" />
                <span>comuna de Mafil(San Pedro, Formio, Mafil)</span>
              </li>
              <li className="flex items-center gap-2 text-cometoYellow text-xs font-semibold pt-1">
                <span>
                  ✈ Consulta para otras comunas de la region de los rios
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-cometoYellow mb-4">
              Contacto y Reservas
            </h4>
            <div className="space-y-3 text-sm text-flour/80">
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cometoYellow" />
                <a href="tel:+56949869112">Llamar</a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cometoYellow" />
                <a href="mailto:cometocinopelchuquin@gmail.com">
                  <span>Correo</span>
                </a>
              </p>
              <div className="pt-2">
                <a
                  href="#cotizador"
                  className="w-full py-3 px-5 rounded-full bg-craft-400 hover:bg-craft-500 text-charcoal font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Flame className="w-4 h-4 text-cometoRed" />
                  <span>Cotizar Presupuesto</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-flour/60">
          <p>
            © {new Date().getFullYear()} ComeTocino Catering. Todos los
            derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span>Hecho con masa madre y pasión pizzera</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-craft-800 text-flour hover:bg-craft-700 transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
