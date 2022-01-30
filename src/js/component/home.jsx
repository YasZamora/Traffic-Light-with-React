import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [color, setColor] = useState("");

	return (
		<>
			<div className="stick"></div>
			<div className="container">
				<button
					onClick={() => setColor("red")}
					className={
						"light1 " + (color == "red" ? " glow " : " ")
					}></button>
				<button
					onClick={() => setColor("yellow")}
					className={
						"light2 " + (color == "yellow" ? " glow " : " ")
					}></button>
				<button
					onClick={() => setColor("green")}
					className={
						"light3 " + (color == "green" ? " glow " : "")
					}></button>
			</div>
		</>
	);
};

export default Home;
