// ReservationsPage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Asegúrate de que la ruta al componente Navbar es correcta
import ReservationsForm from '../components/ReservationsForm';

const ReservationsPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem('access'); // Asumiendo que 'access' es la clave para el estado de inicio de sesión

  useEffect(() => {
    // Si no hay token de acceso en sessionStorage, redirige al login
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  // Renderiza el contenido de la página solo si el usuario está logueado
  return isLoggedIn ? (
    <>
      <Navbar /> {/* Asegurado de que la Navbar se renderice fuera del fondo */}
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
    </>
  ) : null;
};

export default ReservationsPage;
