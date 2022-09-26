import React from "react";
import ExpiryComponent from "./ExpiryComponent";

const MonthlyComponent = (props) => {
	return (
		<div className="monthly">
			<div>Total Profit</div>
			<ExpiryComponent month={props.month} />
		</div>
	);
};

export default MonthlyComponent;
