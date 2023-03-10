import React, { useState, useEffect } from 'react'
//import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Header'
import Body from './Body'
import EditTradeModal from './Modals/EditTradeModal'
import CloseTradeModal from './Modals/CloseTradeModal'
import Background from './Background'
import Footer from './Footer'
import Login from './Main/Login'
import Logout from './Main/Logout'
import Loading from './assets/loading.svg'
import './App.css'
import { useAuth0 } from '@auth0/auth0-react'

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
        })
    }
    //fetching data from api
    const fetchData = async () => {
        try {
            const res = await fetch('/trades')
            const data = await res.json()
            return data
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const fetchAndSetData = async () => {
            const fetched = await fetchData()
            setData(fetched)
            setYears(Object.keys(fetched))
            setRefetch(false)
        }
        fetchAndSetData()
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
    const { isLoading, isAuthenticated, error, user } = useAuth0()
    console.log(user)

    if (isLoading) {
        return (
            <div className="App purple-theme loading">
                <img src={Loading} alt="loading" className="loading-image" />
            </div>
        )
    }

    return (
        <div className="App purple-theme" onClick={() => handleAllMenus()}>
            {!isAuthenticated ? (
                <div className="login-page">
                    <h1>You are not authorized. Please login</h1>
                    <Login />
                </div>
            ) : (
                <div>
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
                            setCloseTradeFormVisibility={
                                setCloseTradeFormVisibility
                            }
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
                        fetchedData={fetchData}
                        refetch={refetch}
                        setRefetch={setRefetch}
                        user={user}
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
                        setCloseTradeFormVisibility={
                            setCloseTradeFormVisibility
                        }
                        setTradeData={setTradeData}
                        setRefetch={setRefetch}
                    />
                    <Background />
                    <Footer />
                </div>
            )}
        </div>
    )
}

export default App
