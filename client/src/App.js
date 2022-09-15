import "./App.css";
import "./App.css";
import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function App() {
	const [monthToShow, setMonthToShow] = useState([]);
	return (
		<div className="App">
			<Header setMonthToShow={setMonthToShow} />
			<Body monthToShow={monthToShow} />
			<Footer />
		</div>
	);
}

export default App;
