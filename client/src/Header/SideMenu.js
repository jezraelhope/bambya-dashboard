import React, { useState, useEffect } from "react";
import "./styles/header.css";

import cancel from "../assets/cancel.svg";
import add from "../assets/add.svg";
import minus from "../assets/minus.svg";
import chevron from "../assets/chevron.svg";
import { months } from "../data/utils";
import { monthWords } from "../data/utils";

const Menu = (props) => {
	const data = props.data;
	// const months = props.months;	
	const setMonthToShow = props.setMonthToShow;

	const [toggleDropDown, setToggleDropDown] = useState("hide-drop-down");
	const [checkboxMap, setCheckBoxValue] = useState(
		months.reduce((acc, elem) => {
			acc[elem] = false;
			return acc;
		}, {})
	);

	useEffect(() => {
		const enabledMonths = Object.keys(checkboxMap || []).filter(
			(elem) => checkboxMap[elem]
		);
		setMonthToShow((prevValue) => [...enabledMonths]);
	}, [checkboxMap, setMonthToShow]);

	const handleChange = () => {
		props.setToggleMenu("hide-menu");
	};

	const handleCheckboxChange = (e) => {
		setCheckBoxValue((prevValue) => ({
			...prevValue,
			[e.target.id]: !checkboxMap[e.target.id],
		}));
	};
	const toggleYear = () => {
		if (toggleDropDown === "hide-drop-down") {
			setToggleDropDown("show-drop-down");
		} else {
			setToggleDropDown("hide-drop-down");
		}
	};

	return (
		<section className={props.toggleMenu}>
			<button className="close-menu-button" onClick={handleChange}>
				<img src={cancel} alt="cancel-button" />
			</button>
			{Object.keys(data).map(year => {
				return(
					<div key={year}>
						<button className="toggle-year" onClick={toggleYear}>
							<h2>{year}</h2>
							<img
								className={`icon ${toggleDropDown}`}
								src={chevron}
								alt="chevron"
							/>
						</button>
						{Object.keys(data[year]).map((month) => {
							month = monthWords[month]
							return (
								<div key={month}
									className={`side-nav-months-container ${toggleDropDown}`}
								>
									<input
										type="checkbox"
										id={month}
										name={month}
										value={month}
										checked={checkboxMap[month]}
										onChange={handleCheckboxChange}
										className="hideCheckbox"
									/>
									<label className="side-nav-month-label" htmlFor={month}>
										{month}
										<img
											src={checkboxMap[month] ? minus : add}
											alt="toggle-month"
											className="add-month-icon"
										/>
									</label>
								</div>
							);
						})}
					</div>
				)
			})}
		</section>
	);
};

export default Menu;
