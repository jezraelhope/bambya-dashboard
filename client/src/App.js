import "./App.css";
import "./App.css";
import React, { useState} from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function App() {
	const [monthToShow, setMonthToShow] = useState([]);
	// const [data, setData] = useState(null);
    
    // useEffect(() => {
    //     fetch("/trades")
    //       .then((res) => res.json())
    //       .then(actualData => setData(actualData))
    //       .catch((err) => {
    //         console.log(err)
    //       })
    //   }, []);
	  
	return (
		<div className="App">
			<Header setMonthToShow={setMonthToShow} />
			<Body monthToShow={monthToShow}/>
			<Footer />
		</div>
	);
}

export default App;
