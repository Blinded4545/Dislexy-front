import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const PremiumAccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-blue-50 flex flex-col items-center justify-center px-6 py-12 text-center">
      <motion.h2
        className="text-4xl font-bold text-blue-800 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ¡Bienvenido a Premium! 💎
      </motion.h2>

      <motion.p
        className="text-blue-700 mb-6 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Gracias por confiar en DislexiaApp. Ahora tienes acceso completo a todos los juegos sin anuncios.
      </motion.p>

      <motion.div
        className="grid md:grid-cols-2 gap-6 max-w-3xl w-full"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {[
          { title: '🧩 Crucigrama Extendido', route: '/juego-crucigrama' },
          { title: '🧠 Memory Visual PRO', route: '/juego-memory' },
          { title: '🔤 Ahorcado Temático', route: '/juego-ahorcado' },
          { title: '🖼️ Asociación Avanzada', route: '/juego-asociacion' },
        ].map((juego, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(juego.route)}
            className="bg-white border border-blue-200 rounded-xl shadow-md p-6 text-blue-800 font-semibold text-lg transition"
          >
            {juego.title}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default PremiumAccess;
