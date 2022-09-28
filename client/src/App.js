import React, { useState, useEffect} from "react";
//import {BrowserRouter as Router, Routes, Route} from "react-router"
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

import "./App.css";



function App(){
	const [monthToShow, setMonthToShow] = useState([]);
	const [data, setData] = useState([]);
	const [yearSelected, setYearSelected] = useState('2021');
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
				monthToShow={monthToShow}
				setMonthToShow={setMonthToShow}
				setYearSelected={setYearSelected}
				yearSelected={yearSelected}
				years={years}
			/>
			<Body
				yearSelected={yearSelected}
				monthToShow={monthToShow}
				data={data}
				years={years}
			/>
			<Footer />
		</div>
	);
}

export default App;
