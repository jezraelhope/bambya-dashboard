import React from "react";
import TradeComponent from "./TradeComponent";
import newSampleData from "../data/newSampleData";

const ExpiryComponent = (props) => {
	const expiry = Object.keys(newSampleData[props.month]);
	return expiry.map((date) => {
		return (
			<div className="expiry-container">
				<div>{`${props.month} ${date}`}</div>
				<TradeComponent month={props.month} date={date} />
			</div>
		);
	});
};

export default ExpiryComponent;
