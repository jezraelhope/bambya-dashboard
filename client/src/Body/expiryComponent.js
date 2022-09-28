import React from "react";
import TradeComponent from "./TradeComponent";
import newSampleData from "../data/newSampleData";

const ExpiryComponent = (props) => {
	const data = props.data[props.year]
	const expiry = Object.keys(data[props.month] || {});

	return expiry.map((date) => {
		return (
			<div className="expiry-container">
				<div key={date}>{`${props.month} ${date}`}</div>
				<TradeComponent
					month={props.month}
					date={date}
					data={data}
				/>
			</div>
		);
	});
};

export default ExpiryComponent;
