import React, { useState, useEffect } from "react";
import "./styles/header.css";


import SideMenuMonths from "./SideMenuMonths";

import cancel from "../assets/cancel.svg";

const Menu = (props) => {
	
	//constants
	const data = props.data;
	const years = props.years
	const yearSelected = props.yearSelected
	const setYearSelected = props.setYearSelected;
	const setMonthToShow = props.setMonthToShow;

	//states
	const [showMonths, setShowMonths] = useState("months-not-shown")
	
	//builder functions
	const handleChange = () => {
		props.setToggleMenu("hide");
	};

	const handleYearChange = (e) => {
		setYearSelected(e.target.value);
		setShowMonths(yearSelected ? "months-shown" : "months-not-shown")
	};

	return (
		<section className={props.toggleMenu}>
			<div className="sidemenu-button-container">
				<button className="close-menu-button" onClick={handleChange}>
					<img src={cancel} alt="cancel-button" />
				</button>
			</div>
			<nav className="year-nav">
				<ul className="years-tab">
					{years.map(year => {
						return(
							<li className="year-item" key={year}>
								<button onClick={handleYearChange} value={year}>
									{year}
								</button>
							</li>
						)
					})}
				</ul>
			</nav>
			<SideMenuMonths
				data={data}
				showMonths={showMonths}
				monthToShow={props.monthToShow}
				setShowMonths={setShowMonths}
				yearSelected={yearSelected}
				setMonthToShow={setMonthToShow}
			/>
		</section>
	);
};

export default Menu;
