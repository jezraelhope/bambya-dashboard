import React from "react";
import addTrade from "../assets/add.svg";

const AddTrade = (props) => {
	const handleChange = (e) => {
		props.setToggleAddTrade("show-form");
		props.setHideAllMenus(
			{addTrade: "show-form"}
		);
	};
	return (
		<div className="add-trade" onClick={(e) => e.stopPropagation()}>
			<button className="open-menu-button" onClick={handleChange}>
				<img src={addTrade} alt="add-trade-icon" className="icon" />
			</button>
		</div>
	);
};

export default AddTrade;