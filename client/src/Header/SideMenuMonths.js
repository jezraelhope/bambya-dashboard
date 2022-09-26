import React, {useState, useEffect} from "react";

import add from "../assets/add.svg";
import minus from "../assets/minus.svg";
import chevron from "../assets/chevron.svg";
import { monthWords } from "../data/utils";

const SideMenuMonths = (props) => {
    const data = props.data;
    const showMonths = props.showMonths;
    const yearSelected = props.yearSelected;
    const setMonthToShow = props.setMonthToShow;
    const months = Object.keys(data[yearSelected] || {})

    const [monthsMap, setMonthsMap] = useState(
        months.reduce((acc, elem) => {
            acc[elem] = false;
            return acc;
        }, {})
    );

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
    
console.log(monthsMap)

    return (
        <div className={`${showMonths} months-container`}>
            <h2>{yearSelected}</h2>
            {months.map((month) => {
                const monthWord = monthWords[month]
                return (
                    <div key={monthWord}>
                        <input
                            type="checkbox"
                            id={month}
                            name={monthWord}
                            value={month}
                            checked={month}
                            onChange={handleCheckboxChange}
                            className="hide-checkbox"
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
}

export default SideMenuMonths