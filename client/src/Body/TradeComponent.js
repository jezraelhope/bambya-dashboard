import React, { useEffect } from 'react'

import ModalMenu from './ModalMenu'

const TradeComponent = (props) => {
    const data = props.data
    const trades = data[props.month][props.date]
    const tradeView = props.tradeView
    const setClosedTrades = props.setClosedTrades
    const setOpenTrades = props.setOpenTrades

    const closedTrades = trades.filter((trade) => {
        return trade.closingData.closeDate
    })

    const openTrades = trades.filter((trade) => {
        return (
            trade.closingData.closeDate === null ||
            trade.closingData.closeDate === undefined
        )
    })

    useEffect(() => {
        setOpenTrades(openTrades)
    }, [])

    useEffect(() => {
        setClosedTrades(closedTrades)
    }, [])

    if (tradeView === 'closed') {
        return (
            <div className="trade-table">
                <table>
                    <tbody>
                        <tr>
                            <th className="table-heading">Symbol</th>
                            <th className="table-heading">Spread Type</th>
                            <th className="table-heading">Long Strike</th>
                            <th className="table-heading">Short Strike</th>
                            <th className="table-heading">No. of Contracts</th>
                            <th className="table-heading">Open Price</th>
                            <th className="table-heading">Close Price</th>
                            <th className="table-heading">Current Price</th>
                            <th className="profit-header table-heading">
                                Profit
                            </th>
                            <th className="comment-header table-heading">
                                Closed Comments
                            </th>
                            <th className="table-heading"></th>
                        </tr>
                        {trades.map((trade) => {
                            return (
                                <tr key={trade.id} className={trade.id}>
                                    <td>{trade.symbol?.toUpperCase()}</td>
                                    <td>{trade.spreadType}</td>
                                    <td>{trade.longStrike}</td>
                                    <td>{trade.shortStrike}</td>
                                    <td>{trade.contractsNumber}</td>
                                    <td>{trade.openPrice}</td>
                                    <td>{trade.closingData.closePrice}</td>
                                    <td>data to be fetched</td>
                                    <td>
                                        {trade.closingData.profit
                                            ? trade.closingData.profit
                                            : 'Not Available'}
                                    </td>
                                    <td>{trade.closingData.closeComments}</td>
                                    <td>
                                        <ModalMenu
                                            handleDelete={props.handleDelete}
                                            setModalVisibility={
                                                props.setModalVisibility
                                            }
                                            setEditFormVisibility={
                                                props.setEditFormVisibility
                                            }
                                            setCloseTradeFormVisibility={
                                                props.setCloseTradeFormVisibility
                                            }
                                            setTradeData={props.setTradeData}
                                            trade={trade}
                                            tradeId={trade.id}
                                            setRefetch={props.setRefetch}
                                            hideAllMenus={props.hideAllMenus}
                                            setHideAllMenus={
                                                props.setHideAllMenus
                                            }
                                        />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    } else {
        return (
            <div className="trade-table">
                <table>
                    <tbody>
                        <tr>
                            <th className="table-heading">Symbol</th>
                            <th className="table-heading">Spread Type</th>
                            <th className="table-heading">Long Strike</th>
                            <th className="table-heading">Short Strike</th>
                            <th className="table-heading">No. of Contracts</th>
                            <th className="table-heading">Open Price</th>
                            <th className="table-heading">Close Price</th>
                            <th className="table-heading">Current Price</th>
                            <th className="profit-header table-heading">
                                Profit
                            </th>
                            <th className="comment-header table-heading">
                                Comments
                            </th>
                            <th className="table-heading"></th>
                        </tr>
                        {trades.map((trade) => {
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
                                    <td>
                                        {trade.closingData.profit
                                            ? trade.closingData.profit
                                            : 'Not Available'}
                                    </td>
                                    <td>{trade.comments}</td>
                                    <td>
                                        <ModalMenu
                                            handleDelete={props.handleDelete}
                                            setModalVisibility={
                                                props.setModalVisibility
                                            }
                                            setEditFormVisibility={
                                                props.setEditFormVisibility
                                            }
                                            setCloseTradeFormVisibility={
                                                props.setCloseTradeFormVisibility
                                            }
                                            setTradeData={props.setTradeData}
                                            trade={trade}
                                            tradeId={trade.id}
                                            setRefetch={props.setRefetch}
                                            hideAllMenus={props.hideAllMenus}
                                            setHideAllMenus={
                                                props.setHideAllMenus
                                            }
                                        />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TradeComponent
