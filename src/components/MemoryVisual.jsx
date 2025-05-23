import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const rawPairs = [
  { type: 'img', value: '🍎', id: 'manzana' },
  { type: 'word', value: 'MANZANA', id: 'manzana' },
  { type: 'img', value: '🍌', id: 'banano' },
  { type: 'word', value: 'BANANO', id: 'banano' },
  { type: 'img', value: '🍇', id: 'uva' },
  { type: 'word', value: 'UVA', id: 'uva' },
  { type: 'img', value: '🍐', id: 'pera' },
  { type: 'word', value: 'PERA', id: 'pera' },
];

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

const MemoryVisual = () => {
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    setCards(shuffle(rawPairs));
  }, []);

  const handleSelect = (index) => {
    if (selected.length === 2 || matched.includes(index) || selected.includes(index)) return;
    const newSelected = [...selected, index];
    setSelected(newSelected);

    if (newSelected.length === 2) {
      const first = cards[newSelected[0]];
      const second = cards[newSelected[1]];
      if (first.id === second.id && first.type !== second.type) {
        setMatched([...matched, ...newSelected]);
        setTimeout(() => setSelected([]), 500);
      } else {
        setTimeout(() => setSelected([]), 800);
      }
    }
  };

  const isRevealed = (index) => selected.includes(index) || matched.includes(index);

  const allMatched = matched.length === cards.length;

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center py-10 px-4 text-center">
      <motion.h2
        className="text-3xl font-bold text-blue-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Memory Visual Premium 🧠
      </motion.h2>

      <div className="grid grid-cols-4 gap-4 max-w-xl">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            onClick={() => handleSelect(i)}
            className={`cursor-pointer w-24 h-24 flex items-center justify-center rounded-lg shadow-md text-xl font-bold border-2 transition ${
              isRevealed(i)
                ? 'bg-white text-blue-800 border-blue-400'
                : 'bg-blue-200 text-transparent border-transparent'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {isRevealed(i) ? card.value : '?'}
          </motion.div>
        ))}
      </div>

      {allMatched && (
        <motion.p
          className="mt-6 text-green-600 text-lg font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ✅ ¡Completaste el juego!
        </motion.p>
      )}
    </div>
  );
};

export default MemoryVisual;
