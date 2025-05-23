import React from 'react';

const features = [
  {
    title: "🧩 Crucigramas y Rompecabezas",
    desc: "Juegos de palabras para mejorar lectura y retención.",
  },
  {
    title: "🖼️ Asociación visual",
    desc: "Relaciona imágenes con palabras para reforzar memoria multisensorial.",
  },
  {
    title: "🧠 Memory",
    desc: "Empareja palabras e ilustraciones con memoria visual.",
  },
  {
    title: "🔤 Ahorcado",
    desc: "Practica ortografía y vocabulario de forma divertida.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="bg-white py-20 px-6 text-center">
    <h3 className="text-3xl font-bold text-blue-800 mb-12">Juegos disponibles</h3>
    <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
      {features.map((f, i) => (
        <div
          key={i}
          className="bg-blue-50 border border-blue-100 rounded-lg p-6 shadow-sm hover:shadow-md transition"
        >
          <h4 className="text-xl font-semibold text-blue-700 mb-2">{f.title}</h4>
          <p className="text-blue-600">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
