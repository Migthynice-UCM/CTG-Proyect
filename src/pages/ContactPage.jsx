// ContactPage.jsx
import React from 'react';
import { MdLocationOn, MdPhone } from 'react-icons/md';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  // Estilos para los iconos
  const iconStyles = `text-green-600 hover:text-green-800 transition-colors duration-300`;

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Fondo con efecto difuminado */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/ryan-searle-qjrjJnFypa0-unsplash.jpg" // Ruta imagen de fondo
          alt="Fondo de Club de Tenis Graneros"
          className="w-full h-full object-cover"
          style={{ filter: 'blur(8px)' }}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Contenido de la página de contacto */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-md w-full text-center p-6 bg-white bg-opacity-90 rounded-xl shadow-xl">
          <h1 className="text-4xl font-bold text-green-700 mb-6">Contacto</h1>
          
          <div className="space-y-4">
            <p className={`flex items-center justify-center ${iconStyles}`}><MdLocationOn className="mr-2"/> Recinto Estación, Rancagua.</p>
            <p className={`flex items-center justify-center ${iconStyles}`}><MdPhone className="mr-2"/> +56 9 9559 6226</p>
            
            <div className="flex justify-center space-x-4">
              <a href="https://www.instagram.com/clubdetenisgraneros/?hl=es" target="_blank" rel="noopener noreferrer" className={iconStyles}><FaInstagram /></a>
              <a href="https://web.facebook.com/people/Club-de-Tenis-Graneros/100064764786436/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className={iconStyles}><FaFacebook /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
