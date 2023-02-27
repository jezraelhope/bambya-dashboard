import React, { useState } from 'react'
import MonthlyComponent from './MonthlyComponent'
import './styles/body.css'

const Body = (props) => {
    const monthToShow = props.monthToShow
    const data = props.data
    const yearSelected = props.yearSelected

    const [tradeView, setTradeView] = useState('all')

    const changeTradeView = (e) => {
        setTradeView(e.target.value)
    }
    const main = () => {
        if ((monthToShow || []).length) {
            return (
                <div className="open-closed-filter-container">
                    <button
                        onClick={changeTradeView}
                        className="all-trades trade-view-button"
                        value="all"
                    >
                        all trades
                    </button>
                    <button
                        onClick={changeTradeView}
                        className="open-trades trade-view-button"
                        value="open"
                    >
                        open trades
                    </button>
                    <button
                        onClick={changeTradeView}
                        className="closed-trades trade-view-button"
                        value="closed"
                    >
                        closed trades
                    </button>
                </div>
            )
        } else {
            return (
                <p>Please choose the month from the left side menu to filter</p>
            )
        }
    }

    return (
        <main className="main-container">
            {main()}
            {monthToShow.map((month) => {
                return (
                    <div className="monthly-container" key={month}>
                        <h2 className="month-name">{month}</h2>
                        <MonthlyComponent
                            month={month}
                            year={yearSelected}
                            data={data}
                            hideAllMenus={props.hideAllMenus}
                            setHideAllMenus={props.setHideAllMenus}
                            handleDelete={props.handleDelete}
                            setModalVisibility={props.setModalVisibility}
                            setEditFormVisibility={props.setEditFormVisibility}
                            setCloseTradeFormVisibility={
                                props.setCloseTradeFormVisibility
                            }
                            setTradeData={props.setTradeData}
                            setRefetch={props.setRefetch}
                            tradeView={tradeView}
                        />
                    </div>
                )
            })}
        </main>
    )
}

export default Body
