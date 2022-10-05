import React from "react";
import cancel from "../assets/cancel.svg";

import "./styles/modals.css"

const EditTradeModal = (props) => {
    const setModalVisibility = props.setModalVisibility
    const setEditFormVisibility = props.setEditFormVisibility

    const hideMainModal = () => {
        setEditFormVisibility("hide-edit-trade-form");
        setModalVisibility("hide-main-modal")
    }



    return(
        <section className={props.editFormVisibility}>
            <div className="modal-button-container">
                <button className="close-modal-button" onClick={hideMainModal}>
                    <img src={cancel} alt="cancel-button" />
                </button>
            </div>
            <div className="edit-trade-form-container">
                <h2>Edit Trade</h2>
                <form className="edit-trade-form">
                    <div className="form-group">
                        <label htmlFor="expiryDate">Expiry Date</label>
                        <input
                            type="date"
                            name="expiryDate"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="symbol">Ticker Symbol</label>
                        <input 
                            type="text"
                            name="symbol"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numberContracts">Number of Contracts</label>
                        <input
                            type="number"
                            name="contractsNumber"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="spreadType">Spread Type</label>
                        <select name="spreadType" id="spreadType">
                            <option selected disabled>--Select Spread Type Below</option>
                            <option value="Bull Call">Bull Call</option>
                            <option value="Bear Put">Bear Put</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="longStrike">Long Strike</label>
                        <input
                            type="number"
                            name="expiry-date"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="shortStrike">Short Strike</label>
                        <input
                            type="number"
                            name="shortStrike"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="openPrice">Open Price</label>
                        <input
                            type="number"
                            name="openPrice"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="openComments">Open Comments</label>
                        <input
                            type="text"
                            name="openComments"
                        />
                    </div>
                    <button className="form-button">Apply</button>
                </form>
            </div>
        </section>
    )
}

export default EditTradeModal