import React, { useState, useEffect } from 'react';
import { MessageCircle, Instagram, Menu, X, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'INÍCIO', href: '#inicio' },
    { label: 'CARDÁPIO', href: '#cardapio' },
    { label: 'SOBRE', href: '#sobre' },
    { label: 'CONTATO', href: '#contato' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d0708]/95 backdrop-blur-md py-3.5 shadow-2xl border-b border-[#2d1216]/80'
          : 'bg-gradient-to-b from-[#0c0809]/95 via-[#0c0809]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Nome */}
        <a
          href="#inicio"
          id="header-logo-link"
          className="group flex items-center gap-2 text-decoration-none"
        >
          <span className="font-display text-3xl sm:text-4xl tracking-widest text-white transition-colors group-hover:text-[#ef4444]">
            {SITE_CONFIG.brandName}
          </span>
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#ff2222] shadow-[0_0_14px_#ff2222] animate-pulse"></span>
        </a>

        {/* Desktop Menu */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase()}`}
              className="text-xs lg:text-sm font-semibold tracking-widest text-[#d8cfc4] hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ef4444] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Icons & CTA */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Instagram Icon */}
          <a
            href={SITE_CONFIG.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            id="header-instagram-btn"
            aria-label="Instagram da CLOUD"
            className="w-9 h-9 rounded-full bg-[#1b0d10] border border-[#3b171c] flex items-center justify-center text-[#d8cfc4] hover:text-white hover:border-[#ef4444] hover:bg-[#2e1015] transition-all"
          >
            <Instagram className="w-4 h-4" />
          </a>

          {/* WhatsApp Direct Icon */}
          <a
            href={getWhatsAppUrl(SITE_CONFIG.whatsapp.ctaHero)}
            target="_blank"
            rel="noopener noreferrer"
            id="header-whatsapp-icon-btn"
            aria-label="WhatsApp da CLOUD"
            className="w-9 h-9 rounded-full bg-[#1b0d10] border border-[#3b171c] flex items-center justify-center text-[#25D366] hover:text-white hover:border-[#25D366] hover:bg-[#25D366]/20 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* Main WhatsApp CTA */}
          <a
            href={getWhatsAppUrl(SITE_CONFIG.whatsapp.ctaHero)}
            target="_blank"
            rel="noopener noreferrer"
            id="header-whatsapp-cta"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#dc2626] to-[#ef4444] hover:from-[#ef4444] hover:to-[#ff2222] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.65)] hover:shadow-[0_0_35px_rgba(255,40,40,0.95)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-[#ff6666]"
          >
            <MessageCircle className="w-4 h-4 text-white fill-white/10 group-hover:scale-110 transition-transform" />
            <span>CHAMAR NO WHATSAPP</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-3">
          <a
            href={getWhatsAppUrl(SITE_CONFIG.whatsapp.ctaHero)}
            target="_blank"
            rel="noopener noreferrer"
            id="mobile-quick-whatsapp"
            aria-label="WhatsApp"
            className="w-9 h-9 rounded-full bg-[#25D366] text-black flex items-center justify-center shadow-md active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
          </a>
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="w-10 h-10 rounded-lg bg-[#1b0d10] border border-[#3b171c] flex items-center justify-center text-white active:scale-95"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="sm:hidden bg-[#0e0709] border-b border-[#2d1216] px-6 py-6 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold tracking-wider text-[#e6ded5] hover:text-[#ef4444] py-2 border-b border-[#230f13] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#8a7a70]" />
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={getWhatsAppUrl(SITE_CONFIG.whatsapp.ctaHero)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-[#b91c1c] hover:bg-[#dc2626] text-white font-bold text-center py-3.5 px-4 rounded-xl text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-red-950/60"
            >
              <MessageCircle className="w-5 h-5" />
              <span>CHAMAR NO WHATSAPP</span>
            </a>

            <div className="flex items-center justify-center gap-4 pt-2">
              <a
                href={SITE_CONFIG.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#b5a99e] hover:text-white py-1"
              >
                <Instagram className="w-4 h-4 text-[#ef4444]" />
                <span>{SITE_CONFIG.instagram.handle}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
