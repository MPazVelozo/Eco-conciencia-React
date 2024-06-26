import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReclamoForm from '../Componentes/ReclamoForm';
import ReclamosList from '../Componentes/ReclamosList';
import './Sugerencias.css'
import Boton from '../Componentes/Boton';



const App = () => {
  return (
    <div>
      <div className="sug">
      <Boton />
      </div>
      <div className='ReclammosYSugerencias-container'>
        <h1>______________________</h1>
        <h1>Reclamos y Sugerencias</h1>
        <h2>__________________</h2>
        <ReclamoForm />
        <ReclamosList />
      </div>

    </div>
  );
};

export default App;
