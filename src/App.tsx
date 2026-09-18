import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DifferentialsBar } from './components/DifferentialsBar';
import { BurgersSection } from './components/BurgersSection';
import { ExperienceSection } from './components/ExperienceSection';
import { StatsSection } from './components/StatsSection';
import { GallerySection } from './components/GallerySection';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ImageProvider } from './context/ImageContext';

function AppContent() {
  return (
    <div className="min-h-screen bg-[#0c0809] text-[#f4efe8] font-body selection:bg-[#991b1b] selection:text-white flex flex-col relative">

      {/* 1. Sticky Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Differentials Horizontal Ribbon */}
        <DifferentialsBar />

        {/* 4. Nossos Burgers Cards */}
        <BurgersSection />

        {/* 5. Seção de Destaque / Experiência */}
        <ExperienceSection />

        {/* 6. Por que CLOUD? / Números */}
        <StatsSection />

        {/* 7. Galeria Gastronômica */}
        <GallerySection />

        {/* 8. Siga a CLOUD / Instagram */}
        <InstagramSection />

        {/* 9. Localização / Contato */}
        <LocationSection />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* 11. Floating WhatsApp Conversion Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <ImageProvider>
      <AppContent />
    </ImageProvider>
  );
}
