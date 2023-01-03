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
            {monthToShow.map((month) => {
                return (
                    <main className="monthly-container" key={month}>
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
                        />
                    </main>
                )
            })}
        </main>
    )
}

export default Body
