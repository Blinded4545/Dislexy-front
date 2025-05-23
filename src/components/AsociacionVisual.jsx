import React, { useState } from 'react';
import { motion } from 'framer-motion';

const data = [
  { palabra: 'MANZANA', emoji: '🍎' },
  { palabra: 'BANANO', emoji: '🍌' },
  { palabra: 'UVA', emoji: '🍇' },
  { palabra: 'PERA', emoji: '🍐' },
];

const AsociacionVisual = () => {
  const [seleccion, setSeleccion] = useState({});
  const [resultado, setResultado] = useState(null);

  const palabras = [...data.map(d => d.palabra)].sort(() => Math.random() - 0.5);
  const emojis = [...data.map(d => d.emoji)];

  const manejarSeleccion = (emoji, palabra) => {
    const nuevaSeleccion = { ...seleccion, [emoji]: palabra };
    setSeleccion(nuevaSeleccion);

    const todoCorrecto = data.every(
      d => nuevaSeleccion[d.emoji] === d.palabra
    );

    if (Object.keys(nuevaSeleccion).length === data.length) {
      setResultado(todoCorrecto ? 'correcto' : 'incorrecto');
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4 text-center">
      <motion.h2
        className="text-3xl font-bold text-blue-800 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Asociación Visual Premium 🧠
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 justify-center items-start max-w-4xl mx-auto">
        {/* Columna de imágenes */}
        <div className="flex flex-col gap-4 items-center">
          {emojis.map((emoji, i) => (
            <div key={i} className="text-5xl bg-white rounded-full w-20 h-20 flex items-center justify-center shadow">
              {emoji}
            </div>
          ))}
        </div>

        {/* Columna de palabras */}
        <div className="flex flex-col gap-4 items-center">
          {palabras.map((palabra, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const emojiNoUsado = emojis.find(e => !(e in seleccion));
                if (emojiNoUsado) manejarSeleccion(emojiNoUsado, palabra);
              }}
              className="bg-blue-100 text-blue-800 px-6 py-2 rounded shadow font-semibold"
              disabled={Object.values(seleccion).includes(palabra)}
            >
              {palabra}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Resultado */}
      {resultado === 'correcto' && (
        <motion.p
          className="text-green-600 text-lg font-semibold mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ✅ ¡Bien hecho! Has asociado correctamente todas las imágenes.
        </motion.p>
      )}
      {resultado === 'incorrecto' && (
        <motion.p
          className="text-red-600 text-lg font-semibold mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ❌ Algunas asociaciones no son correctas. Inténtalo de nuevo.
        </motion.p>
      )}
    </div>
  );
};

export default AsociacionVisual;
