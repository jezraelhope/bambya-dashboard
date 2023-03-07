import React, { useState } from 'react'
import './styles/header.css'

import Hamburger from './Hamburger'
import Title from './Title'
import AddTrade from './AddTrade'
import SideMenu from './SideMenu'
import AddTradeForm from './AddTradeForm'

const Header = (props) => {
    const setMonthToShow = props.setMonthToShow
    const [toggleMenu, setToggleMenu] = useState('hide')
    const [toggleAddTrade, setToggleAddTrade] = useState('hide')
    const user = props.user
    return (
        <header className="header-container">
            <Hamburger
                toggleMenu={toggleMenu}
                setToggleMenu={setToggleMenu}
                setHideAllMenus={props?.setHideAllMenus}
            />
            <SideMenu
                data={props.data}
                years={props.years}
                monthToShow={props.monthToShow}
                setMonthToShow={setMonthToShow}
                setYearSelected={props.setYearSelected}
                yearSelected={props.yearSelected}
                toggleMenu={toggleMenu}
                setToggleMenu={setToggleMenu}
                hideAllMenus={props?.hideAllMenus}
                setHideAllMenus={props?.setHideAllMenus}
            />
            <Title name={user.name} />
            <AddTrade
                setHideAllMenus={props?.setHideAllMenus}
                toggleAddTrade={toggleAddTrade}
                setToggleAddTrade={setToggleAddTrade}
            />
            <AddTradeForm
                hideAllMenus={props?.hideAllMenus}
                setHideAllMenus={props?.setHideAllMenus}
                setToggleAddTrade={setToggleAddTrade}
                toggleAddTrade={toggleAddTrade}
                refetch={props.refetch}
                setRefetch={props.setRefetch}
            />
        </header>
    )
}

export default Header
