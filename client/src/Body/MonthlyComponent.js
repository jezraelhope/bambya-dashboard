import React from 'react'
import ExpiryComponent from './ExpiryComponent'

const MonthlyComponent = (props) => {
    const data = props.data
    const year = props.year
    const month = props.month

    //calculate monthly profit
    const dates = Object.keys(data[year][month] || {})
    const flattenedMonthlyData = dates.reduce((acc, date) => {
        acc.push(...data[year][month][date])
        return acc
    }, [])

    const totalProfit = flattenedMonthlyData.reduce((acc, elem) => {
        acc = acc + (elem.closingData.profit || 0)
        return acc
    }, 0)

    return (
        <div className="monthly">
            <h3 className="total-profit">{`Total Profit ${totalProfit}`}</h3>
            <ExpiryComponent
                month={month}
                year={year}
                data={data}
                handleDelete={props.handleDelete}
                setModalVisibility={props.setModalVisibility}
                setEditFormVisibility={props.setEditFormVisibility}
                setCloseTradeFormVisibility={props.setCloseTradeFormVisibility}
                setTradeData={props.setTradeData}
                setRefetch={props.setRefetch}
                hideAllMenus={props.hideAllMenus}
                setHideAllMenus={props.setHideAllMenus}
                tradeView={props.tradeView}
            />
        </div>
    )
}

export default MonthlyComponent
