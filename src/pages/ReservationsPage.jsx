// ReservationsPage.jsx
import React from 'react';
import ReservationsForm from '../components/ReservationsForm';

const ReservationsPage = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Imagen de fondo con efecto difuminado */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="ryan-searle-qjrjJnFypa0-unsplash.jpg"
          alt="Fondo de cancha de tenis" 
          className="w-full h-full object-cover" 
          style={{ filter: 'blur(8px)' }}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Contenido del formulario */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-md w-full bg-white bg-opacity-90 rounded-xl p-6 shadow-xl">
          <ReservationsForm />
        </div>
      </div>
    </div>
  );
};

export default ReservationsPage;
