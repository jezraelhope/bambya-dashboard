import "./App.css";
import React, { useState, useEffect} from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { calculateCurrentMonthAndYear } from "./data/utils";

const fetchedData = async () => {
	try {
		const data = await fetch("/trades").then(res => res.json()).then(data => data)
        return data
	} catch(err) {
		console.log(err)
	}
}


function App(){
	const [monthToShow, setMonthToShow] = useState([]);
	const [data, setData] = useState([]);
	const [months, setMonthsData] = useState([]);
    
    useEffect(async () => {
        const fetched = await fetchedData()
		setData(fetched);
      }, [setData]);

	  calculateCurrentMonthAndYear(data);

	return (
		<div className="App">
			<Header
				setMonthToShow={setMonthToShow}
				data={data}
				months={months}
				/>
			<Body
				months={months}
				monthToShow={monthToShow}
				data={data}
			/>
			<Footer />
		</div>
	);
}

export default App;
