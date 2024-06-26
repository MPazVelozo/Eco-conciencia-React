import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './ReclamosList.css'

const ReclamosList = () => {
  const [reclamos, setReclamos] = useState([]);

  const fetchReclamos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/reclamos');
      setReclamos(response.data);
    } catch (err) {
      console.error('Error al obtener los reclamos:', err);
    }
  };

  useEffect(() => {
    fetchReclamos();
  }, []);

  return (
    <div className='Respuestas-container'>
      <h2>_______________________________</h2>
      <div id="lista">Lista de Reclamos y sugerencias</div>
      
      <div className='Formulario.container'>
        
        <ul>
          {reclamos.map((reclamo) => (
            <li key={reclamo._id}>
              <h2>______________________</h2>
              <div id="recl">
              Nombre: {reclamo.nombre} </div>
              <div id="recl"> Email:{reclamo.email}</div>
              <div id="recl">Mensaje: {reclamo.mensaje}</div>
              <h2>______________________</h2>
            </li>
          ))}
        </ul>
        <h2>_______________________________</h2>
      </div>
    </div>
  );
};

export default ReclamosList;
