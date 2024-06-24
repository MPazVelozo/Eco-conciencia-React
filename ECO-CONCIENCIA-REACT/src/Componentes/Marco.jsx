import React from "react";
import "./Marco.css";
import Texto1 from './Texto1';

function Marco({ imagen = "Marco" }) {
    return (
        <div className="contenedor-imagenn" style={{ backgroundImage: "url('./assets/marco.png')" }}>
            <img src={imagen} className="foto-imgg rounded float-end" alt="Foto" />
            <div className="texto-encima">
                <Texto1 />
            </div>
        </div>
    );
}

export default Marco;
