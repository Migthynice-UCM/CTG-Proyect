// AboutPage.jsx
import React from 'react';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 text-gray-700">
      {/* Fondo con efecto difuminado */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/ryan-searle-qjrjJnFypa0-unsplash.jpg" 
          alt="Background" 
          className="w-full h-full object-cover" 
          style={{ filter: 'blur(8px)' }}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Contenido de la página */}
      <div className="relative z-10 p-4 md:p-8 max-w-6xl mx-auto space-y-6">
        <h1 className="text-5xl font-bold text-center text-white mb-6">Sobre Nosotros</h1>
        
        {/* Sección de imágenes con efectos al pasar el mouse */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="hover:scale-105 transition-transform duration-200">
            <img 
              src="/public/ClubFotoVarios.jpeg" 
              alt="Club de Tenis Graneros" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="hover:scale-105 transition-transform duration-200">
            <img 
              src="/public/ClubFotoPocos.jpg" 
              alt="Equipo del Club de Tenis Graneros" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        
        <p className="text-xl text-white text-center mb-6">
          El Club de Tenis Graneros es un punto de encuentro para los entusiastas del tenis, donde la pasión y la excelencia deportiva van de la mano. Ofrecemos una experiencia única con instalaciones de primera calidad y una comunidad acogedora.
        </p>
        
        {/* Más contenido con información adicional */}
        {/* Aquí añadir más texto o componentes */}
      </div>
    </div>
  );
};

export default AboutPage;
