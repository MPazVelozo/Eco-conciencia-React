import React from 'react';
import './Contenedores.css';
import { Link } from 'react-router-dom';

function Contenedores({color, to}) {
    return (
        <div className="container"> <Link to={to}>
            <button className="botonn">
                <img
                    src={color}
                    className="imagen35"
                    alt="Contenedor"
                />
            </button>
            </Link>
        </div>
    );
}

export default Contenedores;
