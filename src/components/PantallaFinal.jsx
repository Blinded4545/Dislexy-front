import React from 'react';
import { Link } from 'react-router-dom';

const PantallaFinal = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-600 to-blue-600 text-white">
      <h1 className="text-4xl font-bold mb-4">¡Felicidades!</h1>
      <p className="text-lg mb-6 text-center max-w-md">
        Has completado todos los juegos. Has demostrado atención, lectura y comprensión.
      </p>
      <Link to="/" className="bg-white text-purple-700 px-6 py-2 rounded hover:bg-gray-100">
        Volver al Inicio
      </Link>
    </div>
  );
};

export default PantallaFinal;

