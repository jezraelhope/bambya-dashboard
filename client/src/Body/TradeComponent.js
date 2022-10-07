import React, {useEffect} from "react";

import ModalMenu from "./ModalMenu";

const TradeComponent = (props) => {
	const data = props.data
	const trades = data[props.month][props.date];

	useEffect(()=> {
		console.log(data)
	}, [data])

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
					<th>Profit</th>
					<th className="comment-header">Comments</th>
				</tr>
				{trades.map((trade) => {
					return (
						<tr key={trade.id}>
							<td>{trade.symbol.toUpperCase()}</td>
							<td>{trade.spreadType}</td>
							<td>{trade.longStrike}</td>
							<td>{trade.shortStrike}</td>
							<td>{trade.contractsNumber}</td>
							<td>{trade.openPrice}</td>
							<td>{trade.closePrice}</td>
							<td>data to be fetched</td>
							<td>{trade.closePrice ? trade.closePrice - trade.openPrice : "Not available"}</td>
							<td>{trade.comments}</td>
							<td>
								<ModalMenu
									handleDelete={props.handleDelete}
									setModalVisibility={props.setModalVisibility}
									setEditFormVisibility={props.setEditFormVisibility}
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
