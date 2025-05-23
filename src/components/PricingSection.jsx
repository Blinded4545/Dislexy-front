import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    title: "Gratuito",
    price: "$0",
    color: "white",
    features: ["✔ Juegos básicos", "✔ Limitado", "✖ Sin historial"],
    highlight: false,
  },
  {
    title: "Mensual",
    price: "$3.99",
    color: "blue-100",
    features: ["✔ Todos los juegos", "✔ Sin anuncios", "✔ Soporte prioritario"],
    highlight: true,
  },
  {
    title: "Anual",
    price: "$39.99",
    color: "white",
    features: ["✔ Acceso total", "✔ Actualizaciones", "✔ Sin interrupciones"],
    highlight: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="bg-blue-50 py-20 px-6 text-center">
    <motion.h3
      className="text-3xl font-bold text-blue-800 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Planes de acceso
    </motion.h3>

    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {plans.map((plan, i) => (
        <motion.div
          key={plan.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          viewport={{ once: true }}
          className={`bg-${plan.color} p-6 rounded-xl shadow-lg ${
            plan.highlight ? 'border-2 border-blue-600 scale-105' : 'border'
          }`}
        >
          <h4 className="text-2xl font-semibold text-blue-700 mb-2">{plan.title}</h4>
          <p className="text-blue-600 mb-4">{plan.highlight ? 'Acceso completo sin anuncios' : 'Accede con anuncios'}</p>
          <p className="text-3xl font-bold mb-4">{plan.price}</p>
          <ul className="text-sm text-blue-700 mb-6 space-y-1">
            {plan.features.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
            {plan.highlight ? 'Suscribirse' : 'Probar'}
          </button>
        </motion.div>
      ))}
    </div>
  </section>
);

export default PricingSection;
