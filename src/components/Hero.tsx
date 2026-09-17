import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { MessageCircle, ArrowRight, Flame, Star, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { useImages } from '../context/ImageContext';

export const Hero: React.FC = () => {
  const { getImage } = useImages();
  const heroBurgerImage = getImage('hero-burger', '/images/hero-burger.png');

  // Ultra-fluid 60-120fps Cursor 3D Tilt without triggering React re-renders
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 22, stiffness: 160, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] pt-24 pb-16 lg:pt-32 lg:pb-24 flex items-center overflow-hidden bg-[#0a0506]"
    >
      {/* Intense static ambient background glow - GPU cached, zero redraw penalty */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] sm:w-[1250px] h-[650px] sm:h-[850px] bg-radial from-[#ff2222]/35 via-[#ef4444]/20 via-[#991b1b]/15 to-transparent rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-radial from-[#ff1a1a]/30 via-[#dc2626]/15 to-transparent rounded-full blur-[90px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-radial from-[#ff3333]/25 via-[#7f1d1d]/15 to-transparent rounded-full blur-[100px] pointer-events-none -z-10"></div>


      {/* Floating fiery ember particles in the background with bright neon glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <span className="absolute top-1/4 left-[8%] w-2.5 h-2.5 rounded-full bg-[#ff2222] blur-[0.5px] animate-pulse shadow-[0_0_18px_#ff2222]"></span>
        <span className="absolute top-1/3 right-[18%] w-3 h-3 rounded-full bg-[#ff5555] blur-[0.5px] animate-ping shadow-[0_0_22px_#ff2222]" style={{ animationDuration: '2.8s' }}></span>
        <span className="absolute bottom-1/3 left-[28%] w-2 h-2 rounded-full bg-[#ff3333] blur-[0.5px] shadow-[0_0_14px_#ff3333]"></span>
        <span className="absolute top-2/3 right-[10%] w-2.5 h-2.5 rounded-full bg-[#ff2222] blur-[0.5px] animate-pulse shadow-[0_0_16px_#ff2222]"></span>
        <span className="absolute bottom-1/4 right-[35%] w-2 h-2 rounded-full bg-[#fca5a5] blur-[0.5px] shadow-[0_0_12px_#ff3333]"></span>
        <span className="absolute top-1/6 right-[40%] w-1.5 h-1.5 rounded-full bg-[#ff4444] shadow-[0_0_10px_#ff2222]"></span>
        <span className="absolute bottom-1/5 left-[15%] w-2 h-2 rounded-full bg-[#ff2222] animate-pulse shadow-[0_0_14px_#ff2222]"></span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: High-Impact Typography & Conversion Focus */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start z-10">
            
            {/* Live Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1e0a0d] border border-[#ef4444]/80 text-xs sm:text-sm font-semibold text-[#f0e6dc] mb-4 shadow-[0_0_25px_rgba(239,68,68,0.6)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3333] opacity-85"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff2222] shadow-[0_0_10px_#ff2222]"></span>
              </span>
              <span className="uppercase tracking-wider text-[11px] sm:text-xs font-bold text-[#f7e6e8]">
                CHAPA QUENTE • BLEND ARTESANAL 180G
              </span>
            </motion.div>

            {/* Main Headline with Modern Typography */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl xl:text-8xl tracking-tight text-white uppercase leading-[0.92] sm:leading-[0.88] mb-4">
                O VERDADEIRO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] via-[#ff8888] to-[#ff2222] drop-shadow-[0_0_35px_rgba(255,50,50,0.9)] drop-shadow-[0_0_75px_rgba(239,68,68,0.7)]">
                  BURGER
                </span>{' '}
                ARTESANAL.
              </h1>
            </motion.div>

            {/* Persuasive Body Text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-[#b8aba0] text-base sm:text-lg leading-relaxed max-w-xl mb-7"
            >
              Blend suculento de 180g fresco moído diariamente, queijo cheddar cremoso derretido na chapa e pão brioche dourado na manteiga. Sabor autêntico e inesquecível em cada mordida.
            </motion.p>

            {/* CTAs Button Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8"
            >
              <a
                href={getWhatsAppUrl(SITE_CONFIG.whatsapp.ctaHero)}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-primary-whatsapp-btn"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#b91c1c] via-[#dc2626] to-[#b91c1c] hover:from-[#dc2626] hover:to-[#ef4444] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider px-8 py-4 rounded-full shadow-lg shadow-red-950/60 hover:shadow-[0_0_22px_rgba(239,68,68,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-red-500/35"
              >
                <MessageCircle className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
                <span>PEDIR PELO WHATSAPP</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href="#cardapio"
                id="hero-secondary-btn"
                className="inline-flex items-center justify-center gap-2 bg-[#17090b] hover:bg-[#280f13] border border-[#ef4444]/60 hover:border-[#ff4444] text-[#f4efe8] font-bold text-sm sm:text-base uppercase tracking-wider px-7 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]"
              >
                <span>VER CARDÁPIO</span>
              </a>
            </motion.div>

            {/* Trust Proof Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 sm:gap-6 pt-5 border-t border-[#260e12] w-full max-w-lg"
            >
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#ef4444] shrink-0" />
                <span className="text-xs text-[#a39488] font-medium leading-tight">
                  <strong className="text-white block text-xs sm:text-sm font-semibold">180g Blend</strong>
                  Fresco & Artesanal
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#ef4444] fill-[#ef4444] shrink-0" />
                <span className="text-xs text-[#a39488] font-medium leading-tight">
                  <strong className="text-white block text-xs sm:text-sm font-semibold">4.9 Estrelas</strong>
                  +1.200 Pedidos
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#ef4444] shrink-0" />
                <span className="text-xs text-[#a39488] font-medium leading-tight">
                  <strong className="text-white block text-xs sm:text-sm font-semibold">Rápido</strong>
                  Quentinho até você
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Dynamic Transparent PNG Burger with Levitation & Floating Badges */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-center justify-center relative mt-6 lg:mt-0">
            
            {/* Center levitating burger assembly */}
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[500px]">

              {/* Radiant backlight red glow behind the burger - GPU cached static texture */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] sm:w-[560px] h-[440px] sm:h-[560px] rounded-full blur-[75px] pointer-events-none -z-10 bg-radial from-[#ff2222]/65 via-[#ef4444]/35 via-[#991b1b]/20 to-transparent" />
              
              {/* Inner high-intensity fiery core glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full blur-[40px] pointer-events-none -z-10 bg-[#ff2222]/55" />

              {/* Glowing spinning celestial aura ring behind burger */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] rounded-full border border-[#ff4444]/35 shadow-[0_0_50px_rgba(255,50,50,0.4)] pointer-events-none -z-10 animate-spin"
                style={{ animationDuration: '30s' }}
              />

              {/* Butter-Smooth Hardware-Accelerated Floating & 3D Tilt Burger Assembly */}
              <div className="animate-burger-float relative z-10 flex flex-col items-center justify-center">
                <motion.div
                  id="hero-burger-floating-container"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    rotateX,
                    rotateY,
                    perspective: 1000,
                    transformStyle: 'preserve-3d',
                  }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                  className="relative z-10 flex flex-col items-center justify-center cursor-grab active:cursor-grabbing select-none"
                >
                  <img
                    id="hero-burger-image"
                    src={heroBurgerImage}
                    alt="Hambúrguer artesanal suculento CLOUD em alta definição"
                    referrerPolicy="no-referrer"
                    style={{
                      filter: 'drop-shadow(0 22px 35px rgba(0,0,0,0.92)) drop-shadow(0 0 35px rgba(255,40,40,0.65)) drop-shadow(0 0 70px rgba(220,38,38,0.35))',
                    }}
                    className="w-full max-w-[460px] h-auto object-contain select-none pointer-events-none transform-gpu"
                  />
                </motion.div>

                {/* Synchronized Ground Shadow */}
                <div
                  id="hero-burger-ground-shadow"
                  className="animate-shadow-pulse w-[75%] h-7 bg-black/95 rounded-[100%] blur-xl -mt-5 pointer-events-none shadow-[0_0_40px_rgba(255,40,40,0.5)] transform-gpu"
                />
              </div>

              {/* Floating Glassmorphism Badge 1 - Top Left */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.3,
                }}
                className="absolute -top-3 -left-2 sm:-left-6 z-20 bg-[#150709]/90 backdrop-blur-md border border-[#ff4444]/60 p-3 rounded-2xl shadow-[0_0_35px_rgba(239,68,68,0.5)] flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ef4444] to-[#b91c1c] flex items-center justify-center text-white shadow-[0_0_15px_#ff2222]">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-[#ff8888] uppercase font-bold tracking-wider block leading-none">
                    BLEND SIGNATURE
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-white leading-tight block mt-0.5">
                    180g Selado na Brasa
                  </span>
                </div>
              </motion.div>

              {/* Floating Glassmorphism Badge 2 - Bottom Right */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.8,
                }}
                className="absolute -bottom-2 -right-2 sm:-right-4 z-20 bg-[#150709]/90 backdrop-blur-md border border-[#ff4444]/60 p-3 rounded-2xl shadow-[0_0_35px_rgba(239,68,68,0.5)] flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#200a0d] border border-[#ff4444]/80 flex items-center justify-center text-[#ff3333] shadow-[0_0_15px_rgba(255,40,40,0.6)]">
                  <Star className="w-5 h-5 fill-[#ff3333]" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs sm:text-sm font-black text-white leading-none">
                      4.9 / 5.0
                    </span>
                    <span className="text-[10px] text-[#22c55e] font-bold">★ Excelente</span>
                  </div>
                  <span className="text-[10px] text-[#ff8888] uppercase font-bold tracking-wider block mt-0.5">
                    Mais de 1.200 clientes
                  </span>
                </div>
              </motion.div>

              {/* Floating Badge 3 - Pill on Bottom Left */}
              <motion.div
                animate={{ x: [-4, 4, -4] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.2,
                }}
                className="absolute top-1/2 -left-4 sm:-left-8 z-20 hidden sm:flex items-center gap-2 bg-[#120507]/90 backdrop-blur-md border border-[#ff4444]/60 px-3 py-1.5 rounded-full shadow-[0_0_25px_rgba(239,68,68,0.45)]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#ff4444]" />
                <span className="text-[11px] font-bold text-[#f0e6dc] tracking-wide">
                  Pão Brioche Selado
                </span>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
