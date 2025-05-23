import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Jugar1 from './components/Jugar1';
import Jugar2 from './components/Jugar2';
import Jugar3 from './components/Jugar3'; 
import Jugar4 from './components/Jugar4';
import PantallaFinal from './components/PantallaFinal';
import SeleccionarVersion from './components/SeleccionarVersion';
import PremiumAccess from './components/PremiumAccess';
import Crucigrama from './components/Crucigrama';
import MemoryVisual from './components/MemoryVisual';
import Ahorcado from './components/Ahorcado';
import AsociacionVisual from './components/AsociacionVisual';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/Dislexy-front" element={<App />} />
        <Route path="/seleccionar" element={<SeleccionarVersion />} />
        <Route path="/premium" element={<PremiumAccess />} />
        <Route path="/juego-crucigrama" element={<Crucigrama />} />
        <Route path="/juego-memory" element={<MemoryVisual />} />
        <Route path="/juego-ahorcado" element={<Ahorcado />} />
        <Route path="/juego-asociacion" element={<AsociacionVisual />} />
        <Route path="/jugar1" element={<Jugar1 />} />
        <Route path="/jugar2" element={<Jugar2 />} />
        <Route path="/jugar3" element={<Jugar3 />} />
        <Route path="/jugar4" element={<Jugar4 />} />
        <Route path="/final" element={<PantallaFinal />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
