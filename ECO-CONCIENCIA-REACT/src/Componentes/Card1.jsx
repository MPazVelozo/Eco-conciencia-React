
import React, { useState } from 'react';
import './Card1.css';

function Card1({ titulo, imagen, texto }) {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div className="card">
      <img src={imagen} className="card-img-topm card-jump" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{isTruncated ? texto.slice(0, 500) + '...' : texto}</p>
        {!isTruncated && (
          <button className="btn btn-link" onClick={toggleTruncate}>
            Leer menos
          </button>
        )}
        {isTruncated && texto.length > 500 && (
          <button className="btn btn-link" onClick={toggleTruncate}>
            Leer más
          </button>
        )}
      </div>
    </div>
  );
}

export default Card1;
