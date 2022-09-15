import React from "react";
import newSampleData from "../data/newSampleData";

const TradeComponent = (props) => {
	const trades = newSampleData[props.month][props.date];
	return (
		<div className="trade-table">
			<table>
				<tr>
					<th>Symbol</th>
					<th>Spread Type</th>
					<th>Long Strike</th>
					<th>Short Strike</th>
					<th>No. of Contracts</th>
					<th>Open Price</th>
					<th>Close Price</th>
					<th>Current Price</th>
					<th>Profit</th>
					<th>Comments</th>
				</tr>
				{trades.map((trade) => {
					return (
						<tr>
							<td>{trade.symbol}</td>
							<td>{trade.spreadType}</td>
							<td>{trade.longStrike}</td>
							<td>{trade.shortStrike}</td>
							<td>{trade.contractCount}</td>
							<td>{trade.openPrice}</td>
							<td>{trade.closePrice}</td>
							<td>data to be fetched</td>
							<td>{trade.closePrice - trade.openPrice}</td>
							<td>{trade.comments}</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
};

export default TradeComponent;
