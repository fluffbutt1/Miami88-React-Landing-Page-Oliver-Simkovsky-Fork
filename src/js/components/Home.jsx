import React from "react";
import NewHTML from "./New";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { NavBar } from "./NavBar";

//create your first component
const Home = () => {

	

	return (
		<div className="text-center">
            
			<NavBar/>
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;