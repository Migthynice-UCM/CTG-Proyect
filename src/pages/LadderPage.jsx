// LadderPage.jsx
import React from 'react';
import Pyramid from '../components/Pyramid';

const LadderPage = () => {
  const playersData = [  
  [{ name: 'Jugador 1' }],
  [{ name: 'Jugador 2' }, { name: 'Jugador 3' }],
  [{ name: 'Jugador 4' }, { name: 'Jugador 5' }, { name: 'Jugador 6' }],
  [{ name: 'Jugador 7' }, { name: 'Jugador 8' }, { name: 'Jugador 9' }, { name: 'Jugador 10' }],
  [{ name: 'Jugador 11' }, { name: 'Jugador 12' }, { name: 'Jugador 13' }, { name: 'Jugador 14' }, { name: 'Jugador 15' }],
  [{ name: 'Jugador 16' }, { name: 'Jugador 17' }, { name: 'Jugador 18' }, { name: 'Jugador 19' }, { name: 'Jugador 20' }, { name: 'Jugador 21' }],
  [{ name: 'Jugador 22' }, { name: 'Jugador 23' }, { name: 'Jugador 24' }, { name: 'Jugador 25' }, { name: 'Jugador 26' }, { name: 'Jugador 27' }, { name: 'Jugador 28' }],
  [{ name: 'Jugador 29' }, { name: 'Jugador 30' }, { name: 'Jugador 31' }, { name: 'Jugador 32' }, { name: 'Jugador 33' }, { name: 'Jugador 34' }, { name: 'Jugador 35' }, { name: 'Jugador 36' }],
  [{ name: 'Jugador 37' }, { name: 'Jugador 38' }, { name: 'Jugador 39' }, { name: 'Jugador 40' }, { name: 'Jugador 41' }, { name: 'Jugador 42' }, { name: 'Jugador 43' }, { name: 'Jugador 44' }, { name: 'Jugador 45' }, { name: 'Jugador 46' }]
  ];

  return (
    <div className="relative min-h-screen">
      {/* Fondo difuminado */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/ryan-searle-qjrjJnFypa0-unsplash.jpg" 
          alt="Fondo de cancha de tenis"
          className="w-full h-full object-cover"
          style={{ filter: 'blur(8px)' }}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Contenido del componente */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-md w-full rounded-xl p-6 shadow-xl">
          <Pyramid players={playersData} />
        </div>
      </div>
    </div>
  );
};

export default LadderPage;





















