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
				toggleMenu={toggleMenu}
				setToggleMenu={setToggleMenu}
				setMonthToShow={setMonthToShow}
				data = {props.data}
			/>
			<Title />
			<AddTrade />
			<AddTradeForm />
		</header>
	);
};

export default Header;
