import React, {useState} from "react";

import threeDots from '../assets/three-dots.svg'


const Modal = (props) => {
    const [showModal, setShowModal] = useState("hide-modal")
    const setModalVisibility = props.setModalVisibility
    const setEditFormVisibility = props.setEditFormVisibility
    const setCloseTradeFormVisibility=props.setCloseTradeFormVisibility
    const setTradeData = props.setTradeData
    const trade = props.trade
    const handleDelete = props.handleDelete

	const toggleModal = () => {
		setShowModal(
			showModal === "hide-modal" ? "show-modal" : "hide-modal"
		)
	}

    const showCloseTradeForm = () => {
        setTradeData(trade)
        setCloseTradeFormVisibility("close-trade-form")
        setModalVisibility("show-main-modal")
        toggleModal()
    }

    const showMainModal = () => {
        setTradeData(trade)
        setEditFormVisibility("edit-trade")
        setModalVisibility("show-main-modal")
        toggleModal()
    }

    return(
        <div className="edit-delete-close-button-container">
            <button className="edit-delete-close-button" onClick={toggleModal}>
                <img src={threeDots} alt="threedots" className="icon three-dots"/>
            </button>
            <div className={showModal} id="modal">
                <div className="actual-modal">
                    <button onClick={showMainModal}>Edit</button>
                    <button onClick={showCloseTradeForm}>Close</button>
                    <button onClick={async () => await handleDelete(props.tradeId)}>Delete</button>
                    <button className="close-window" onClick={toggleModal}>close window</button>
                </div>
            </div>
        </div>
    )
}

export default Modal