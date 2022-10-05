import React, {useState} from "react";

import threeDots from '../assets/three-dots.svg'

import { toggleModal } from "../data/utils";


const Modal = (props) => {
    const [showModal, setShowModal] = useState("hide-modal")
    const setModalVisibility = props.setModalVisibility
    const setEditFormVisibility = props.setEditFormVisibility

	const toggleModal = () => {
		setShowModal(
			showModal === "hide-modal" ? "show-modal" : "hide-modal"
		)
	}

    const showMainModal = () => {
        setEditFormVisibility("edit-trade")
        setModalVisibility("show-main-modal")
        toggleModal()
    }

    return(
        <div className="edit-delete-close-button-container">
            <button className="edit-delete-close-button" onClick={toggleModal}>
                <img src={threeDots}  className="icon three-dots"/>
            </button>
            <div className={showModal} id="modal">
                <div className="actual-modal">
                    <button onClick={showMainModal}>Edit</button>
                    <a href="#">Close</a>
                    <button onClick={async () => await props.handleDelete(props.tradeId)}>Delete</button>
                    <button className="close-window" onClick={toggleModal}>close window</button>
                </div>
            </div>
        </div>
    )
}

export default Modal