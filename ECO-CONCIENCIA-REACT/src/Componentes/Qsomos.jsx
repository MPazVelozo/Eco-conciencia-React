import React from 'react';
import './Qsomos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Boton from './Boton';


const Qsomos = () => {
  return (
    <div className="background">
      <Boton />

      <div className="container mt-5 main-container">
        {/* Texto */}
        <div className="text-container">
          <p className="lineas">
            ______________________
          </p>
          <h1 className="display-4" id="titulo">¿Quiénes somos?</h1>
          <p className="lineas">
            _______________________
          </p>
          <p className="lead">
            Somos un equipo comprometido con el medio ambiente y creemos en la importancia de educar
            a los niños sobre la sostenibilidad. Nos proponemos desarrollar una página web interactiva que sirva
            como herramienta educativa, con el objetivo de fomentar en los niños el cuidado y la protección del
            medio ambiente.
          </p>
          <p className="lead">
            A través de esta plataforma, buscamos proporcionar recursos educativos y actividades interactivas
            diseñadas para inspirar y motivar a los niños a adoptar prácticas responsables que promuevan la
            conservación de nuestro planeta.
          </p>
          <p className="lineas"> 
            ___________________
          </p>
          <p className="frase">
            ¡Juntos hagamos el cambio!
          </p>
          <p className="lineas"> 
            ___________________
          </p>
        </div>

        {/* Tarjetas */}
        <div className="cardss-container">
          {[
            { name: 'Mary Camacaro', img: 'https://i.pinimg.com/736x/53/04/c5/5304c5d8625cfb2f96e9e31516631c2e.jpg' },
            { name: 'María Paz Velozo', img: 'https://i.pinimg.com/736x/6c/29/64/6c2964d1d8d496abf8eeb47921ac5b2c.jpg' },
            { name: 'Camila Fuentes', img: 'https://i.pinimg.com/736x/53/e6/19/53e61966691dbabcd2a6bf44299167af.jpg' },
          ].map((person, index) => (
            <div className="card-1" key={index}>
              <img src={person.img} className="card-img-top-1" alt={`Foto de ${person.name}`} />
              <div className="card-body">
                <h5 className="card-title1">{person.name}</h5>
                {/* <p className="card-text">{person.desc}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qsomos;
