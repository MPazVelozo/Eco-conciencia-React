import React from "react";
import "./Chart.css";
import Parrafo from './Parrafo';

function Chart({ imagen = "chart" }) {
    return (
        <div className="contenedor-imagen-amarillo">
            <div className="imagen-container10" style={{ backgroundImage: "url('./assets/chart.png')" }}>
                <img src={imagen} className="foto-img-ama rounded float-end" alt="Foto" />
            </div>
            <div className="texto-encima-ama">
                <Parrafo />
            </div>
        </div>
    );
}

export default Chart;

