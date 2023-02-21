import React from 'react'
import MonthlyComponent from './MonthlyComponent'
import './styles/body.css'

const Body = (props) => {
    const monthToShow = props.monthToShow
    const data = props.data
    const yearSelected = props.yearSelected

    return (
        <main className="main-container">
            {(monthToShow || []).length
                ? null
                : 'Please choose the month from the left side menu to filter'}

            <div>
                <div className="open-closed-filter-container">
                    <button className="all-trades">all trades</button>
                    <button className="open-trades">open trades</button>
                    <button className="closedß-trades">closed trades</button>
                </div>
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
                                setEditFormVisibility={
                                    props.setEditFormVisibility
                                }
                                setCloseTradeFormVisibility={
                                    props.setCloseTradeFormVisibility
                                }
                                setTradeData={props.setTradeData}
                                setRefetch={props.setRefetch}
                            />
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

export default Body
