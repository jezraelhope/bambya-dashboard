import React, {useState} from "react";

import threeDots from '../assets/three-dots.svg'


const Modal = (props) => {
    const [showModal, setShowModal] = useState("hide-modal")

	const toggleModal = () => {
		setShowModal(
			showModal === "hide-modal" ? "show-modal" : "hide-modal"
		)
	}
    return(
        <div className="edit-delete-close-button-container">
            <button className="edit-delete-close-button" onClick={toggleModal}>
                <img src={threeDots}  className="icon three-dots"/>
            </button>
            <div className={showModal} id="modal">
                <div className="actual-modal">
                    <a href="#">Edit</a>
                    <a href="#">Close</a>
                    <button onClick={async () => await props.handleDelete(props.tradeId)}>Delete</button>
                    <button className="close-window" onClick={toggleModal}>close window</button>
                </div>
            </div>
        </div>
    )
}

export default Modal