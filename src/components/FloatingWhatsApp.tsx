import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside
      aria-label="Atendimento WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-6 duration-500"
    >
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#120709]/95 text-white text-xs font-semibold py-2 px-3.5 rounded-2xl border border-[#481c22] shadow-2xl backdrop-blur-md relative animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
          <span>Peça direto no WhatsApp!</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Fechar dica"
            className="text-[#8c7e73] hover:text-white ml-1 p-0.5"
          >
            <X className="w-3 h-3" />
          </button>
          {/* Arrow */}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-[#481c22]"></div>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsAppUrl(SITE_CONFIG.whatsapp.defaultMessage)}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        aria-label="Conversar com a CLOUD no WhatsApp"
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-green-950/60 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-70 animate-ping -z-10"></span>

        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />

        {/* Status notification dot */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-[#ef4444] border-2 border-[#120709] rounded-full"></span>
      </a>
    </aside>
  );
};
