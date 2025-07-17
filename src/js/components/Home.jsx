import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import contentCard from "./Card.jsx";

//create your first component
const Home = () => {
	return (
		<div className="">
			<Navbar brandname="Start Bootstrap" />
			<Jumbotron
				title="A Warm Welcome!"
				text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, veniam quas harum recusandae aspernatur excepturi vitae soluta nulla animi? Obcaecati, at. Ullam cum commodi veritatis asperiores provident recusandae dolore odio."
			/>
			<div className="container">
			<div className="row d-flex justify-content-center">
				<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
					<Card
						image="https://media.vogue.es/photos/64afd0d243d251bcd59d0a41/master/w_1920%2Cc_limit/GettyImages-1465354523.jpg"
						imageAlt="Coco Chanel"
						title="Su camelia en honor a Coco Chanel"
						description="Para acudir a los BRIT Awards 2023 el cantante se decantó por un esmoquín firmado por Nina Ricci. Los pantalones eran corte acampanado y la silueta de la americana no dejaba de recordar al femenino new look de Dior. Se ajustaba a la cintura y nacía en forma de a hasta la cadera."
					/>
				</div>
				<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
					<Card
						image="https://media.vogue.es/photos/64afd0c58126b601af216f16/master/w_1920%2Cc_limit/GettyImages-1463459985.jpg"
						imageAlt="Cristales de Swarowski"
						title="Su mono de cristales de Swarowski"
						description="Harry acudió a los Grammy 2023 con un estilismo hecho a medida por la firma EGONLAB en colaboración con Swarovski. Contaba con 250.000 cristales de Swarovski en 9 colores"
					/>
				</div>
				<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
					<Card
						image="https://media.vogue.es/photos/64afd0ab10c840bbe31ad2c2/master/w_1920%2Cc_limit/GettyImages-1463279318.jpg"
						imageAlt="Coco Chanel"
						title="Su camelia en honor a Coco Chanel"
						description="En su actuación en los Grammy 2023 volvió a confiar en la misma firma que le creó el mono para la alfombra"
					/>
				</div>
				<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
					<Card
						image="https://media.vogue.es/photos/64afd0bba51c37e36995f4c4/master/w_1920%2Cc_limit/GettyImages-1422894990.jpg"
						imageAlt="Bolso verde de Gucci"
						title="Su bolso verde de Gucci"
						description="Para asistir a la premiere de My Policeman Harry se decantó por un total look en diferentes tonos de verde. Obviamente, el estilismo lo firmaba Gucci. El elemento clave del look era un bolso con el asa de bambú que recordaba a los orígenes de la casa florentina. Además, vistió a modo de broche una flor en la solapa izquierda de la americana."
					/>
				</div>
			</div>
			</div>

		<div className="Footer">
			<Footer
			description= "© 2025 Tu Compañía. Todos los derechos reservados."
			/>
		</div>

		</div>

	);
};
export default Home;
