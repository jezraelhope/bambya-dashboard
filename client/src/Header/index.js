import React, { useState } from "react";
import "./styles/header.css";

import Hamburger from "./Hamburger";
import Title from "./Title";
import AddTrade from "./AddTrade";
import SideMenu from "./SideMenu";
import AddTradeForm from "./AddTradeForm";

const Header = (props) => {
	const setMonthToShow = props.setMonthToShow
	const [toggleMenu, setToggleMenu] = useState("hide-menu");
	return (
		<header className="header-container">
			<Hamburger
				toggleMenu={toggleMenu}
				setToggleMenu={setToggleMenu}
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
			/>
			<Title />
			<AddTrade />
			<AddTradeForm />
		</header>
	);
};

export default Header;
