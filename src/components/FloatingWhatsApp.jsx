import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Contacto directo"
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        href="https://wa.me/56949869112?text=Hola%20ComeTocino!%20Me%20gustar%C3%ADa%20cotizar%20un%20servicio%20de%20pizza%20catering%20para%20un%20evento."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp para cotizar evento"
        className="group flex items-center gap-3 bg-[#25D366] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/40"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-cometoRed rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-cometoRed rounded-full border border-white" />
        </div>
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-[11px] font-medium leading-none opacity-90">
            ¿Cotizas un evento?
          </span>
          <span className="text-xs font-black tracking-wide leading-tight">
            Habla con nosotros
          </span>
        </div>
      </a>
    </aside>
  );
}
