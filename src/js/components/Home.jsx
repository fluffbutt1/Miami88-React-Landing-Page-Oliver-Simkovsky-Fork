import React from "react";
import NewHTML from "./New";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { NavBar } from "./NavBar";
import { Jumbo } from "./Jumbo";

//create your first component
const Home = () => {

	return (
		<div className="text-center">
            
			<NavBar/>
			<Jumbo/>
		</div>
	);
};

export default Home;