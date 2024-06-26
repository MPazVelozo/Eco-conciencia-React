import React from "react";
import ReactPlayer from "react-player";
import "./Videos.css";
import Boton from "../Componentes/Boton";
import Calidad from "../Componentes/Calidad";

const App = () => {
  const videos = [
    {
      title: "La Desertificación",
      videoUrl: "https://youtu.be/ouY_LOvaBo0?si=p2oPABJDiWlvDkGu",
    },
    {
      title: "Camping Resposable",
      videoUrl: "https://youtu.be/yW_18ObXg1k?si=cWO_yaGs3JLhtpgI",
    },
    {
      title: "El Calentamiento Global",
      videoUrl: "https://youtu.be/x1IpjJPKoLo?si=JB7ekOa_SrkQfnCI",
    },
    {
      title: "Incendios Forestales",
      videoUrl: "https://youtu.be/6ePjv-DPWVM?si=qPYk_n376O3-6YAB",
    },
    {
      title: "Cambio Climatico",
      videoUrl: "https://www.youtube.com/watch?v=Dj2-abXxnSo",
    },
    {
      title: "Humedales",
      videoUrl: "https://youtu.be/C2bs_Lo6_mQ?si=150gKm2Cz8aeWaJ_",
    },
  ];

  const handleButtonClick = () => {
    console.log("Botón clickeado");
  };

  return (
    <div>
      <div className="container1-lg">
        <div className="Boton-inicio3">
          <Boton />
        </div>
        <h1 className="titulo-video">VIDEOS </h1>
        <div id="que">
          {" "}
          Estos videos están diseñados para informar y concienciar sobre la
          protección de nuestro planeta. ¡Descubre cómo puedes contribuir a un
          mundo más sostenible!
        </div>
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
        <button type="button" class="btn btn-dark">
          ¡Disfruta de nuestros videos educativos!
        </button>
      </div>
      <div className="footerv">
        <Calidad />
      </div>
    </div>
  );
};

export default App;
