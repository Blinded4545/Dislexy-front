import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SeleccionarVersion = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-50 flex flex-col items-center justify-center text-center px-4">
      <motion.h2
        className="text-3xl font-bold text-blue-800 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Elige tu experiencia
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-4xl">
        {/* Gratuita */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-xl shadow-md p-6 border border-blue-200"
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">Versión Gratuita</h3>
          <p className="text-blue-600 mb-4">Con anuncios y juegos básicos.</p>
          <ul className="text-sm text-left text-blue-800 mb-6 list-disc list-inside">
            <li>Incluye anuncios</li>
            <li>Juegos limitados</li>
            <li>Sin progreso guardado</li>
          </ul>
          <button
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
            onClick={() => navigate('/jugar1')}
          >
            Comenzar gratis
          </button>
        </motion.div>

        {/* Premium */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-blue-100 rounded-xl shadow-lg p-6 border-2 border-blue-600"
        >
          <h3 className="text-2xl font-semibold text-blue-800 mb-2">Versión Premium</h3>
          <p className="text-blue-700 mb-4">Sin anuncios y con acceso total.</p>
          <ul className="text-sm text-left text-blue-900 mb-6 list-disc list-inside">
            <li>Sin interrupciones</li>
            <li>Todos los juegos</li>
            <li>Historial y soporte</li>
          </ul>
          <button
            className="bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800"
            onClick={() => navigate('/premium')}
          >
            Elegir Premium
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SeleccionarVersion;
