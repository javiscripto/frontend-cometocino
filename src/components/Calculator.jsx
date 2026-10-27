import React, { useState } from "react";
import confetti from "canvas-confetti";
import { CATERING_PACKAGES } from "../data/cateringData";
import {
  Flame,
  Users,
  Calendar,
  Clock,
  Sparkles,
  Check,
  Send,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Calculator({ selectedPackageId, onSelectPackage }) {
  const [selectedPlanId, setSelectedPlanId] = useState(
    selectedPackageId || "gourmet",
  );
  const [guests, setGuests] = useState(35);
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [comments, setComments] = useState("");

  // Optional add-ons
  const [extras, setExtras] = useState({
    extraOven: false,
    sweetPizzas: false,
    antipastoBar: false,
    drinksBar: false,
  });

  // Current package object
  const currentPlan =
    CATERING_PACKAGES.find((p) => p.id === selectedPlanId) ||
    CATERING_PACKAGES[1];

  // Calculate pricing
  const basePricePerPerson = currentPlan.pricePerPerson;
  let extraPerPerson = 0;
  let flatExtra = 0;

  if (extras.sweetPizzas && selectedPlanId === "amigos") {
    extraPerPerson += 2500;
  }
  if (extras.antipastoBar && selectedPlanId !== "bodas") {
    extraPerPerson += 3500;
  }
  if (extras.drinksBar) {
    extraPerPerson += 3900;
  }
  if (extras.extraOven) {
    flatExtra += 65000;
  }

  // Volume discount for 80+ guests (5% discount on base)
  const volumeDiscount = guests >= 20 ? 0.05 : 0;
  const effectiveBasePrice = Math.round(
    basePricePerPerson * (1 - volumeDiscount),
  );
  const totalPerPerson = effectiveBasePrice + extraPerPerson;
  const estimatedTotal = totalPerPerson * guests + flatExtra;

  // Estimated pizza slices and whole pizzas
  const estimatedPizzasCount = Math.round(guests * 1.25); // ~1.25 whole 30cm pizzas per person or 8-10 slices
  const estimatedServiceHours = currentPlan.duration;

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#F6CE6E", "#D94A26", "#7298D7", "#D0B087"],
    });
  };

  const handleSendWhatsApp = () => {
    triggerConfetti();

    const extrasList = [];
    if (extras.sweetPizzas && selectedPlanId === "amigos")
      extrasList.push("Ronda de Pizzas Dulces Nutella");
    if (extras.antipastoBar && selectedPlanId !== "bodas")
      extrasList.push("Estación de Focaccias & Antipastos");
    if (extras.drinksBar) extrasList.push("Barra de Bebidas & Aguas Frescas");
    if (extras.extraOven) extrasList.push("Horno Adicional de Alta Velocidad");

    const extrasText =
      extrasList.length > 0 ? `%0A*Extras:* ${extrasList.join(", ")}` : "";
    const dateText = date ? `%0A*Fecha estimada:* ${date}` : "";
    const locText = location ? `%0A*Comuna/Lugar:* ${location}` : "";
    const commText = comments ? `%0A*Notas:* ${comments}` : "";

    const message =
      `Hola ComeTocino! 🔥%0A%0AMe gustaría cotizar el servicio de *Pizza Catering en Vivo*:%0A%0A` +
      `*Plan:* ${currentPlan.name}%0A` +
      `*Invitados:* ${guests} personas%0A` +
      `*Presupuesto Estimado:* $${estimatedTotal.toLocaleString("es-CL")} CLP ($${totalPerPerson.toLocaleString("es-CL")} / persona)%0A` +
      `*Duración:* ${estimatedServiceHours}` +
      extrasText +
      dateText +
      locText +
      commText +
      `%0A%0A¿Tienen disponibilidad en su calendario? ¡Muchas gracias!`;

    const whatsappUrl = `https://wa.me/56949869112?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="cotizador"
      className="py-24 bg-[#FAF6F0] relative overflow-hidden border-t border-craft-300"
    >
      {/* Decorative craft background circles */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cometoYellow/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-craft-400/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-craft-200 text-craft-900 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cometoYellow-dark" />
              <span>Cotizador Instantáneo en Vivo</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-charcoal mb-4 tracking-tight">
              Calcula el Presupuesto de tu Evento
            </h2>
            <p className="text-base sm:text-lg text-charcoal/70">
              Personaliza el número de invitados y plan para conocer tu valor
              estimado al instante, sin esperas ni letras chicas.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form & Configuration */}
          <div className="lg:col-span-7 bg-flour rounded-3xl p-6 sm:p-10 border border-craft-300 shadow-warm">
            {/* Step 1: Select Plan */}
            <div className="mb-8">
              <label className="block text-sm font-extrabold text-charcoal uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>1. Elige tu Plan de Catering</span>
                <span className="text-xs font-semibold text-craft-700">
                  Mínimo 4 invitados
                </span>
              </label>

              <div className="grid sm:grid-cols-3 gap-3">
                {CATERING_PACKAGES.map((pkg) => {
                  const isSelected = selectedPlanId === pkg.id;
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => {
                        setSelectedPlanId(pkg.id);
                        if (onSelectPackage) onSelectPackage(pkg.id);
                      }}
                      className={`p-4 rounded-2xl text-left border-2 transition-all flex flex-col justify-between ${isSelected
                          ? "border-charcoal bg-craft-100 shadow-warm"
                          : "border-craft-300 bg-flour hover:border-craft-400 hover:bg-craft-50"
                        }`}
                    >
                      <div>
                        {pkg.popular && (
                          <span className="text-[10px] font-black uppercase tracking-wider bg-cometoYellow px-2 py-0.5 rounded-full text-charcoal inline-block mb-1.5">
                            Recomendado
                          </span>
                        )}
                        <h4 className="text-sm font-bold text-charcoal leading-snug">
                          {pkg.name}
                        </h4>
                      </div>
                      <div className="mt-3 pt-2 border-t border-craft-200">
                        <span className="text-base font-extrabold text-charcoal font-serif">
                          ${pkg.pricePerPerson.toLocaleString("es-CL")}
                        </span>
                        <span className="text-[11px] text-charcoal/60 block">
                          / persona
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Guest Count Slider */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-extrabold text-charcoal uppercase tracking-wider flex items-center gap-2">
                  <Users className="w-4 h-4 text-craft-700" />
                  <span>2. Cantidad de Invitados</span>
                </label>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-serif font-black text-charcoal">
                    {guests}
                  </span>
                  <span className="text-xs font-bold text-charcoal/70">
                    personas
                  </span>
                </div>
              </div>

              <input
                type="range"
                min="4"
                max="25"
                step="1"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full h-2.5 bg-craft-200 rounded-lg appearance-none cursor-pointer accent-charcoal"
              />

              <div className="flex justify-between text-[11px] font-bold text-charcoal/50 mt-1.5">
                <span>20 (Juntada íntima)</span>
                <span>60 (Celebración)</span>
                <span>120 (Boda / Fiesta)</span>
                <span>180+</span>
              </div>

              {guests >= 80 && (
                <div className="mt-3 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-xs font-bold text-emerald-800">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>
                    ¡Descuento por volumen aplicado! 5% OFF en la tarifa base
                  </span>
                </div>
              )}
            </div>

            {/* Step 3: Event Details */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-xs font-extrabold text-charcoal uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-craft-700" />
                  <span>Fecha tentativa</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-craft-300 bg-[#FAF6F0] text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-charcoal uppercase tracking-wider mb-2">
                  Comuna o Ciudad del Evento
                </label>
                <input
                  type="text"
                  placeholder="Ej: Mariquina, Valdivia, Máfil, Pelchuquín..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-craft-300 bg-[#FAF6F0] text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal"
                />
              </div>
            </div>

            {/* Step 4: Optional Add-ons */}
            <div className="mb-6">
              <label className="block text-xs font-extrabold text-charcoal uppercase tracking-wider mb-3">
                Complementos Opcionales
              </label>

              <div className="space-y-2.5">
                {selectedPlanId === "amigos" && (
                  <label className="flex items-center justify-between p-3 rounded-xl border border-craft-300/80 hover:bg-craft-50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={extras.sweetPizzas}
                        onChange={(e) =>
                          setExtras({
                            ...extras,
                            sweetPizzas: e.target.checked,
                          })
                        }
                        className="w-4 h-4 rounded text-charcoal focus:ring-charcoal"
                      />
                      <div>
                        <p className="text-xs font-bold text-charcoal">
                          Barra de Pizzas Dulces (Nutella & Frutos)
                        </p>
                        <p className="text-[11px] text-charcoal/60">
                          Ronda final de postre horneada al fuego
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-craft-800">
                      +$2.500 /p
                    </span>
                  </label>
                )}

                {selectedPlanId !== "bodas" && (
                  <label className="flex items-center justify-between p-3 rounded-xl border border-craft-300/80 hover:bg-craft-50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={extras.antipastoBar}
                        onChange={(e) =>
                          setExtras({
                            ...extras,
                            antipastoBar: e.target.checked,
                          })
                        }
                        className="w-4 h-4 rounded text-charcoal focus:ring-charcoal"
                      />
                      <div>
                        <p className="text-xs font-bold text-charcoal">
                          Estación de Focaccias & Dips Gourmet
                        </p>
                        <p className="text-[11px] text-charcoal/60">
                          Aperitivo de bienvenida al llegar los invitados
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-craft-800">
                      +$3.500 /p
                    </span>
                  </label>
                )}

                <label className="flex items-center justify-between p-3 rounded-xl border border-craft-300/80 hover:bg-craft-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={extras.drinksBar}
                      onChange={(e) =>
                        setExtras({ ...extras, drinksBar: e.target.checked })
                      }
                      className="w-4 h-4 rounded text-charcoal focus:ring-charcoal"
                    />
                    <div>
                      <p className="text-xs font-bold text-charcoal">
                        Barra de Aguas Saborizadas Artesanales
                      </p>
                      <p className="text-[11px] text-charcoal/60">
                        Limonada menta jengibre y frutos rojos ilimitada
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-craft-800">
                    +$3.900 /p
                  </span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl border border-craft-300/80 hover:bg-craft-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={extras.extraOven}
                      onChange={(e) =>
                        setExtras({ ...extras, extraOven: e.target.checked })
                      }
                      className="w-4 h-4 rounded text-charcoal focus:ring-charcoal"
                    />
                    <div>
                      <p className="text-xs font-bold text-charcoal">
                        Segundo Horno de Alta Velocidad
                      </p>
                      <p className="text-[11px] text-charcoal/60">
                        Ideal para eventos grandes con doble frente de despacho
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-craft-800">
                    +$65.000 fijas
                  </span>
                </label>
              </div>
            </div>

            {/* Step 5: Optional notes */}
            <div>
              <label className="block text-xs font-extrabold text-charcoal uppercase tracking-wider mb-2">
                ¿Algún requerimiento especial? (Opcional)
              </label>
              <textarea
                rows="2"
                placeholder="Vegetarianos, celíacos, horario especial, detalles del patio..."
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-craft-300 bg-[#FAF6F0] text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal resize-none"
              />
            </div>
          </div>

          {/* Right Column: Quote Summary Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-charcoal text-flour rounded-3xl p-6 sm:p-8 shadow-warm-lg border-2 border-craft-400 relative overflow-hidden">
              {/* Flame overlay glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-cometoRed/25 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-cometoYellow/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between border-b border-craft-800 pb-4 mb-6">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-extrabold text-cometoYellow">
                      Resumen del Evento
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-flour">
                      {currentPlan.name}
                    </h3>
                  </div>
                  <span className="w-10 h-10 rounded-xl bg-craft-400/20 border border-craft-400/40 flex items-center justify-center text-cometoYellow">
                    <Flame className="w-5 h-5" />
                  </span>
                </div>

                {/* Specs overview */}
                <div className="space-y-3 mb-6 text-xs sm:text-sm">
                  <div className="flex justify-between items-center text-flour/80">
                    <span>Invitados estimados:</span>
                    <strong className="text-flour font-bold">
                      {guests} personas
                    </strong>
                  </div>
                  <div className="flex justify-between items-center text-flour/80">
                    <span>Duración de servicio:</span>
                    <strong className="text-flour font-bold">
                      {estimatedServiceHours}
                    </strong>
                  </div>
                  <div className="flex justify-between items-center text-flour/80">
                    <span>Pizzas estimadas en vivo:</span>
                    <strong className="text-cometoYellow font-bold">
                      ~{estimatedPizzasCount} pizzas artesanas
                    </strong>
                  </div>
                  <div className="flex justify-between items-center text-flour/80">
                    <span>Valor por comensal:</span>
                    <strong className="text-flour font-bold">
                      ${totalPerPerson.toLocaleString("es-CL")} / persona
                    </strong>
                  </div>
                  {flatExtra > 0 && (
                    <div className="flex justify-between items-center text-flour/80">
                      <span>Equipamiento adicional:</span>
                      <strong className="text-flour font-bold">
                        +${flatExtra.toLocaleString("es-CL")}
                      </strong>
                    </div>
                  )}
                </div>

                {/* Total Big Box */}
                <div className="bg-flour/10 backdrop-blur-sm rounded-2xl p-5 border border-flour/15 mb-6 text-center">
                  <p className="text-xs uppercase font-extrabold text-craft-300 tracking-wider mb-1">
                    Presupuesto Total Estimado
                  </p>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-flour tracking-tight">
                    ${estimatedTotal.toLocaleString("es-CL")}
                    <span className="text-xs font-normal text-flour/60 block mt-0.5">
                      pesos chilenos (IVA inc.)
                    </span>
                  </div>
                </div>

                {/* Guarantees */}
                <div className="space-y-2 mb-8 text-[11px] text-flour/75">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cometoYellow shrink-0" />
                    <span>
                      Incluye montaje autónomo, hornos, vajilla compostable y
                      limpieza
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cometoYellow shrink-0" />
                    <span>
                      Masa madre 48h fermentada en frío de alta digestibilidad
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cometoYellow shrink-0" />
                    <span>Sin sorpresas de última hora ni cobros ocultos</span>
                  </div>
                </div>

                {/* Dispatch Button */}
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-cometoYellow via-cometoYellow-amber to-cometoYellow text-charcoal-black font-extrabold text-sm sm:text-base shadow-glow-yellow hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2.5 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Enviar Cotización por WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-flour/60 mt-3 font-medium">
                  Te responderemos en menos de 30 minutos para confirmar tu
                  fecha.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
