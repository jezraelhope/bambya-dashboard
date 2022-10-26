import React from "react";
import burger from "../assets/menu.svg";

const Hamburger = (props) => {
	const handleChange = () => {
		props.setHideAllMenus(
			{hamburger: "show"}
		);
		props.setToggleMenu("show");
	};
	return (
		<div className="hamburger" onClick={(e) => e.stopPropagation()}>
			<button className="open-menu-button" onClick={handleChange}>
				<img src={burger} alt="menu-icon" className="icon" />
			</button>
		</div>
	);
};

export default Hamburger;
