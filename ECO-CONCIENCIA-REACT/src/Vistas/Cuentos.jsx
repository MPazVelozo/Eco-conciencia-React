
import Container1 from "../Componentes/Container1";
import Boton from "../Componentes/Boton";
import "./Cuentos.css";
import Calidad from "../Componentes/Calidad";

function App() {
  return (
    <div>
      <div className="bot">
        <Boton />
      </div>
      <Container1 />
      <Calidad />
    </div>
  );
}

export default App;
