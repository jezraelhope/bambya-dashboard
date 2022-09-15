import React, { useState } from "react";
import "./styles/header.css";

import Hamburger from "./Hamburger";
import Title from "./Title";
import AddTrade from "./AddTrade";
import SideMenu from "./SideMenu";

const Header = ({ setMonthToShow }) => {
	const [toggleMenu, setToggleMenu] = useState("hide-menu");
	return (
		<header className="header-container">
			<Hamburger toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
			<SideMenu
				toggleMenu={toggleMenu}
				setToggleMenu={setToggleMenu}
				setMonthToShow={setMonthToShow}
			/>
			<Title />
			<AddTrade />
		</header>
	);
};

export default Header;
