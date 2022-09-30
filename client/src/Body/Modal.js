import React, {useState} from "react";

import threeDots from '../assets/three-dots.svg'


const Modal = () => {
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
                    <a href="#">Delete</a>
                    <button onClick={toggleModal}>close modal</button>
                </div>
            </div>
        </div>
    )
}

export default Modal