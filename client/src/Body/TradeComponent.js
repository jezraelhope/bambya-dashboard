import React from "react";

import ModalMenu from "./ModalMenu";

const TradeComponent = (props) => {
	const data = props.data
	const trades = data[props.month][props.date];

	return (
		<div className="trade-table">
			<table>
				<tbody>
				<tr>
					<th>Symbol</th>
					<th>Spread Type</th>
					<th>Long Strike</th>
					<th>Short Strike</th>
					<th>No. of Contracts</th>
					<th>Open Price</th>
					<th>Close Price</th>
					<th>Current Price</th>
					<th className="profit-header">Profit</th>
					<th className="comment-header">Comments</th>
				</tr>
				{trades.map((trade) => {
					console.log(trade)
					return (
						<tr key={trade.id}>
							<td>{trade.symbol?.toUpperCase()}</td>
							<td>{trade.spreadType}</td>
							<td>{trade.longStrike}</td>
							<td>{trade.shortStrike}</td>
							<td>{trade.contractsNumber}</td>
							<td>{trade.openPrice}</td>
							<td>{trade.closingData.closePrice}</td>
							<td>data to be fetched</td>
							<td>{trade.closingData.closePrice ? trade.closingData.closePrice - trade.openPrice : "Not available"}</td>
							<td>{trade.comments}</td>
							<td>
								<ModalMenu
									handleDelete={props.handleDelete}
									setModalVisibility={props.setModalVisibility}
									setEditFormVisibility={props.setEditFormVisibility}
									setCloseTradeFormVisibility={props.setCloseTradeFormVisibility}
									setTradeData={props.setTradeData}
									trade={trade}
									tradeId={trade.id}
								/>
							</td>
						</tr>
					);
				})}
				</tbody>
			</table>
		</div>
	);
};

export default TradeComponent;
