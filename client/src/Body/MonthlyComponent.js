import React from "react";
import ExpiryComponent from "./ExpiryComponent";

const MonthlyComponent = (props) => {
	return (
		<div className="monthly">
			<h3>Total Profit</h3>
			<ExpiryComponent
				month={props.month}
				year={props.year}
				data={props.data}
				handleDelete={props.handleDelete}
				setModalVisibility={props.setModalVisibility}
				setEditFormVisibility={props.setEditFormVisibility}
				setTradeData={props.setTradeData}
			/>
		</div>
	);
};

export default MonthlyComponent;
