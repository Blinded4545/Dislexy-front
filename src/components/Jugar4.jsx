import React from 'react';
import DialogoJ4 from './DialogoJ4';
import { useNavigate } from 'react-router-dom';

const Jugar4 = () => {
  const navigate = useNavigate();

  const manejarRespuesta = (respuesta) => {
    if (respuesta === 'correcto') {
      alert('¡Muy bien! Has terminado todos los juegos.');
      navigate('/final');
    } else {
      alert('Respuesta incorrecta. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="p-8 text-center bg-gray-800 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Juego 4</h2>
        <p className="mb-6">Selecciona la opción correcta:</p>

        <div className="flex flex-col gap-4 items-center">
          <button
            onClick={() => manejarRespuesta('incorrecto')}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full"
          >
            Respuesta C
          </button>
          <button
            onClick={() => manejarRespuesta('correcto')}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full"
          >
            Respuesta D (Correcta)
          </button>
        </div>

        <div className="mt-6">
          <DialogoJ4 />
        </div>
      </div>
    </div>
  );
};

export default Jugar4;
