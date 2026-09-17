import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, Star, Flame } from 'lucide-react';
import { SITE_CONFIG, BurgerItem, getBurgerWhatsAppUrl, getWhatsAppUrl } from '../config/siteConfig';
import { useImages } from '../context/ImageContext';

export const BurgersSection: React.FC = () => {
  const { getImage } = useImages();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.offsetWidth * 0.75;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(newIndex, SITE_CONFIG.burgers.length - 1));
    }
  };

  const scrollToBurger = (index: number) => {
    if (scrollContainerRef.current) {
      const cards = scrollContainerRef.current.children;
      if (cards[index]) {
        (cards[index] as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
        setActiveIndex(index);
      }
    }
  };

  return (
    <section id="cardapio" className="py-20 lg:py-28 bg-[#0c0708] relative overflow-hidden">
      {/* Background rich red glow accents matching the dark aesthetic */}
      <div className="absolute top-1/3 left-1/4 w-[750px] h-[750px] bg-radial from-[#ff2222]/35 via-[#ef4444]/20 via-[#7f1d1d]/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '6s' }}></div>
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-radial from-[#ff3333]/30 via-[#dc2626]/20 to-transparent rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#ff2222]/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Animated on scroll */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-14 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#ef4444] mb-2.5">
              <Flame className="w-4 h-4 text-[#ff4444] drop-shadow-[0_0_8px_#ff2222]" />
              <span className="drop-shadow-[0_0_12px_rgba(255,50,50,0.7)]">CARDÁPIO SIGNATURE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide uppercase leading-none">
              BURGERS QUE FAZEM DIFERENÇA.
            </h2>
            <p className="font-body text-[#b0a599] text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
              Receitas autorais preparadas com blend fresco moído diariamente, queijo derretido de verdade e pão brioche dourado na chapa.
            </p>
          </div>

          {/* Direct WhatsApp Call to Action Button */}
          <div className="shrink-0">
            <a
              href={getWhatsAppUrl(SITE_CONFIG.whatsapp.ctaHero)}
              target="_blank"
              rel="noopener noreferrer"
              id="burgers-header-whatsapp"
              className="inline-flex items-center gap-2.5 bg-[#1a0c0f] hover:bg-[#ef4444] border border-[#ff4444]/60 hover:border-[#ff6666] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(239,68,68,0.5)] hover:shadow-[0_0_45px_rgba(255,40,40,0.9)] group"
            >
              <span>FAZER PEDIDO NO WHATSAPP</span>
              <ArrowRight className="w-4 h-4 text-[#ef4444] group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </motion.div>

        {/* Cohesive Cards Showcase - Desktop 5-column grid / Smooth mobile touch snap */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-5 gap-4 lg:gap-3.5 xl:gap-4 overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SITE_CONFIG.burgers.map((burger: BurgerItem, index: number) => {
            const isBestSeller = burger.isBestSeller;
            const whatsappUrl = getBurgerWhatsAppUrl(burger.name);
            const currentImage = getImage(`burger-${burger.id}`, burger.image);

            return (
              <motion.div
                key={burger.id}
                id={`card-${burger.id}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className={`snap-center shrink-0 w-[270px] sm:w-[290px] md:w-[300px] lg:w-full flex flex-col justify-between rounded-2xl p-4 transition-colors transition-shadow duration-300 transform-gpu group relative ${
                  isBestSeller
                    ? 'bg-gradient-to-b from-[#2a0b10] via-[#1a080b] to-[#120507] border-2 border-[#ff3333] shadow-[0_0_35px_rgba(255,40,40,0.45)] ring-2 ring-red-500/60 hover:shadow-[0_0_55px_rgba(255,40,40,0.75)] hover:border-[#ff6666]'
                    : 'bg-[#130709] border border-[#301217] hover:border-[#ff4444] hover:bg-[#1a0a0e] shadow-xl hover:shadow-[0_0_35px_rgba(255,40,40,0.5)]'
                }`}
              >
                <div>
                  {/* Burger Image Container */}
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-[#090405] border border-[#220d10] group/img">
                    <img
                      src={currentImage}
                      alt={burger.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transform group-hover:scale-106 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#130709]/80 via-transparent to-transparent pointer-events-none"></div>

                    {/* Best Seller Badge - Posicionado em destaque diretamente à frente da imagem */}
                    {isBestSeller && (
                      <div className="absolute top-2.5 left-2.5 z-30 bg-[#ef4444] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5 shadow-[0_0_15px_#ff2222] border border-white/20 backdrop-blur-sm">
                        <Star className="w-3 h-3 fill-white" />
                        <span>MAIS PEDIDO</span>
                      </div>
                    )}

                    {/* Weight badge */}
                    {burger.weight && (
                      <span className="absolute bottom-2 left-2 z-20 bg-[#0a0506]/90 backdrop-blur-sm text-[10px] font-bold text-[#f0e6dc] px-2 py-0.5 rounded-md border border-[#3b171c]">
                        {burger.weight}
                      </span>
                    )}
                  </div>

                  {/* Burger Info */}
                  <div className="space-y-1.5 mb-4">
                    <h3 className="font-display text-2xl lg:text-[22px] xl:text-2xl tracking-wide text-white uppercase group-hover:text-[#ef4444] transition-colors leading-none">
                      {burger.name}
                    </h3>
                    <p className="font-body text-xs text-[#a89c91] leading-relaxed line-clamp-2 min-h-[34px]">
                      {burger.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Price & Direct WhatsApp Action */}
                <div className="pt-3 border-t border-[#240e12] flex items-center justify-between gap-2 mt-auto">
                  <div>
                    <span className="text-[10px] text-[#8c7f75] uppercase block font-semibold leading-none mb-1">
                      Preço
                    </span>
                    <span className="font-display text-2xl text-white tracking-wider leading-none">
                      {burger.price}
                    </span>
                  </div>

                  {/* Direct WhatsApp Call Button */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`btn-order-${burger.id}`}
                    aria-label={`Pedir ${burger.name} pelo WhatsApp`}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-md ${
                      isBestSeller
                        ? 'bg-[#ef4444] hover:bg-[#ff2222] text-white shadow-[0_0_15px_rgba(239,68,68,0.6)] hover:shadow-[0_0_30px_rgba(255,40,40,0.9)]'
                        : 'bg-[#200c0f] hover:bg-[#ef4444] text-[#f7f2ea] hover:text-white border border-[#3d151a] hover:border-[#ff4444] hover:shadow-[0_0_20px_rgba(239,68,68,0.7)]'
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>PEDIR</span>
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Mobile Pagination Indicators (replaces the disconnected arrows with cohesive indicators) */}
        <div className="flex lg:hidden items-center justify-center gap-2 mt-4">
          {SITE_CONFIG.burgers.map((burger, idx) => (
            <button
              key={burger.id}
              onClick={() => scrollToBurger(idx)}
              aria-label={`Ver ${burger.name}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-6 bg-[#ef4444]' : 'w-1.5 bg-[#3d181e]'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
