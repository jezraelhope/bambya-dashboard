import React, { useState, useEffect} from "react";
//import {BrowserRouter as Router, Routes, Route} from "react-router"
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

import "./App.css";



function App(){
	const [monthToShow, setMonthToShow] = useState([]);
	const [data, setData] = useState([]);
	const [yearsToShow, setYearToShow] = useState([]);
	const [years, setYears] = useState([])
	
	const fetchedData = async () => {
		try {
			const data = await fetch("/trades").then(res => res.json()).then(data => data)
			return data
		} catch(err) {
			console.log(err)
		}
	}
    
    useEffect(async () => {
        const fetched = await fetchedData()
		setData(fetched);
		setYears(Object.keys(fetched))
	}, [setData]);
	
	
	return (
		<div className="App">
			<Header
				data={data}
				setMonthToShow={setMonthToShow}
				setYearToShow={setYearToShow}
				years={years}
			/>
			<Body
				yearsToShow={years}
				monthToShow={monthToShow}
				data={data}
			/>
			<Footer />
		</div>
	);
}

export default App;
