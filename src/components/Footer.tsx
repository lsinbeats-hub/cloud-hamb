import React from 'react';
import { Instagram, MessageCircle, ArrowUp, RotateCcw, Camera } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { useImages } from '../context/ImageContext';

export const Footer: React.FC = () => {
  const { resetAllImages, openChangeModal } = useImages();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#070304] text-[#8c7e73] border-t border-[#1f0b0e] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#1f0b0e]">
          
          {/* Brand Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-display text-4xl sm:text-5xl tracking-widest text-white">
                {SITE_CONFIG.brandName}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#ef4444]"></span>
            </div>
            <p className="font-display tracking-widest text-xs sm:text-sm uppercase text-[#b83838]">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#c7bcaf]">
            <a href="#inicio" className="hover:text-white transition-colors">
              INÍCIO
            </a>
            <a href="#cardapio" className="hover:text-white transition-colors">
              BURGERS
            </a>
            <a href="#sobre" className="hover:text-white transition-colors">
              SOBRE
            </a>
            <a href="#contato" className="hover:text-white transition-colors">
              CONTATO
            </a>
            <a
              href={SITE_CONFIG.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ef4444] transition-colors flex items-center gap-1"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>INSTAGRAM</span>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25D366] transition-colors flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WHATSAPP</span>
            </a>
          </nav>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="w-10 h-10 rounded-full bg-[#160709] border border-[#3b171c] hover:border-[#ef4444] text-[#c7bcaf] hover:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* Bottom Copyright Row & Photo Controls */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e6157] text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.brandName} Burger House. Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              id="footer-export-photos-config"
              onClick={() => {
                openChangeModal({
                  id: 'hero-burger',
                  title: 'Painel de Fotos & Publicação',
                  defaultSrc: '/images/hero-burger.png',
                });
              }}
              className="inline-flex items-center gap-1.5 text-[11px] text-[#8c7e73] hover:text-white transition-colors py-1 px-2 rounded-md hover:bg-[#16080a]"
              title="Abrir painel para copiar código das fotos e enviar para o GitHub"
            >
              <Camera className="w-3 h-3 text-[#ef4444]" />
              <span>Copiar Fotos para GitHub</span>
            </button>

            <button
              id="footer-reset-all-photos"
              onClick={resetAllImages}
              className="inline-flex items-center gap-1.5 text-[11px] text-[#8c7e73] hover:text-[#ef4444] transition-colors py-1 px-2 rounded-md hover:bg-[#16080a]"
              title="Restaurar todas as fotos do site para o padrão original"
            >
              <RotateCcw className="w-3 h-3 text-[#ef4444]" />
              <span>Restaurar padrão</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
