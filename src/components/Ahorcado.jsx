import React, { useState } from 'react';
import { motion } from 'framer-motion';

const palabras = ['MANZANA', 'PERA', 'LIMON', 'UVA', 'BANANO'];

const Ahorcado = () => {
  // ✅ Ahora la palabra se define una sola vez
  const [palabra] = useState(() =>
    palabras[Math.floor(Math.random() * palabras.length)]
  );

  const [letrasUsadas, setLetrasUsadas] = useState([]);
  const errores = letrasUsadas.filter(l => !palabra.includes(l)).length;

  const maxErrores = 6;
  const letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');

  const manejarClick = (letra) => {
    if (!letrasUsadas.includes(letra)) {
      setLetrasUsadas([...letrasUsadas, letra]);
    }
  };

  const palabraMostrada = palabra.split('').map(l =>
    letrasUsadas.includes(l) ? l : '_'
  );

  const gano = palabraMostrada.join('') === palabra;
  const perdio = errores >= maxErrores;

  return (
    <div className="min-h-screen bg-blue-50 py-10 text-center px-4">
      <motion.h2
        className="text-3xl font-bold text-blue-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Ahorcado Premium 🔤
      </motion.h2>

      {/* Palabra oculta */}
      <div className="mb-6 text-2xl tracking-widest text-blue-900 font-mono">
        {palabraMostrada.join(' ')}
      </div>

      {/* Letras disponibles */}
      <div className="grid grid-cols-8 gap-2 max-w-xl mx-auto mb-8">
        {letras.map((l, i) => (
          <button
            key={i}
            onClick={() => manejarClick(l)}
            disabled={letrasUsadas.includes(l) || gano || perdio}
            className={`py-1 rounded font-semibold text-blue-800 transition ${
              letrasUsadas.includes(l)
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-white hover:bg-blue-200'
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Resultado */}
      {gano && (
        <motion.p
          className="text-green-600 text-xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ✅ ¡Correcto! La palabra era {palabra}
        </motion.p>
      )}
      {perdio && (
        <motion.p
          className="text-red-600 text-xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ❌ ¡Perdiste! La palabra era {palabra}
        </motion.p>
      )}

      {/* Muñeco (consola dibujada) */}
      <div className="mt-10 flex justify-center">
        <div className="text-left font-mono text-blue-800 leading-none">
          <pre>
{`
+---+
|   ${errores > 0 ? 'O' : ''}
|  ${errores > 2 ? '/' : ' '}${errores > 1 ? '|' : ''}${errores > 3 ? '\\' : ''}
|  ${errores > 4 ? '/' : ''} ${errores > 5 ? '\\' : ''}
|
=========
`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Ahorcado;
