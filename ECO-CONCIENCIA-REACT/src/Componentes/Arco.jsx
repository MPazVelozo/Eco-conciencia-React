import "./Arco.css";
import Text from './Text';

function Arco({ imagen = "Arco" }) {
    return (
        <div className="contenedor-imagens" style={{ backgroundImage: "url('./assets/arco.png')" }}>
            <img src={imagen} className="foto-imgg rounded float-end" alt="Foto" />
            <div className="texto-encimaa">
                <Text />
            </div>
        </div>
    );
}

export default Arco;
