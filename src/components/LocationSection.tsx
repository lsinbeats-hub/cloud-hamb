import React from 'react';
import { MapPin, Clock, Instagram, MessageCircle, Phone, Navigation, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';

export const LocationSection: React.FC = () => {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#0a0506] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-[#7f1d1d]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#ef4444] mb-2 block">
            ONDE NOS ENCONTRAR
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wide leading-tight text-white mb-4">
            SEU PRÓXIMO BURGER ESTÁ A UMA MENSAGEM DE DISTÂNCIA.
          </h2>
          <p className="font-body text-[#b0a599] text-sm sm:text-base">
            Visite a nossa casa ou chame nossa equipe no WhatsApp para tirar dúvidas e conferir o cardápio do dia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Information Cards (Left) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="bg-[#14080a] border border-[#2b1216] rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#230d11] border border-[#481c22] flex items-center justify-center text-[#ef4444] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl uppercase tracking-wider text-white mb-1">
                    ENDEREÇO
                  </h3>
                  <p className="text-sm sm:text-base text-[#d1c7bc] font-medium leading-relaxed">
                    {SITE_CONFIG.location.address}
                  </p>
                  <p className="text-xs text-[#8c7e73] mt-0.5">
                    {SITE_CONFIG.location.city} • CEP: {SITE_CONFIG.location.postalCode}
                  </p>

                  <a
                    href={SITE_CONFIG.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ef4444] hover:text-red-400 mt-3 transition-colors uppercase tracking-wider"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>COMO CHEGAR (GOOGLE MAPS)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-[#14080a] border border-[#2b1216] rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#230d11] border border-[#481c22] flex items-center justify-center text-[#ef4444] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl uppercase tracking-wider text-white mb-3">
                    HORÁRIO DE FUNCIONAMENTO
                  </h3>
                  <div className="space-y-2">
                    {SITE_CONFIG.location.hours.map((schedule) => (
                      <div
                        key={schedule.days}
                        className="flex justify-between items-center text-xs sm:text-sm border-b border-[#250e12] pb-1.5 last:border-b-0"
                      >
                        <span className="text-[#a39588] font-medium">{schedule.days}</span>
                        <span className="text-white font-semibold">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contacts Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={getWhatsAppUrl(SITE_CONFIG.whatsapp.ctaContact)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#14080a] hover:bg-[#1f0b0f] border border-[#2b1216] hover:border-[#25D366]/50 rounded-2xl p-4 flex items-center gap-3 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#8c7e73] tracking-wider block">
                    WHATSAPP
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white block">
                    {SITE_CONFIG.whatsapp.displayNumber}
                  </span>
                </div>
              </a>

              <a
                href={SITE_CONFIG.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#14080a] hover:bg-[#1f0b0f] border border-[#2b1216] hover:border-[#ef4444]/50 rounded-2xl p-4 flex items-center gap-3 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ef4444]/10 border border-[#ef4444]/30 flex items-center justify-center text-[#ef4444] group-hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#8c7e73] tracking-wider block">
                    INSTAGRAM
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white block">
                    {SITE_CONFIG.instagram.handle}
                  </span>
                </div>
              </a>
            </div>

          </div>

          {/* Map Preview & Conversion Container (Right) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="h-full bg-[#14080a] border border-[#2b1216] rounded-3xl overflow-hidden p-3 shadow-2xl flex flex-col justify-between">
              
              {/* Real Interactive Map View */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:h-[300px] rounded-2xl overflow-hidden bg-[#180a0d] border border-[#3b171c] group">
                <iframe
                  id="location-interactive-map"
                  title="Localização CLOUD Burger House"
                  src="https://maps.google.com/maps?q=Rua+Augusta,+1492+-+Consolação,+São+Paulo+-+SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter contrast-[1.12] brightness-[0.88] hover:filter-none transition-all duration-300"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer"
                />

                {/* Top Location Pill Badge */}
                <div className="absolute top-3 left-3 pointer-events-none z-10 flex items-center gap-2 bg-[#0c0809]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#ef4444]/40 shadow-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] animate-pulse"></span>
                  <span className="font-display tracking-wider text-xs text-white uppercase font-bold">
                    CLOUD BURGER • RUA AUGUSTA, 1492
                  </span>
                </div>

                {/* Bottom Direct Maps Button */}
                <a
                  href={SITE_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 z-10 bg-[#0d0708]/90 hover:bg-[#b91c1c] text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-[#3b171c] hover:border-red-500 transition-all flex items-center gap-1.5 shadow-lg backdrop-blur-sm"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#ef4444] group-hover:text-white" />
                  <span>Abrir no Google Maps</span>
                </a>
              </div>

              {/* Big High-Converting CTA Box */}
              <div className="pt-6 pb-3 px-3 text-center">
                <h4 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white mb-2">
                  PRONTO PARA EXPERIMENTAR?
                </h4>
                <p className="text-xs sm:text-sm text-[#a89c91] mb-5 max-w-md mx-auto">
                  Sem burocracia. Chame no WhatsApp e fale com a nossa equipe em tempo real.
                </p>

                <a
                  href={getWhatsAppUrl(SITE_CONFIG.whatsapp.ctaContact)}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="location-big-whatsapp-cta"
                  className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#b91c1c] via-[#dc2626] to-[#b91c1c] hover:from-[#dc2626] hover:to-[#ef4444] text-white font-black text-base sm:text-lg uppercase tracking-wider py-4 px-6 rounded-2xl shadow-2xl shadow-red-950/80 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-red-500/40"
                >
                  <MessageCircle className="w-6 h-6 fill-white/20 animate-bounce" />
                  <span>CHAMAR NO WHATSAPP</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
