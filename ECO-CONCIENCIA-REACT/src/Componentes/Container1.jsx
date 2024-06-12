
import React from 'react';
import './Container1.css';
import Card from './Card1';
import ReactPlayer from 'react-player';
import AnimacionCuento from './AnimacionCuento';
import renata from '../assets/renata.png'
import marco from '../assets/marco.png'
import canario from '../assets/canario.png'

function Container1() {
  const videoURLs = [
    "https://www.youtube.com/watch?v=PFIiBaEuDCE",
    "https://www.youtube.com/watch?v=IVGUf-9u6Xo",
    "https://www.youtube.com/watch?v=6RACWyJJPr8",
    "https://www.youtube.com/watch?v=oHcSqUsjlWI",
    "https://www.youtube.com/watch?v=1rl3XVQ6Vik",
    "https://www.youtube.com/watch?v=ExOBjG44czw",
  ];

  const cuentos = [
    {
      titulo: "RENATA Y LA LATA",
      imagen: renata,
      texto: `Una tarde de otoño cuando estaba depositando unas viejas revistas en el contenedor azul escuchó, sorprendida, cómo una voz salía del interior.

La niña asomó su puntiaguda nariz  y, a través de la ranura, observó como desde lo más profundo del contenedor, repleto de  papeles y cartones, una pequeña y abollada lata de refresco reclamaba su atención.

–         Por favor sácame de aquí– gritaba la lata– alguien por error me ha tirado a este contenedor.

–         ¿Quién eres?- preguntó Renata-sorprendida aún por estar hablando con una lata.

–         No soy una lata cualquiera. Soy una lata viajera. De reluciente aluminio aún conservo mi brillo.

Era, sin dudarlo, una lata parlanchina que de todas sus palabras hacía una rima y no podía estar en el contenedor azul. Tenía que estar junto con los envases de plástico y los bricks en el contenedor amarillo.

Renata iba a lanzarla al contenedor amarillo cuando, de nuevo, habló la lata.

–         No, no me tires aún. Ya te dije que era una lata viajera que viajando de casa en casa hasta llegué a la Nasa y desde el espacio vi la basura que hay aquí.

–         Llévame para tu casa– continuó hablando la lata– y seré un práctico portalápices para tus rotuladores de colores.

–         ¿Sabes? He tenido muchas vidas y todas ellas divertidas. En casa del carnicero fui un práctico cenicero y un hermoso collar para el cuello de Pilar y un colgante muy elegante para un famoso cantante y una noria y un camión para el niño Simón y hasta una bicicleta para la niña Enriqueta y, y y…….

–         Vale, vale, no sigas hablando que me estás mareando- dijo Renata– ¡Ay!, que yo también estoy hablando en verso.

La niña cogió la lata con mucho cuidado sin poder evitar que  unas gotas del refresco de cola que aún estaba en el fondo se derramara por su mano dejándola pegajosa.

A partir de ese día Renata fue recogiendo todas las latas de refrescos del vecindario y montó un taller de manualidades reciclables en el garaje de su casa.  Cada día, después de estudiar y hacer lo deberes del colegio, se reunía con sus amigos para construir prácticos y hermosos juguetes.

Construyeron miles de objetos que envolvieron en papel reciclado y los enviaron a los grandes almacenes que los Reyes Magos tienen en Oriente para repartirlos entre  todos los niños del Continente.

Y así, entre todos, ayudaron a salvar el Medio Ambiente.

Texto: María Jesús Cano`,
    },
    {
      titulo: "MARCO Y EL RECICLAJE",
      imagen: marco,
      texto: `En el colegio, la clase favorita de Marco era la de manualidades. Le encantaba embadurnarse las manos con pintura, sacar sus lápices de colores de la mochila o hacer figuras de escayola para después darles color.

Una semana, la profesora les anunció que iban a construir unos mini contenedores de reciclaje. Les explicó a los niños que así aprenderían a distinguir qué cosa va en cada uno de ellos. Los iban a fabricar de tres colores, como los que tenemos en la calle.

Marco anotó bien en su cuaderno que el azul era para el papel y el cartón, el verde para el vidrio y el amarillo para los envases de plástico.

- ¿Y las latas de refresco, profe? - preguntó intrigado el niño.

- Esas van en el amarillo, Marco. Y los de la leche y las latas de sardinas que tanto te gustan, también - le explicó detenidamente la profesora.

Con todas sus notas bien organizadas en el cuaderno, Marco pidió a su madre que le acompañase a la tienda a por el material que tenía que llevar al día siguiente al colegio. Necesitaba unas planchas grandes de cartón, pintura amarilla, azul y verde, un rotulador gordo, cola para pegar y unas tijeras.

Después de comprarlo todo y llegar a casa, lo puso al lado de la puerta para que a la mañana siguiente
no se le olvidase nada.

Al día siguiente, cuando sonó la sirena que anunciaba el comienzo de la clase de manualidades, Marco se puso muy nervioso. En realidad, llevaba algo alterado toda la mañana. Se había pasado la noche soñando con sus contenedores de reciclaje.

Lo primero que hizo, tras escuchar las instrucciones de la profesora, fue dibujar el símbolo que ella había puesto en la pizarra. Eran como tres flechas retorcidas formando una especie de círculo.

La profe explicó a la clase que ese era el símbolo del reciclaje. Marco entendió que las flechas significaban que las cosas se pueden volver a usar cuando creemos que ya no nos sirven. Entendió que el reciclaje es una manera muy útil de ayudar a nuestro planeta.

- Si reciclamos los periódicos y las revistas que ya hemos leído, habrá que talar menos árboles para fabricar más papel - explicó la profesora.

Marco comprendió que pasaba lo mismo con las latas de refrescos, con las botellas de cristal o con los canutillos del papel higiénico. Todo se podía reciclar y por eso los niños tenían que aprender bien en qué contenedor iba cada cosa.

En dos clases de manualidades, Marco acabó sus contenedores y se los pudo llevar a casa. Como eran de tamaño pequeño, los pudo colocar en su habitación.`,
    },
    {
      titulo: "EL CANARIO RECICLADOR",
      imagen: canario,
      texto: `En las ramas de un viejo algarrobo habitaban cinco canaritos. Dichos pajaritos iban de paraje en paraje buscando frutos y cereales para poder subsistir cotidianamente, excepto uno de ellos que, al ver un morro de basura en el campo, de inmediato fue a despejarlo seleccionando material servible como plásticos, cartones y papeles para llevarlo a su nido para restaurar la estructura de la misma y luego lo decoró con esos recursos dejando admirados a sus amigos quienes fueron a felicitar al canarito por su inquietud artística a la vez le preguntaron :

- ¿Cómo hiciste para adornar tu casita? Y el reciclador les contesta: 

- ¡Muy fácil amigos, aprovechar los desperdicios arrojados por seres ajenos a mantener un ornato limpio para darle un uso adecuado así mismo contribuyendo a conservar el medio ambiente y nuestro planeta!

Y la bandada en general quiso imitar su iniciativa de reciclar los residuos encontrados en el suelo y darle utilidad en la ambientación de su viejo árbol y del habitad donde vivían. 

Moraleja: el reciclaje brinda oportunidades que para crear novedades.`,
    },
  ];

  return (
    <div className="container-lg">
      <h1 className="titulo-cuento">CUENTOS</h1>
      <AnimacionCuento />
      <div className="videos-container">
        {videoURLs.map((url, index) => (
          <div className="video" key={index}>
            <ReactPlayer
              url={url}
              playing={false}
              volume={0.5}
              width="100%"
              height="100%"
            />
          </div>
        ))}
       </div>
      <h4 className="subtitulo">Puedes prácticar la lectura y aprender al mismo tiempo!</h4>
      <div className="cuentos-container">
        {cuentos.map((cuento, index) => (
          <Card key={index} titulo={cuento.titulo} imagen={cuento.imagen} texto={cuento.texto} />
        ))}
      </div>
    </div> 
  );
}

export default Container1;

