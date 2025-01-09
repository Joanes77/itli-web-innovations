import { Navigation } from "@/components/Navigation";
import { MarketingSection } from "@/components/MarketingSection";
import { WebDevDashboard } from "@/components/WebDevDashboard";
import { MarketingDashboard } from "@/components/MarketingDashboard";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Index = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <Navigation />
      
      {/* Hero Section - Keeping animations here */}
      <section 
        ref={heroRef}
        id="inicio" 
        className="relative h-screen flex items-center justify-center overflow-hidden px-4"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(155,135,245,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto text-center z-10">
          <h1 
            className={`text-6xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary font-['Orbitron'] tracking-tight ${
              heroInView ? 'animate-fade-in' : 'opacity-0'
            }`}
            translate="no"
          >
            ITLI
          </h1>
          <p 
            className={`text-2xl md:text-3xl mb-8 text-gray-300 font-light ${
              heroInView ? 'animate-slide-in' : 'opacity-0'
            }`}
          >
            Internet Technologies & Leading Integrations
          </p>
          <p 
            className={`text-xl md:text-2xl mb-12 text-primary italic ${
              heroInView ? 'animate-slide-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            Innovamos tu mundo web
          </p>
          <a
            href="#servicios"
            className="inline-flex items-center px-8 py-4 bg-[#1A1F2C] text-white rounded-full hover-scale color-transition"
          >
            Descubre nuestros servicios
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Services Dashboards - Removed entrance animations */}
      <div id="servicios" className="bg-black">
        <WebDevDashboard />
        <MarketingDashboard />
      </div>

      {/* Marketing Section - Removed entrance animations */}
      <div className="bg-black">
        <MarketingSection />
      </div>

      {/* Contact Section - Removed entrance animations */}
      <section id="contacto" className="min-h-screen py-20 px-4 bg-gradient-to-t from-black via-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Contáctanos</h2>
          <p className="text-gray-400 mb-8 text-xl">
            ¿Listo para llevar tu negocio al siguiente nivel? Contáctanos hoy mismo.
          </p>
          <a
            href="mailto:contacto@itli.com"
            className="inline-flex items-center px-8 py-4 bg-[#4A148C] text-white rounded-full hover-scale color-transition"
          >
            Enviar mensaje
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
