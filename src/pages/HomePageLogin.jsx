// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { Button } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import NavbarLogin from '../components/NavbarLogin';

const HomePageLogin = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <NavbarLogin/>
      <div className="flex-grow relative">
        <img 
          src="/ryan-searle-qjrjJnFypa0-unsplash.jpg" 
          alt="Fondo de cancha de tenis" 
          className="w-full h-full object-cover absolute" 
        />
        <div className="bg-black opacity-50 absolute inset-0"></div>
        <div className="flex flex-col items-center justify-center min-h-screen relative z-10">
          <div className="text-center p-8">
            <h1 className="text-6xl font-bold text-white">Club de Tenis Graneros</h1>
            <p className="mt-4 text-xl text-white">Experiencia y pasión en cada juego</p>
            {/* Botón centrado con el contenedor flex y margen automático */}
            <div className="mt-8 w-full flex justify-center">
              <Link to="/reservas">
                <Button>
                  Únete al club
                  <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePageLogin;
