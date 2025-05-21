
import { motion } from "framer-motion";

export default function LandingPage() {
  const url="http://localhost:5173/app.exe"
  const fileName="app.exe"
  const downloadFile=()=>{
    const aTag=document.createElement("a")
    aTag.href=url
    aTag.setAttribute("download", fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }
  return (
    <main className="font-sans bg-white text-gray-800">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-200 shadow-sm sticky top-0 bg-white z-50">
        <h1 className="text-2xl font-bold">Dislexy</h1>
        <ul className="flex gap-8 text-lg">
          <li><a href="#features" className="hover:text-blue-600">Funciones</a></li>
          <li><a href="#testimonios" className="hover:text-blue-600">Testimonios</a></li>
          <li><a href="#planes" className="hover:text-blue-600">Planes</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ayuda Inteligente para Personas con Dislexia
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Una plataforma diseñada para mejorar la lectura, comprensión y confianza de quienes viven con dislexia.
        </motion.p>
        <motion.button
        className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-blue-700 transition-transform"
        whileHover={{ scale: 1.05 }}
        onClick={()=>{
          downloadFile()
        }}
        >
        Empieza ahora
        </motion.button>
        
      </section>

      {/* Features */}
      <section id="features" className="flex flex-wrap justify-center gap-8 px-6 py-16">
        <div className="max-w-sm bg-gray-100 rounded-2xl p-6 shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Lectura Adaptativa</h3>
          <p>Ajustes personalizados de tamaño, fuente y espaciado para una experiencia lectora cómoda.</p>
        </div>
        <div className="max-w-sm bg-gray-100 rounded-2xl p-6 shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Soporte Auditivo</h3>
          <p>Funciones de lectura en voz alta para reforzar la comprensión lectora.</p>
        </div>
        <div className="max-w-sm bg-gray-100 rounded-2xl p-6 shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Ejercicios Interactivos</h3>
          <p>Actividades diseñadas con respaldo profesional para fortalecer habilidades de lectura y escritura.</p>
        </div>
      </section>

      {/* Empowerment Section */}
      <section className="text-center py-16 bg-gray-50 px-4">
        <h2 className="text-3xl font-bold mb-4">Empoderamos con Tecnología</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Nuestra aplicación combina diseño accesible, inteligencia artificial y acompañamiento profesional para que cada persona con dislexia avance a su ritmo y mejore sus capacidades día a día.
        </p>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-10">Testimonios</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="max-w-sm bg-white p-6 rounded-2xl shadow-md">
            <p className="italic mb-4">“Gracias a esta app, mi hijo ha recuperado la confianza en sí mismo. Leer ya no es un castigo para él.”</p>
            <p className="font-semibold">— Laura, madre de usuario</p>
          </div>
          <div className="max-w-sm bg-white p-6 rounded-2xl shadow-md">
            <p className="italic mb-4">“Nunca había encontrado una herramienta tan completa para ayudarme con la dislexia.”</p>
            <p className="font-semibold">— Juan, estudiante universitario</p>
          </div>
          <div className="max-w-sm bg-white p-6 rounded-2xl shadow-md">
            <p className="italic mb-4">“Como terapeuta, recomiendo esta app a mis pacientes. Es intuitiva y efectiva.”</p>
            <p className="font-semibold">— Carolina, terapeuta ocupacional</p>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section id="planes" className="text-center py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Planes Accesibles para Todos</h2>
        <p className="text-lg text-gray-700 mb-10">Elige el plan que mejor se adapte a ti y comienza tu camino hacia una mejor comprensión lectora.</p>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-64 bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Plan Gratuito</h3>
            <p className="text-xl mb-2">Gratis</p>
            <p className="mb-4">Acceso limitado a funciones básicas.</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">Empieza Gratis</button>
          </div>
          <div className="w-64 bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Plan Pro</h3>
            <p className="text-xl mb-2">$19.000/mes</p>
            <p className="mb-4">Funciones avanzadas y contenido personalizado.</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">Suscribirse</button>
          </div>
          <div className="w-64 bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Plan Familiar</h3>
            <p className="text-xl mb-2">$39.000/mes</p>
            <p className="mb-4">Hasta 4 perfiles. Ideal para hogares.</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">Elegir Plan</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 bg-gray-800 text-white">
        <p>© 2025 Dislexy. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}