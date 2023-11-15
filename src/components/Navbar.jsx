// Navbar.jsx
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { LoginContext } from '../App'; // Verifica que la ruta al contexto es correcta

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo y enlaces de navegación */}
        <div className="flex space-x-7">
          {/* Logo del Club de Tenis Graneros */}
          <Link to="/">
            <img src="/logo-club.jpg" alt="Club de Tenis Graneros" className="h-12" />
          </Link>
          {/* Lista de enlaces para pantallas grandes */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="py-4 px-2 text-green-700 font-semibold">Home</Link>
            {isLoggedIn && (
              <>
                <Link to="/reservas" className="py-4 px-2 text-green-700 font-semibold">Reservas</Link>
                <Link to="/mis-reservas" className="py-4 px-2 text-green-700 font-semibold">Mis Reservas</Link>
                {/* Agrega aquí más enlaces que sólo los usuarios logueados deben ver */}
              </>
            )}
            <Link to="/escalera" className="py-4 px-2 text-green-700 font-semibold">Escalera</Link>
            <Link to="/contacto" className="py-4 px-2 text-green-700 font-semibold">Contacto</Link>
            <Link to="/sobre-nosotros" className="py-4 px-2 text-green-700 font-semibold">Sobre nosotros</Link>
          </div>
        </div>
        {/* Botones de login/logout para pantallas grandes, alineados a la derecha */}
        <div className="hidden md:flex items-center space-x-3">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="py-2 px-2 font-medium text-green-500 rounded hover:bg-green-700 hover:text-white transition duration-300">
              Logout
            </button>
          ) : (
            <Link to="/login" className="py-2 px-2 font-medium text-green-500 rounded hover:bg-green-700 hover:text-white transition duration-300">Login</Link>
          )}
        </div>
        {/* Botón de menú para dispositivos móviles */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-4xl">
          <FiMenu />
        </button>
      </div>
      {/* Menú desplegable para dispositivos móviles */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <Link to="/" className="block py-2 px-4 text-sm hover:bg-green-500">Home</Link>
        {isLoggedIn ? (
          <>
            <Link to="/reservas" className="block py-2 px-4 text-sm hover:bg-green-500">Reservas</Link>
            <Link to="/mis-reservas" className="block py-2 px-4 text-sm hover:bg-green-500">Mis Reservas</Link>
            {/* Agrega aquí más enlaces para dispositivos móviles que sólo los usuarios logueados deben ver */}
            <button onClick={handleLogout} className="block py-2 px-4 text-sm hover:bg-green-500">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="block py-2 px-4 text-sm hover:bg-green-500">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
