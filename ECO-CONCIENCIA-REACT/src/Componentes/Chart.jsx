import React from "react";
import "./Chart.css";
import Parrafo from './Parrafo';

function Chart ({ imagen = "chart" }) {
    return (
        <div className="contenedor-imagen-amarillo" style={{ backgroundImage: "url('./assets/chart.png')" }}>
            <img src={imagen} className="foto-img-ama rounded float-end" alt="Foto" />
            <div className="texto-encima-ama">
                <Parrafo />
            </div>
        </div>
    );
}

export default Chart;
