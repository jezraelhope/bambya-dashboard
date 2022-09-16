import React from "react";
import addTrade from "../assets/add.svg";
import AddTradeForm from './AddTradeForm'

const AddTrade = () => {
	return (
		<div className="add-trade-container">
			<img src={addTrade} alt="add-trade-icon" className="icon" />
			<AddTradeForm />
		</div>
	);
};

export default AddTrade;
