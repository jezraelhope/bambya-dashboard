import React, { useState, useEffect} from "react";
//import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
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

	const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            const deleteResult = await fetch(`/trades/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(),
            });
            console.log("deleted!", deleteResult)
        } else {
            console.log('cancel');
        }
    };
	
	
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
				handleDelete={handleDelete}
			/>
			<Footer />
		</div>
	);
}

export default App;
