import React from "react";
import MonthlyComponent from "./MonthlyComponent";
import "./styles/body.css";

const Body = ({ monthToShow }) => {
	return (
		<main className="main-container">
			{(monthToShow || []).length
				? null
				: "Please choose the month from the side menu to filter"}
			{monthToShow.map((month) => {
				return (
					<div className="monthly-container">
						<h2 key={month}>{month}</h2>
						<MonthlyComponent month={month} />
					</div>
				);
			})}
		</main>
	);
};

export default Body;
