import React, { useState, useEffect } from "react";
import "./styles/header.css";

import cancel from "../assets/cancel.svg";
import add from "../assets/add.svg";
import minus from "../assets/minus.svg";
import chevron from "../assets/chevron.svg";
import { months } from "../data/utils";
import { monthWords } from "../data/utils";

const Menu = (props) => {
	
	//constants
	const data = props.data;
	const years = props.years
	const setMonthToShow = props.setMonthToShow;
	const setYearToShow = props.setYearToShow

	//states
	const [toggleDropDown, setToggleDropDown] = useState("hide-drop-down");
	const [monthsMap, setMonthsMap] = useState(
		months.reduce((acc, elem) => {
			acc[elem] = false;
			return acc;
		}, {})
	);
	const [yearsMap, setYearsMap] = useState(
		years.reduce((acc, elem) => {
			acc[elem] = false;
			return acc;
		}, {})
	);

	//builder functions
	useEffect(() => {
		const enabledMonths = Object.keys(monthsMap || []).filter(
			(elem) => monthsMap[elem]
		);
		const enabledYears = Object.keys(yearsMap || []).filter(
			(elem) => yearsMap[elem]
		);
		setMonthToShow((prevValue) => [...enabledMonths]);
		setYearToShow((prevValue) => [...enabledMonths]);
	}, [monthsMap, setMonthToShow, yearsMap, setYearToShow]);

	const handleChange = () => {
		props.setToggleMenu("hide-menu");
	};

	const handleCheckboxChange = (e) => {
		setMonthsMap((prevValue) => ({
			...prevValue,
			[e.target.id]: !monthsMap[e.target.id],
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
			{years.map(year => {
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
							const monthWord = monthWords[month]

							return (
								<div
									key={monthWord}
									className={`side-nav-months-container ${toggleDropDown}`}
								>
									<input
										type="checkbox"
										id={month}
										name={monthWord}
										value={month}
										checked={month}
										onChange={handleCheckboxChange}
										className="hideCheckbox"
									/>
									<label className="side-nav-month-label" htmlFor={month}>
										{monthWord}
										<img
											src={monthWord ? minus : add}
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
