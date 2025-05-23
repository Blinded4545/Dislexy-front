// src/components/Jugar2.jsx
import React from 'react';
import DialogoJ2 from './DialogoJ2';
import { useNavigate } from 'react-router-dom';

const Jugar2 = () => {
  const navigate = useNavigate();

  const manejarRespuesta = (respuesta) => {
    if (respuesta === 'correcto') {
      alert('¡Correcto!');
      navigate('/jugar3'); // próximamente
    } else {
      alert('Incorrecto. Intenta otra vez.');
    }
  };

  return (
    <div className="p-6 text-center bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Juego 2</h2>
      <p className="mb-6">Selecciona la opción correcta:</p>

      <div className="flex flex-col gap-4 items-center">
        <button
          onClick={() => manejarRespuesta('incorrecto')}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Opción A
        </button>
        <button
          onClick={() => manejarRespuesta('correcto')}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Opción B (Correcta)
        </button>
      </div>

      <div className="mt-8">
        <DialogoJ2 />
      </div>
    </div>
  );
};

export default Jugar2;
