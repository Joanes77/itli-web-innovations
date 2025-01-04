import { Navigation } from "@/components/Navigation";
import { MarketingSection } from "@/components/MarketingSection";
import { ArrowRight, Code, Megaphone } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Index = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        id="inicio" 
        className="relative h-screen flex items-center justify-center overflow-hidden px-4"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(155,135,245,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto text-center z-10">
          <h1 
            className={`text-6xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary font-['Orbitron'] tracking-tight transform transition-all duration-1000 ${
              heroInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            ITLI
          </h1>
          <p 
            className={`text-2xl md:text-3xl mb-8 text-gray-300 font-light transform transition-all duration-1000 delay-200 ${
              heroInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Internet Technologies & Leading Integrations
          </p>
          <p 
            className={`text-xl md:text-2xl mb-12 text-primary italic transform transition-all duration-1000 delay-300 ${
              heroInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Innovamos tu mundo web
          </p>
          <a
            href="#servicios"
            className={`inline-flex items-center px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all hover:scale-105 transform hover:shadow-lg hover:shadow-primary/50 ${
              heroInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Descubre nuestros servicios
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesRef}
        id="servicios" 
        className="relative min-h-screen py-20 px-4"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-black/60 transition-all hover:scale-105 transform animate-fade-in delay-200">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Desarrollo Web</h3>
              <p className="text-gray-400 mb-4">
                Creamos sitios web profesionales y personalizados para tu negocio o empresa,
                con diseño responsive y optimizado para motores de búsqueda.
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                Saber más <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="p-8 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-black/60 transition-all hover:scale-105 transform animate-fade-in delay-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <Megaphone className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Marketing Digital</h3>
              <p className="text-gray-400 mb-4">
                Potenciamos tu presencia online con estrategias de marketing digital
                efectivas para aumentar tus ventas y alcance.
              </p>
              <a
                href="#marketing"
                className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors"
              >
                Ver planes <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Section */}
      <MarketingSection />

      {/* Contact Section */}
      <section id="contacto" className="min-h-screen py-20 px-4 bg-gradient-to-t from-black via-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Contáctanos</h2>
          <p className="text-gray-400 mb-8 text-xl">
            ¿Listo para llevar tu negocio al siguiente nivel? Contáctanos hoy mismo.
          </p>
          <a
            href="mailto:contacto@itli.com"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all hover:scale-105 transform"
          >
            Enviar mensaje
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
