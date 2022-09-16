import "./App.css";
import React, { useState, useEffect} from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { fetchedData } from "./data/utils";




function App(){
	const [monthToShow, setMonthToShow] = useState([]);
	
	const [data, setData] = useState([]);
    
    useEffect(async () => {
        const fetched = await fetchedData()
		setData(fetched);
      }, [setData]);

	  
	return (
		<div className="App">
			<Header setMonthToShow={setMonthToShow} />
			<Body monthToShow={monthToShow}/>
			<Footer />
		</div>
	);
}

export default App;
