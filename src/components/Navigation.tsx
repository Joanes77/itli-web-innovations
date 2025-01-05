import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    window.location.href = '#inicio';
  };

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 cursor-pointer" onClick={handleLogoClick}>
              <img 
                src="/lovable-uploads/dc416805-31b7-41c6-a97e-0d382a63b065.png" 
                alt="ITLI Logo" 
                className="w-16 h-16 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a href="#inicio" className="text-gray-300 hover:text-white px-4 py-3 rounded-md text-lg font-medium tracking-wide transition-colors duration-300">
                Inicio
              </a>
              <a href="#servicios" className="text-gray-300 hover:text-white px-4 py-3 rounded-md text-lg font-medium tracking-wide transition-colors duration-300">
                Servicios
              </a>
              <a href="#marketing" className="text-gray-300 hover:text-white px-4 py-3 rounded-md text-lg font-medium tracking-wide transition-colors duration-300">
                Marketing
              </a>
              <a href="#contacto" className="text-gray-300 hover:text-white px-4 py-3 rounded-md text-lg font-medium tracking-wide transition-colors duration-300">
                Contacto
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Inicio
            </a>
            <a href="#servicios" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Servicios
            </a>
            <a href="#marketing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Marketing
            </a>
            <a href="#contacto" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};