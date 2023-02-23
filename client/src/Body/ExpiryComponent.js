import React, { useEffect, useState } from 'react'
import TradeComponent from './TradeComponent'

const ExpiryComponent = (props) => {
    const data = props.data[props.year]
    const tradeView = props.tradeView
    const [closedTrades, setClosedTrades] = useState([])
    const [openTrades, setOpenTrades] = useState([])

    const closedExpiry = closedTrades.map((trade) => {
        return new Date(trade.date).getDate() + 1
    })
    const openExpiry = openTrades.map((trade) => {
        return new Date(trade.date).getDate() + 1
    })

    const [expiry, setExpiry] = useState([])

    useEffect(() => {
        if (tradeView === 'closed') {
            setExpiry([...new Set(closedExpiry)])
            setClosedTrades([])
        } else if (tradeView === 'open') {
            setExpiry([...new Set(openExpiry)])
            setOpenTrades([])
        } else {
            setExpiry(Object.keys(data[props.month] || {}))
        }
    }, [tradeView, data, props.month])

    return expiry.map((date) => {
        return (
            <div className="expiry-container" key={date}>
                <h4 className="expiry-date">
                    Expiry Date: {`${props.month} ${date}`}
                </h4>

                <TradeComponent
                    month={props.month}
                    date={date}
                    data={data}
                    handleDelete={props.handleDelete}
                    setModalVisibility={props.setModalVisibility}
                    setEditFormVisibility={props.setEditFormVisibility}
                    setCloseTradeFormVisibility={
                        props.setCloseTradeFormVisibility
                    }
                    setTradeData={props.setTradeData}
                    setRefetch={props.setRefetch}
                    hideAllMenus={props.hideAllMenus}
                    setHideAllMenus={props.setHideAllMenus}
                    tradeView={tradeView}
                    setClosedTrades={setClosedTrades}
                    setOpenTrades={setOpenTrades}
                />
            </div>
        )
    })
}

export default ExpiryComponent
