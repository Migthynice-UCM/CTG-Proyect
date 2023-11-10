import React, { useState } from 'react';

const Pyramid = ({ players }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  const handleChallengeClick = () => {
    const confirmation = window.confirm('¿Estás seguro de que deseas desafiar a este jugador?');
    if (confirmation) {
      // Aquí añadir la lógica para manejar el desafío
      console.log(`Desafío enviado a ${selectedPlayer.name}`);
    }
    setSelectedPlayer(null); // Cerrar la tarjeta de detalles
  };

  return (
    <div className="py-8 relative">
      {players.map((row, rowIndex) => (
        <div className="flex justify-center mb-4" key={rowIndex}>
          {row.map((player, playerIndex) => (
            <div
              className="mx-2 p-4 bg-green-500 text-white rounded cursor-pointer transition-all hover:bg-green-600"
              key={playerIndex}
              onClick={() => handlePlayerClick(player)}
            >
              {player.name}
            </div>
          ))}
        </div>
      ))}

      {/* Tarjeta con detalles del jugador y opción de desafío */}
      {selectedPlayer && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="flex bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
            {/* Contenedor de Imagen */}
            <div className="w-1/3">
              <img 
                src="/up2.jpg" 
                alt="Imagen del jugador"
                className="h-full w-full object-cover rounded-l-lg" 
              />
            </div>
            {/* Contenedor de Detalles */}
            <div className="w-2/3 p-4">
              <h3 className="text-xl font-bold mb-4">{selectedPlayer.name}</h3>
              <p>Edad: {selectedPlayer.age || 'N/A'}</p>
              <p>Mano dominante: {selectedPlayer.dominantHand || 'N/A'}</p>
              <p>Revés: {selectedPlayer.backhand || 'N/A'}</p>
              {/* Más detalles del jugador... */}
              <div className="flex justify-end mt-4">
                <button onClick={handleChallengeClick} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                  Desafiar
                </button>
                <button onClick={() => setSelectedPlayer(null)} className="bg-gray-300 text-black px-4 py-2 rounded">
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pyramid;
