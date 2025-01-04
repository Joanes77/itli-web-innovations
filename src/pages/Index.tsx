import { Navigation } from "@/components/Navigation";
import { MarketingSection } from "@/components/MarketingSection";
import { ArrowRight, Code, Megaphone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            ITLI
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Internet Technologies & Leading Integrations
          </p>
          <p className="text-lg md:text-xl mb-12 text-primary">
            Innovamos tu mundo web
          </p>
          <a
            href="#servicios"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            Descubre nuestros servicios
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-black/60 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Desarrollo Web</h3>
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
            <div className="p-6 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-black/60 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Megaphone className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Marketing Digital</h3>
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
      <section id="contacto" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contáctanos</h2>
          <p className="text-gray-400 mb-8">
            ¿Listo para llevar tu negocio al siguiente nivel? Contáctanos hoy mismo.
          </p>
          <a
            href="mailto:contacto@itli.com"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
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