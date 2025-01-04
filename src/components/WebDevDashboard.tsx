import { Code, Globe, Server } from "lucide-react";
import { useInView } from "react-intersection-observer";

export const WebDevDashboard = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Comentario: Esta sección contiene los servicios de desarrollo web
  return (
    <section ref={ref} className="min-h-screen py-20 px-4 bg-gradient-to-br from-black via-blue-900/20 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Título de la sección */}
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 transform transition-all duration-700 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          Servicios de Desarrollo Web
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Imagen del servicio */}
          <div className={`transform transition-all duration-700 delay-100 ${
            inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Desarrollo Web" 
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
          </div>
          
          {/* Tarjetas de servicios */}
          <div className={`space-y-6 transform transition-all duration-700 delay-200 ${
            inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {/* Servicio 1: Frontend */}
            <div className="p-6 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Desarrollo Frontend</h3>
              <p className="text-gray-400">Creamos interfaces modernas y responsivas utilizando las últimas tecnologías.</p>
            </div>
            
            {/* Servicio 2: Backend */}
            <div className="p-6 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Desarrollo Backend</h3>
              <p className="text-gray-400">Implementamos APIs robustas y escalables para tu aplicación.</p>
            </div>
            
            {/* Servicio 3: Despliegue */}
            <div className="p-6 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg hover:shadow-green-500/20 cursor-pointer">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Despliegue y Mantenimiento</h3>
              <p className="text-gray-400">Nos encargamos del hosting, dominio y mantenimiento continuo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};