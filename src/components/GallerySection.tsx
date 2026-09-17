import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X, Maximize2, Sparkles } from 'lucide-react';
import { SITE_CONFIG, GalleryItem } from '../config/siteConfig';
import { useImages } from '../context/ImageContext';

export const GallerySection: React.FC = () => {
  const { getImage } = useImages();
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-[#0b0607] text-[#f4efe8] relative overflow-hidden">
      {/* Background intense red glows */}
      <div className="absolute top-1/3 right-10 w-[750px] h-[750px] bg-radial from-[#ff2222]/35 via-[#ef4444]/20 via-[#7f1d1d]/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '6s' }}></div>
      <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-radial from-[#ff3333]/25 via-[#dc2626]/15 to-transparent rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#ff2222]/15 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title - Animated on Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#200a0d] border border-[#ef4444]/60 text-[#ef4444] text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_20px_rgba(239,68,68,0.4)]">
            <Camera className="w-3.5 h-3.5 text-[#ff4444]" />
            <span>FOTOGRAFIA GASTRONÔMICA</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide uppercase leading-tight">
            DETALHES QUE DESPERTAM DESEJO.
          </h2>
          <p className="font-body text-[#b0a599] text-sm sm:text-base mt-3">
            Hambúrgueres artesanais com queijo derretido, ponto suculento e pão brioche dourado na chapa. Cada detalhe pensado para despertar seu apetite.
          </p>
        </motion.div>

        {/* Desktop Asymmetric Bento Grid / Mobile Horizontal Carousel */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SITE_CONFIG.gallery.map((item, index) => {
            // Asymmetric spans for visual interest
            const isTall = index === 0 || index === 3;
            const currentImg = getImage(`gallery-${item.id}`, item.image);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                onClick={() => setActivePhoto(item)}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer border border-[#2b1216] hover:border-[#ff4444] bg-[#14080a] shadow-xl hover:shadow-[0_0_35px_rgba(255,40,40,0.6)] transition-colors transition-shadow duration-300 transform-gpu ${
                  isTall ? 'sm:row-span-1 lg:row-span-1 h-[320px]' : 'h-[320px]'
                }`}
              >
                <img
                  src={currentImg}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform group-hover:scale-106 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0608]/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none"></div>

                {/* Hover Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-90 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#0d0708]/80 text-[#ef4444] border border-[#3b171c]">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-white uppercase tracking-wider leading-none">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Horizontal Carousel */}
        <div className="sm:hidden flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory scrollbar-none">
          {SITE_CONFIG.gallery.map((item) => {
            const currentImg = getImage(`gallery-${item.id}`, item.image);
            return (
              <div
                key={item.id}
                onClick={() => setActivePhoto(item)}
                className="shrink-0 w-[82vw] snap-center rounded-2xl overflow-hidden relative aspect-[4/3] border border-[#2b1216] bg-[#14080a] shadow-lg active:scale-98 transition-transform"
              >
                <img
                  src={currentImg}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0608]/90 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#ef4444] block mb-0.5">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg text-white uppercase tracking-wider">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal with Fluid Springs */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="relative max-w-4xl w-full bg-[#120709] rounded-2xl overflow-hidden border border-[#481c22] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActivePhoto(null)}
                aria-label="Fechar foto"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#b91c1c] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] bg-black relative">
                <img
                  src={getImage(`gallery-${activePhoto.id}`, activePhoto.image)}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-5 flex flex-wrap items-center justify-between bg-[#120709] gap-4">
                <div>
                  <span className="text-xs uppercase font-bold text-[#ef4444] tracking-wider block">
                    {activePhoto.category}
                  </span>
                  <h4 className="font-display text-2xl text-white uppercase tracking-wider">
                    {activePhoto.title}
                  </h4>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#a39487]">
                  <Sparkles className="w-4 h-4 text-[#ef4444]" />
                  <span>Padrão Artesanal CLOUD</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
