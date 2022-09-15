import React from "react";
import burger from "../assets/menu.svg";

const Hamburger = (props) => {
	const handleChange = () => {
		props.setToggleMenu("show-menu");
	};
	return (
		<div className="hamburger">
			<button className="open-menu-button" onClick={handleChange}>
				<img src={burger} alt="menu-icon" className="icon" />
			</button>
		</div>
	);
};

export default Hamburger;
