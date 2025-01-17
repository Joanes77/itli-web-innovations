import { BarChart, Target, TrendingUp } from "lucide-react";
import { useInView } from "react-intersection-observer";

export const MarketingDashboard = () => {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 bg-gradient-to-br from-black via-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Servicios de Marketing Digital
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Marketing Estratégico</h3>
              <p className="text-gray-400">Desarrollamos estrategias personalizadas para alcanzar tus objetivos.</p>
            </div>
            
            <div className="p-6 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg hover:shadow-pink-500/20 cursor-pointer">
              <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Análisis y Optimización</h3>
              <p className="text-gray-400">Monitoreamos y optimizamos constantemente tus campañas.</p>
            </div>
            
            <div className="p-6 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg hover:shadow-orange-500/20 cursor-pointer">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reportes y Métricas</h3>
              <p className="text-gray-400">Informes detallados del rendimiento de tus campañas.</p>
            </div>
          </div>
          
          <div className="order-first md:order-last">
            <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Marketing Digital" 
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
