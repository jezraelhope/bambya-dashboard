import React, { useState, useEffect } from 'react'
//import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Header'
import Body from './Body'
import EditTradeModal from './Modals/EditTradeModal'
import CloseTradeModal from './Modals/CloseTradeModal'
import Background from './Background'
import Footer from './Footer'
import './App.css'

function App() {
    const [monthToShow, setMonthToShow] = useState([])
    const [data, setData] = useState([])
    const [yearSelected, setYearSelected] = useState('2021')
    const [years, setYears] = useState([])
    const [modalVisibility, setModalVisibility] = useState('hide-main-modal')
    const [editFormVisibility, setEditFormVisibility] = useState(
        'hide-edit-trade-form'
    )
    const [closeTradeFormVisibility, setCloseTradeFormVisibility] = useState(
        'hide-close-trade-form'
    )
    const [tradeData, setTradeData] = useState({})
    const [hideAllMenus, setHideAllMenus] = useState({})
    const [refetch, setRefetch] = useState(false)

    const handleAllMenus = () => {
        setHideAllMenus({
            hamburger: 'hide',
            addTrade: 'hide',
            popOver: 'hide',
        })
    }
    //fetching data from api
    const fetchedData = async () => {
        try {
            const data = await fetch('/trades')
                .then((res) => res.json())
                .then((data) => data)
            return data
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(async () => {
        const fetched = await fetchedData()
        setData(fetched)
        setYears(Object.keys(fetched))
        setRefetch(false)
    }, [refetch])

    //toggle Main Modal

    const toggleMainModal = (toggleModal) => {
        toggleModal()
        setModalVisibility(
            modalVisibility === 'hide-main-modal'
                ? 'show-main-modal'
                : 'hide-main-modal'
        )
        setEditFormVisibility(
            editFormVisibility === 'hide-edit-trade-form'
                ? 'edit-trade'
                : 'hide-edit-trade-form'
        )
    }
    return (
        <div className="App purple-theme" onClick={() => handleAllMenus()}>
            <div className={modalVisibility}>
                <EditTradeModal
                    tradeData={tradeData}
                    setTradeData={setTradeData}
                    modalVisibility={modalVisibility}
                    setModalVisibility={setModalVisibility}
                    toggleMainModal={toggleMainModal}
                    editFormVisibility={editFormVisibility}
                    setEditFormVisibility={setEditFormVisibility}
                    setRefetch={setRefetch}
                />
                <CloseTradeModal
                    tradeData={tradeData}
                    setTradeData={setTradeData}
                    modalVisibility={modalVisibility}
                    setModalVisibility={setModalVisibility}
                    toggleMainModal={toggleMainModal}
                    closeTradeFormVisibility={closeTradeFormVisibility}
                    setCloseTradeFormVisibility={setCloseTradeFormVisibility}
                    setRefetch={setRefetch}
                />
            </div>
            <Header
                data={data}
                monthToShow={monthToShow}
                setMonthToShow={setMonthToShow}
                setYearSelected={setYearSelected}
                yearSelected={yearSelected}
                years={years}
                hideAllMenus={hideAllMenus}
                setHideAllMenus={setHideAllMenus}
                fetchedData={fetchedData}
                refetch={refetch}
                setRefetch={setRefetch}
            />
            <Body
                // handleDelete={handleDelete}
                yearSelected={yearSelected}
                monthToShow={monthToShow}
                hideAllMenus={hideAllMenus}
                setHideAllMenus={setHideAllMenus}
                data={data}
                years={years}
                setModalVisibility={setModalVisibility}
                setEditFormVisibility={setEditFormVisibility}
                setCloseTradeFormVisibility={setCloseTradeFormVisibility}
                setTradeData={setTradeData}
                setRefetch={setRefetch}
            />
            <Background />
            <Footer />
        </div>
    )
}

export default App
