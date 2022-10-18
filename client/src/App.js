import React, { useState, useEffect} from "react";
//import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Header";
import Body from "./Body";
import EditTradeModal from "./Modals/EditTradeModal";
import CloseTradeModal from "./Modals/CloseTradeModal"
import Background from "./Background";
import Footer from "./Footer";

import "./App.css";


function App(){
	const [monthToShow, setMonthToShow] = useState([]);
	const [data, setData] = useState([]);
	const [yearSelected, setYearSelected] = useState('2021');
	const [years, setYears] = useState([])
	const [modalVisibility, setModalVisibility] = useState('hide-main-modal')
	const [editFormVisibility, setEditFormVisibility] = useState('hide-edit-trade-form')
	const [closeTradeFormVisibility, setCloseTradeFormVisibility] = useState('hide-close-trade-form')
	const [tradeData, setTradeData] = useState({});

	// //deleting trade
	
	// const handleDelete = async (id) => {
	// 	if (window.confirm('Are you sure you want to delete?')) {
	// 		const deleteResult = await fetch(`/trades/${id}`, {
	// 			method: 'DELETE',
	// 			headers: {
	// 				'content-type': 'application/json',
	// 			},
	// 			body: JSON.stringify(),
	// 		});
	// 		console.log("deleted!", deleteResult)
	// 	} else {
	// 		console.log('cancel');
	// 	}
	// };

	//fetching data from api
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
	}, [])


	//toggle Main Modal

	const toggleMainModal = (toggleModal) => {
		toggleModal()
		setModalVisibility(modalVisibility === "hide-main-modal" ? "show-main-modal" : "hide-main-modal")
		setEditFormVisibility(editFormVisibility === "hide-edit-trade-form" ? "edit-trade" : "hide-edit-trade-form")
	}
	
	return (
		<div className="App">
			<div className={modalVisibility}>
				<EditTradeModal
					tradeData={tradeData}
					setTradeData={setTradeData}
					modalVisibility={modalVisibility}
					setModalVisibility={setModalVisibility}
					toggleMainModal={toggleMainModal}
					editFormVisibility={editFormVisibility}
					setEditFormVisibility={setEditFormVisibility}
				/>
				<CloseTradeModal
					tradeData={tradeData}
					setTradeData={setTradeData}
					modalVisibility={modalVisibility}
					setModalVisibility={setModalVisibility}
					toggleMainModal={toggleMainModal}
					closeTradeFormVisibility={closeTradeFormVisibility}
					setCloseTradeFormVisibility={setCloseTradeFormVisibility}
				/>
			</div>
			<Header
				data={data}
				monthToShow={monthToShow}
				setMonthToShow={setMonthToShow}
				setYearSelected={setYearSelected}
				yearSelected={yearSelected}
				years={years}
			/>
			<Body
				// handleDelete={handleDelete}
				yearSelected={yearSelected}
				monthToShow={monthToShow}
				data={data}
				years={years}
				setModalVisibility={setModalVisibility}
				setEditFormVisibility={setEditFormVisibility}
				setCloseTradeFormVisibility={setCloseTradeFormVisibility}
				setTradeData={setTradeData}
			/>
			<Background/>
			<Footer />
		</div>
	);
}

export default App;
