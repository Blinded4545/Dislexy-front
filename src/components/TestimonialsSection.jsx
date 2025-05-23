import React from 'react';

const TestimonialsSection = () => (
  <section id="testimonials" className="py-16 px-6 bg-white text-center text-blue-900">
    <h3 className="text-3xl font-bold mb-8">Lo que dicen los usuarios</h3>
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
      <div className="bg-blue-50 p-4 rounded shadow">
        <p>"Mi hijo ha mejorado su comprensión lectora. ¡Es divertido y educativo!"</p>
        <p className="mt-2 font-semibold">– Carolina, madre de usuario</p>
      </div>
      <div className="bg-blue-50 p-4 rounded shadow">
        <p>"Me encanta el juego de Memory. Me ayuda a aprender sin presiones."</p>
        <p className="mt-2 font-semibold">– Juan, 12 años</p>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
