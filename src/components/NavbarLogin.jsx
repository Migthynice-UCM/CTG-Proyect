// NavbarLogin.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi'; // React-icons


function handleLogout() {
  const navigate = useNavigate();
  sessionStorage.clear();
  navigate('/');
}


const NavbarLogin = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-7">
            <div>
              {/* Logo del Club de Tenis Graneros */}
              <Link to="/">
                <img src="/logo-club.jpg" alt="Club de Tenis Graneros" className="h-12" />
              </Link>
            </div>
            {/* Lista de enlaces para pantallas grandes */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/admin/home" className="py-4 px-2 text-green-700 font-semibold">Home</Link>
              <Link to="/reservas" className="py-4 px-2 text-green-700 font-semibold">Reservar</Link>
              <Link to="/escalera" className="py-4 px-2 text-green-700 font-semibold">Escalerilla</Link>
              <Link to="/admin/home" className="py-4 px-2 text-green-700 font-semibold">Fixture</Link>
              <Link to="/admin/home" className="py-4 px-2 text-green-700 font-semibold">Mis Reservas</Link>


            </div>
          </div>
          {/* Botones de login/logout para pantallas grandes */}
          <div className="hidden md:flex items-center space-x-3">
            {isLoggedIn ? (
              <Link to="" className="py-2 px-2 font-medium text-green-500 rounded hover:bg-green-700 hover:text-white transition duration-300">Logout</Link>
            ) : (
              <Link to="/" onClick={handleLogout} className="py-2 px-2 font-medium text-green-500 rounded hover:bg-green-700 hover:text-white transition duration-300">Logout</Link>
            )}
          </div>
          {/* Botón de menú para dispositivos móviles */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <FiMenu className="text-4xl" />
            </button>
          </div>
        </div>
      </div>
      {/* Menú desplegable para dispositivos móviles */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <Link to="/admin/home" className="block py-2 px-4 text-sm hover:bg-green-500">Home</Link>
        <Link to="/reservas" className="block py-2 px-4 text-sm hover:bg-green-500">Reservas</Link>
        <Link to="/escalera" className="block py-2 px-4 text-sm hover:bg-green-500">Escalerilla</Link>
        <Link to="/admin/home" className="block py-2 px-4 text-sm hover:bg-green-500">Fixture</Link>
        <Link to="/admin/home" className="block py-2 px-4 text-sm hover:bg-green-500">Mis reservas</Link>

        
        {isLoggedIn ? (
          <Link to="/logout" className="block py-2 px-4 text-sm hover:bg-green-500">Logout</Link>
          ) : (
            <Link to="/" onClick={handleLogout} className="block py-2 px-4 text-sm hover:bg-green-500">Logout</Link>
            
          )}
        </div>
      </nav>
    );
    };
    
    export default NavbarLogin;
