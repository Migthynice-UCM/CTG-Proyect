// Footer.jsx
import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-gray-700 p-4">
      <div className="container mx-auto p-4 pb-0">
        {/* Botones de Redes Sociales */}
        <div className="mb-4 flex justify-center">
          <a href="https://web.facebook.com/people/Club-de-Tenis-Graneros/100064764786436/?_rdc=1&_rdr" className="text-blue-600 m-1">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/clubdetenisgraneros/?hl=es" className="text-pink-600 m-1">
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="text-center p-3 bg-black bg-opacity-20 text-white">
        © 2023 Derechos Reservados: Club de Tenis Graneros
      </div>
    </footer>
  );
};

export default Footer;
