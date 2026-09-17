import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Flame, Sparkles } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { useImages } from '../context/ImageContext';

export const ExperienceSection: React.FC = () => {
  const { getImage } = useImages();
  const expImage = getImage('experience-main', SITE_CONFIG.experience.image);

  return (
    <section id="sobre" className="w-full bg-[#fcfaf6] text-[#190c0f] overflow-hidden py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Dramatic Photography of Sizzling Meat over Flames */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Glowing fiery red ambient aura behind the picture */}
            <div className="absolute -inset-4 bg-radial from-[#ff2222]/40 via-[#ef4444]/25 to-transparent rounded-[36px] blur-[35px] -z-10 animate-pulse" style={{ animationDuration: '5s' }}></div>

            <div className="relative rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(239,68,68,0.35)] border-4 border-white group">
              <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-black relative">
                <img
                  src={expImage}
                  alt="Carne artesanal grelhando na chapa em chamas na hamburgueria CLOUD"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
              </div>

              {/* Flame Badge */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full flex items-center gap-2 border border-white/20 z-20 shadow-md">
                <Flame className="w-4 h-4 text-[#ef4444]" />
                <span className="text-xs font-bold uppercase tracking-wider">CHAPA QUENTE</span>
              </div>

              {/* Smoke / Temperature label */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-[#140b0d] px-3.5 py-1.5 rounded-xl shadow-lg border border-[#e5ded4] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#dc2626]"></span>
                <span className="text-xs font-extrabold uppercase tracking-wide">
                  Ponto Suculento Garantido
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Narrative & Experience CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col items-start relative lg:pl-4"
          >
            
            {/* Stamp / Badge circular vintage identical to reference layout */}
            <div className="hidden sm:flex absolute -top-4 right-0 lg:right-6 w-24 h-24 rounded-full border-2 border-dashed border-[#b91c1c] items-center justify-center p-2 text-center rotate-6 select-none pointer-events-none">
              <div className="w-full h-full rounded-full bg-[#f8e6e5] flex flex-col items-center justify-center text-[#991b1b]">
                <span className="text-[9px] font-bold tracking-widest uppercase">PURO SABOR</span>
                <span className="font-display text-xl font-black leading-none my-0.5">EST.</span>
                <span className="font-display text-xs font-black leading-none">{SITE_CONFIG.experience.badgeYear}</span>
              </div>
            </div>

            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fce8e6] text-[#991b1b] text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{SITE_CONFIG.experience.tag}</span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#120709] tracking-tight uppercase leading-[0.92] mb-6">
              <span className="block text-[#120709]">{SITE_CONFIG.experience.titleLine1}</span>
              <span className="block text-[#b91c1c]">{SITE_CONFIG.experience.titleLine2}</span>
            </h2>

            {/* Narrative text */}
            <p className="font-body text-[#594d45] text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              {SITE_CONFIG.experience.text}
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full">
              <div className="flex items-center gap-2 text-sm text-[#2b1f1a] font-semibold">
                <span className="w-5 h-5 rounded-full bg-[#991b1b] text-white flex items-center justify-center text-xs">✓</span>
                <span>Pão brioche selado na manteiga</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#2b1f1a] font-semibold">
                <span className="w-5 h-5 rounded-full bg-[#991b1b] text-white flex items-center justify-center text-xs">✓</span>
                <span>Queijos de alta fusão</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#2b1f1a] font-semibold">
                <span className="w-5 h-5 rounded-full bg-[#991b1b] text-white flex items-center justify-center text-xs">✓</span>
                <span>Blend bovino 100% fresco</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#2b1f1a] font-semibold">
                <span className="w-5 h-5 rounded-full bg-[#991b1b] text-white flex items-center justify-center text-xs">✓</span>
                <span>Molhos autorais da casa</span>
              </div>
            </div>

            {/* CTA button leading to WhatsApp */}
            <a
              href={getWhatsAppUrl(SITE_CONFIG.whatsapp.ctaExperience)}
              target="_blank"
              rel="noopener noreferrer"
              id="experience-whatsapp-btn"
              className="inline-flex items-center gap-3 bg-[#dc2626] hover:bg-[#ef4444] text-white font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-[0_0_30px_rgba(239,68,68,0.6)] hover:shadow-[0_0_50px_rgba(255,40,40,0.95)] hover:scale-[1.02] active:scale-[0.98] transition-all border border-[#ff6666]"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>FALAR COM A CLOUD</span>
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
