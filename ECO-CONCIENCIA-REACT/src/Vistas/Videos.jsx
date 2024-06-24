import React from 'react';
import ReactPlayer from 'react-player';
import Card from '../Componentes/Cardvideos';
import './Videos.css';
import Boton from '../Componentes/Boton';

const App = () => {
  const videos = [
    { title: 'La Desertificación', videoUrl: 'https://youtu.be/ouY_LOvaBo0?si=p2oPABJDiWlvDkGu' },
    { title: 'Camping Resposable',  videoUrl: 'https://youtu.be/yW_18ObXg1k?si=cWO_yaGs3JLhtpgI' },
    { title: 'El Calentamiento Global', videoUrl: 'https://youtu.be/x1IpjJPKoLo?si=JB7ekOa_SrkQfnCI' },
    { title: 'Incendios Forestales',  videoUrl: 'https://youtu.be/6ePjv-DPWVM?si=qPYk_n376O3-6YAB' },
    { title: 'Cambio Climatico',  videoUrl: 'https://www.youtube.com/watch?v=Dj2-abXxnSo' },
    { title: 'Humedales', videoUrl: 'https://youtu.be/C2bs_Lo6_mQ?si=150gKm2Cz8aeWaJ_' },
    
  ];

  const handleButtonClick = () => {
    console.log('Botón clickeado');
  };

  return (
    
    <div className="container1-lg">
      <div className="Boton-inicioo">
      <Boton />
      </div>
      <h1 className="titulo-video">VIDEOS</h1>
      <div className="videos-container">
        {videos.map((video, index) => (
          <div className="video" key={index}>
            <ReactPlayer
              url={video.videoUrl}
              playing={false} // Puedes ajustar esta propiedad según tus necesidades
              volume={0.5}
              width="100%"
              height="100%"
            />
            <h2>{video.title}</h2>
          </div>
        ))}
      </div>
      <h4 className="subtitulo">¡Disfruta de nuestros videos educativos!</h4>
    </div>
  );
};

export default App;



// import React from 'react';
// // import '../Appvideos.css';
// import Card from '../Componentes/Cardvideos';
// import fondo from '../assets/fondo.png';
// import icono2 from '../assets/icono2.png'
// import './Videos.css'
// import Boton from '../Componentes/Boton';

// const App = () => {
//   const cards = [
//     { title: 'Nota Verde: La Desertificación', image: icono2, videoUrl: 'https://youtu.be/ouY_LOvaBo0?si=p2oPABJDiWlvDkGu' },
//     { title: 'Nota Verde: Camping Resposable', image: icono2, videoUrl: 'https://youtu.be/yW_18ObXg1k?si=cWO_yaGs3JLhtpgI' },
//     { title: 'Nota Verde: El Calentamiento Global', image: icono2, videoUrl: 'https://youtu.be/x1IpjJPKoLo?si=JB7ekOa_SrkQfnCI' },
//     { title: 'Nota Verde: Incendios Forestales', image: icono2, videoUrl: 'https://youtu.be/6ePjv-DPWVM?si=qPYk_n376O3-6YAB' },
//     { title: 'Nota Verde: Humedales', image: icono2, videoUrl: 'https://youtu.be/C2bs_Lo6_mQ?si=150gKm2Cz8aeWaJ_' },
//   ];

//   const handleButtonClick = () => {
//     console.log('Botón clickeado');
//   };

//   return (
//     <div className="appvideos" style={{ backgroundImage: `url(${fondo})` }}>
//       <div className="botonn-inicio">
//         <Boton />
//         </div>
//       <h1 id="tituloo"> VIDEOS</h1>
//       <div className="card-container">
//         <div className="card-row">
//           {cards.slice(0, 3).map((card, index) => (
//             <Card
//               key={index}
//               title={card.title}
//               image={card.image}
//               videoUrl={card.videoUrl}
//             />
//           ))}
//         </div>
//         <div className="card-row">
//           {cards.slice(3).map((card, index) => (
//             <Card
//               key={index}
//               title={card.title}
//               image={card.image}
//               videoUrl={card.videoUrl}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
