import React from "react";
import TradeComponent from "./TradeComponent";

const ExpiryComponent = (props) => {
	const data = props.data[props.year];
	const expiry = Object.keys(data[props.month] || {});
	
	return expiry.map((date) => {
		return (
			<div className="expiry-container" key={date}>
				<h4 className="expiry-date">Expiry Date: {`${props.month} ${date}`}</h4>
				<TradeComponent
					month={props.month}
					date={date}
					data={data}
					handleDelete={props.handleDelete}
					setModalVisibility={props.setModalVisibility}
					setEditFormVisibility={props.setEditFormVisibility}
					setCloseTradeFormVisibility={props.setCloseTradeFormVisibility}
					setTradeData={props.setTradeData}
				/>
			</div>
		);
	});
};

export default ExpiryComponent;
