import React from "react";
import MonthlyComponent from "./MonthlyComponent";
import "./styles/body.css";

const Body = (props) => {

	const monthToShow = props.monthToShow;
	const data = props.data;
	const yearSelected = props.yearSelected;

	return (
		<main className="main-container">
			{(monthToShow || []).length
				? null
				: "Please choose the month from the left side menu to filter"}
			{monthToShow.map((month) => {
				return (
					<div className="monthly-container" key={month}>
						<h2>{month}</h2>
						<MonthlyComponent
							month={month}
							year={yearSelected}
							data={data}
							handleDelete={props.handleDelete}
							setModalVisibility={props.setModalVisibility}
							setEditFormVisibility={props.setEditFormVisibility}
							setCloseTradeFormVisibility={props.setCloseTradeFormVisibility}
							setTradeData={props.setTradeData}
						/>
					</div>
				);
			})}
		</main>
	);
};

export default Body;
