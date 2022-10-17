import React, {useState, useEffect} from "react";

import add from "../assets/add.svg";
import minus from "../assets/minus.svg";

const SideMenuMonths = (props) => {
    const data = props.data;
    const monthsMap = props.monthsMap;
    const setMonthsMap = props.setMonthsMap;
    const showMonthsContainer = props.showMonthsContainer;
    const yearSelected = props.yearSelected;
    const monthToShow = props.monthToShow
    const setMonthToShow = props.setMonthToShow;
    const months = Object.keys(data[yearSelected] || {})
   

    useEffect(() => {
        const enabledMonths = Object.keys(monthsMap || []).filter(
            (elem) => monthsMap[elem]
        );
        setMonthToShow((prevValue) => [...enabledMonths]);
    }, [monthsMap, setMonthToShow]);
    

    const handleCheckboxChange = (e) => {
		setMonthsMap((prevValue) => ({
			...prevValue,
			[e.target.id]: !monthsMap[e.target.id]
		}));
	};

    return (
        <div className={`${showMonthsContainer} months-container`}>
            <h2 className="year">{yearSelected}</h2>
            {months.map((month) => {
                return (
                    <div key={month}>
                        <input
                            type="checkbox"
                            id={month}
                            name={month}
                            value={month}
                            onChange={handleCheckboxChange}
                            className="hide-checkbox"
                        />
                        <label className="side-nav-month-label" htmlFor={month}>
                            {month}
                            <img
                                src={monthToShow.includes(month) ? minus : add}
                                alt="toggle-month"
                                className="add-month-icon"
                                />
                        </label>
                    </div>
                );
            })}
        </div>
    )



}

export default SideMenuMonths