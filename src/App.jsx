import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-white text-blue-900">
      {/* Barra de navegación */}
      <Navbar />

      {/* Sección inicial de presentación */}
      <HeroSection />

      {/* Juegos incluidos en la app */}
      <FeaturesSection />

      {/* Planes gratuitos y de pago */}
      <PricingSection />

      {/* Opiniones de usuarios */}
      <TestimonialsSection />

      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default App;
