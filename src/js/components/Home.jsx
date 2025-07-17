import React from "react";
import Navbar from "./Navbar";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import contentCard from "./Card.jsx";

//create your first component
const Home = () => {
  return (
    <div className="container">
      <NavBar />
      <Jumbotrone />
    </div>
  );
};

const data = {
	image1: "https://media.vogue.es/photos/64afd0d243d251bcd59d0a41/master/w_1920%2Cc_limit/GettyImages-1465354523.jpg",
	image2: "https://media.vogue.es/photos/64afd0c58126b601af216f16/master/w_1920%2Cc_limit/GettyImages-1463459985.jpg",
	image3: "https://media.vogue.es/photos/64afd0bba51c37e36995f4c4/master/w_1920%2Cc_limit/GettyImages-1422894990.jpg",
	image4: "https://media.vogue.es/photos/64afd0ab10c840bbe31ad2c2/master/w_1920%2Cc_limit/GettyImages-1463279318.jpg",
	
	cardTitle1: "Su camelia en honor a Coco Chanel",
	cardTitle2: "Su mono de cristales de Swarowski",
	cardTitle3: "Su bolso verde de Gucci",
	cardTitle4: "Su mono de flecos y lentejulas",

	cardDescription1:"Para acudir a los BRIT Awards 2023 el cantante se decantó por un esmoquín firmado por Nina Ricci. Los pantalones eran corte acampanado y la silueta de la americana no dejaba de recordar al femenino new look de Dior. Se ajustaba a la cintura y nacía en forma de a hasta la cadera.",
	cardDescription2:"Harry acudió a los Grammy 2023 con un estilismo hecho a medida por la firma EGONLAB en colaboración con Swarovski. Contaba con 250.000 cristales de Swarovski en 9 colores diferentes. Toda una oda a la valentía y la libertad por parte del cantante.",
	cardDescription3:"Para asistir a la premiere de My Policeman Harry se decantó por un total look en diferentes tonos de verde. Obviamente, el estilismo lo firmaba Gucci. El elemento clave del look era un bolso con el asa de bambú que recordaba a los orígenes de la casa florentina. Además, vistió a modo de broche una flor en la solapa izquierda de la americana.",
	cardDescription4:"En su actuación en los Grammy 2023 volvió a confiar en la misma firma que le creó el mono para la alfombra roja, EGONLAB en colaboración con Swarovski. Se trató de un mono de flecos y lentejuelas que presentó la marca en su colección masculina de otoño-invierno 2024.",
};



export default Home;
