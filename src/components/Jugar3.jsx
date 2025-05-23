import React from 'react';
import DialogoJ3 from './DialogoJ3';
import { useNavigate } from 'react-router-dom';

const Jugar3 = () => {
  const navigate = useNavigate();

  const manejarRespuesta = (respuesta) => {
    if (respuesta === 'correcto') {
      alert('¡Correcto!');
      navigate('/jugar4'); // Próximo nivel
    } else {
      alert('Incorrecto. Intenta otra vez.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="p-8 text-center bg-gray-800 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Juego 3</h2>
        <p className="mb-6">Selecciona la opción correcta:</p>

        <div className="flex flex-col gap-4 items-center">
          <button
            onClick={() => manejarRespuesta('incorrecto')}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full"
          >
            Respuesta X
          </button>
          <button
            onClick={() => manejarRespuesta('correcto')}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full"
          >
            Respuesta Y (Correcta)
          </button>
        </div>

        <div className="mt-6">
          <DialogoJ3 />
        </div>
      </div>
    </div>
  );
};

export default Jugar3;
