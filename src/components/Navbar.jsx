import React from 'react';

const Navbar = () => (
  <nav className="bg-white text-blue-800 shadow-md px-6 py-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">DislexiaApp</h1>
    <div className="space-x-6">
      <a href="#features" className="hover:text-blue-500">Características</a>
      <a href="#pricing" className="hover:text-blue-500">Precios</a>
      <a href="#testimonials" className="hover:text-blue-500">Testimonios</a>
    </div>
  </nav>
);

export default Navbar;
