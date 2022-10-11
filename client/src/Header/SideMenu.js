import React, { useState } from "react";
import "./styles/header.css";


import SideMenuMonths from "./SideMenuMonths";

import cancel from "../assets/cancel.svg";

const Menu = (props) => {
	
	//constants
	const monthToShow = props.monthToShow
	const data = props.data;
	const years = props.years
	const yearSelected = props.yearSelected
	const setYearSelected = props.setYearSelected;
	const setMonthToShow = props.setMonthToShow;

	//states
	const [showMonthsContainer, setShowMonthsContainer] = useState("months-not-shown")
	
	//builder functions
	const handleChange = () => {
		props.setToggleMenu("hide");
	};

	const handleYearChange = (e) => {
		setYearSelected(e.target.value);
		setShowMonthsContainer(yearSelected ? "months-shown" : "months-not-shown")
		setMonthToShow([]);
	};

	return (
		<div className={props.toggleMenu}>
			<section>
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
					showMonthsContainer={showMonthsContainer}
					monthToShow={monthToShow}
					setShowMonthsContainer={setShowMonthsContainer}
					yearSelected={yearSelected}
					setMonthToShow={setMonthToShow}
				/>
			</section>
			</div>
	);
};

export default Menu;
