import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { NavBar } from "./NavBar";
import { Jumbo } from "./Jumbo";
import { Cards } from "./Cards";

//create your first component
const Home = () => {

	return (
		<div className="text-center">
            
			<NavBar/>
			<Jumbo/>
			<Cards />
		</div>
	);
};

export default Home;