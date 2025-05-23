import React, { useState } from 'react';
import { motion } from 'framer-motion';

const gridSize = 8;

// Letras del crucigrama
const solution = [
  ['', '', '', '', 'M', '', '', ''],
  ['', 'B', 'A', 'N', 'A', 'N', 'O', ''],
  ['L', 'I', 'M', 'O', 'N', '', '', 'U'],
  ['', '', '', '', 'Z', '', '', 'V'],
  ['', 'N', 'A', 'R', 'A', 'N', 'J', 'A'],
  ['', '', '', '', 'N', '', '', ''],
  ['', 'P', 'E', 'R', 'A', '', '', ''],
  ['', '', '', '', '', '', '',''],
];

const hints = {
  frutas: [
    { label: "🍌", word: "BANANO", pos: [4, 0], direction: "across" },
    { label: "🍏", word: "PERA", pos: [7, 0], direction: "across" },
    { label: "🍎", word: "MANZANA", pos: [2, 1], direction: "across" },
    { label: "🍋", word: "LIMON", pos: [0, 0], direction: "across" },
    { label: "🍊", word: "NARANJA", pos: [5, 5], direction: "down" },
    { label: "🍇", word: "UVA", pos: [7, 6], direction: "across" },
  ]
};

const CrucigramaFrutas = () => {
  const [userGrid, setUserGrid] = useState(
    Array(gridSize).fill().map(() => Array(gridSize).fill(''))
  );

  const handleChange = (row, col, value) => {
    const updated = userGrid.map((r, i) =>
      r.map((c, j) => (i === row && j === col ? value.toUpperCase().slice(0, 1) : c))
    );
    setUserGrid(updated);
  };

  const checkAnswers = () => {
    return userGrid.flat().every((val, i) => {
      const correct = solution[Math.floor(i / gridSize)][i % gridSize];
      return correct === '' || correct === val;
    });
  };

  const isCorrect = checkAnswers();

  return (
    <div className="min-h-screen bg-blue-50 py-10 text-center px-4">
      <motion.h2
        className="text-3xl font-bold text-blue-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Crucigrama de Frutas 🍎🍇🍋
      </motion.h2>

      <div className="grid grid-cols-[auto_auto] gap-12 justify-center">
        {/* Crucigrama */}
        <div className="grid grid-cols-8 gap-1 bg-blue-100 p-2 rounded">
          {solution.map((row, i) =>
            row.map((cell, j) => (
              <input
                key={`${i}-${j}`}
                disabled={cell === ''}
                value={userGrid[i][j]}
                onChange={(e) => handleChange(i, j, e.target.value)}
                className={`w-10 h-10 text-center text-lg font-bold border-2 ${
                  cell === ''
                    ? 'bg-blue-200 border-transparent'
                    : 'bg-white border-blue-400 focus:outline-blue-600'
                }`}
              />
            ))
          )}
        </div>

        {/* Pistas con emojis */}
        <div className="text-left text-blue-800">
          <h3 className="text-xl font-semibold mb-3">Pistas:</h3>
          <ul className="space-y-2">
            {hints.frutas.map((hint, index) => (
              <li key={index}>
                <span className="text-2xl mr-2">{hint.label}</span> {hint.word}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <motion.p
          className={`text-lg font-semibold ${
            isCorrect ? 'text-green-600' : 'text-red-600'
          }`}
          animate={{ scale: [1, 1.05, 1] }}
        >
          {isCorrect ? '✅ ¡Bien hecho, crucigrama completo!' : '✏️ Sigue completando'}
        </motion.p>
      </div>
    </div>
  );
};

export default CrucigramaFrutas;
