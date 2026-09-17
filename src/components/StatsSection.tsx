import React from 'react';
import { Utensils, Award, Sparkles, Flame } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const StatsSection: React.FC = () => {
  const getStatIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Utensils className="w-6 h-6 text-[#fce7e7]" />;
      case 1:
        return <Flame className="w-6 h-6 text-[#fce7e7]" />;
      case 2:
        return <Sparkles className="w-6 h-6 text-[#fce7e7]" />;
      case 3:
        return <Award className="w-6 h-6 text-[#fce7e7]" />;
      default:
        return <Flame className="w-6 h-6 text-[#fce7e7]" />;
    }
  };

  return (
    <section id="por-que-cloud" className="w-full bg-[#7a1215] text-white py-12 lg:py-16 border-y border-[#991b1b] relative z-10 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#fecaca] block mb-1">
            QUALIDADE & COMPROMISSO
          </span>
          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider text-white">
            POR QUE ESCOLHER A CLOUD?
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-red-800/60">
          {SITE_CONFIG.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${
                index === 0
                  ? 'lg:pr-6'
                  : index === SITE_CONFIG.stats.length - 1
                  ? 'lg:pl-6'
                  : 'lg:px-6'
              } group`}
            >
              <div className="w-12 h-12 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                {getStatIcon(index)}
              </div>

              <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none mb-1">
                {stat.number}
              </span>

              <h4 className="font-display text-lg tracking-wider uppercase text-[#fef2f2] mb-1">
                {stat.label}
              </h4>

              <p className="text-xs text-[#fecaca] font-normal max-w-[200px] leading-relaxed">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
