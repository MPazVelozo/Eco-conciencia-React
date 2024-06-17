import React from "react";
import "./Pasos.css";

function Pasos() {
  return (
    <div className="pasos-container">
      <div className="reciclaje">
        <p>Pasos para reciclar:</p>
        <ol>
          <li>1. Limpiar el recipiente para que quede libre de residuos</li>
          <li>2. Secar</li>
          <li>3. Aplastar</li>
          <li>4. Reciclar en su respectivo contenedor!</li>
        </ol>
      </div>
    </div>
  );
}

export default Pasos;
