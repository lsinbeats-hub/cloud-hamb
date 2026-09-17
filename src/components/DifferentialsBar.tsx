import React from 'react';
import { motion } from 'motion/react';
import { Beef, Sparkles, Flame, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const DifferentialsBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Beef':
        return <Beef className="w-6 h-6 text-[#991b1b]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#991b1b]" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#991b1b]" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-[#991b1b]" />;
      default:
        return <Flame className="w-6 h-6 text-[#991b1b]" />;
    }
  };

  return (
    <section id="diferenciais" className="w-full bg-[#fdfbf7] text-[#140b0d] py-8 border-y border-[#e5ded4] relative z-20 shadow-lg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-[#e4dcd2]">
          {SITE_CONFIG.differentials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className={`flex items-center gap-4 ${
                index === 0
                  ? 'lg:pr-6'
                  : index === SITE_CONFIG.differentials.length - 1
                  ? 'lg:pl-6'
                  : 'lg:px-6'
              } group`}
            >
              <div className="w-12 h-12 rounded-full bg-[#faeae8] border border-[#f2cfcd] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#f8d7d5] transition-all duration-300">
                {getIcon(item.iconName)}
              </div>
              <div>
                <h3 className="font-display tracking-wider text-lg sm:text-xl font-bold uppercase text-[#190c0f] leading-none mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#665b53] font-medium leading-tight">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
