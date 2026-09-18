import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { useImages } from '../context/ImageContext';

export const InstagramSection: React.FC = () => {
  const { getImage } = useImages();

  return (
    <section id="instagram" className="py-20 bg-[#120709] text-white border-t border-[#2d1216] relative overflow-hidden">
      {/* Background rich red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-radial from-[#ff2222]/35 via-[#ef4444]/20 via-[#7f1d1d]/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '6s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Animated on Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ef4444] mb-2">
              <Instagram className="w-4 h-4 text-[#ff4444] drop-shadow-[0_0_6px_#ff2222]" />
              <span className="drop-shadow-[0_0_10px_rgba(255,50,50,0.7)]">{SITE_CONFIG.instagram.handle}</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide uppercase leading-none">
              SIGA A CLOUD
            </h2>
            <p className="font-body text-[#b0a599] text-sm sm:text-base mt-3 max-w-lg">
              Mais burgers, bastidores e novidades direto no nosso Instagram. Acompanhe a nossa rotina na chapa e lançamentos exclusivos.
            </p>
          </div>

          <a
            href={SITE_CONFIG.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            id="instagram-follow-btn"
            className="inline-flex items-center gap-2 bg-[#200c10] hover:bg-[#ef4444] text-[#f4efe8] hover:text-white border border-[#ff4444]/60 hover:border-[#ff6666] px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_40px_rgba(255,40,40,0.85)] group shrink-0"
          >
            <Instagram className="w-4 h-4 text-[#ef4444] group-hover:text-white transition-colors" />
            <span>SEGUIR NO INSTAGRAM</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Instagram Grid (4 photos) - Animated on Scroll */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SITE_CONFIG.instagramFeed.map((post, index) => {
            const currentImg = getImage(`insta-${post.id}`, post.image);

            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="relative aspect-square rounded-2xl overflow-hidden group border border-[#2b1216] hover:border-[#ff4444] bg-[#1a0c0f] shadow-lg hover:shadow-[0_0_30px_rgba(255,40,40,0.6)] transition-colors transition-shadow duration-300 transform-gpu"
              >
                <img
                  src={currentImg}
                  alt={post.caption}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />

                {/* Instagram Hover Overlay */}
                <a
                  href={SITE_CONFIG.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-[#0d0708]/85 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between z-10"
                >
                  <div className="flex items-center justify-start pointer-events-none">
                    <Instagram className="w-5 h-5 text-[#ef4444]" />
                  </div>

                  <p className="text-xs text-[#d6ccc2] line-clamp-3 font-medium pointer-events-none">
                    {post.caption}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-bold text-white pt-2 border-t border-[#3b171c] pointer-events-none">
                    <div className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-[#ef4444] text-[#ef4444]" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
