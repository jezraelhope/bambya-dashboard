import React from "react";
import addTrade from "../assets/add.svg";

const AddTrade = () => {
	return (
		<div className="add-trade-container">
			<img src={addTrade} alt="add-trade-icon" className="icon" />
		</div>
	);
};

export default AddTrade;
