import React from "react";
import addTrade from "../assets/add.svg";

const AddTrade = () => {
	return (
		<div className="add-trade-container">
			<button className="open-menu-button">
				<img src={addTrade} alt="add-trade-icon" className="icon" />
			</button>
		</div>
	);
};

export default AddTrade;