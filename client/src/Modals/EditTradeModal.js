import React from "react";
import cancel from "../assets/cancel.svg";

import "./styles/modals.css"

const EditTradeModal = (props) => {
    const setModalVisibility = props.setModalVisibility;
    const setEditFormVisibility = props.setEditFormVisibility;
    const tradeData = props.tradeData;
    const date = `${tradeData.date}`
    
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
                            value={date.slice(0,10)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="symbol">Ticker Symbol</label>
                        <input 
                            type="text"
                            name="symbol"
                            value={tradeData.symbol}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numberContracts">Number of Contracts</label>
                        <input
                            type="number"
                            name="contractsNumber"
                            value={tradeData.contractsNumber}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="spreadType">Spread Type</label>
                        <select name="spreadType" id="spreadType">
                            <option disabled>--Select Spread Type Below</option>
                            <option
                                {...tradeData.spreadType === "Bull Call" ? "selected" : ""}
                                value="Bull Call"
                            >
                                Bull Call
                            </option>
                            <option
                                {...tradeData.spreadType === "Bear Put" ? "selected" : ""}
                                value="Bear Put"
                            >
                                Bear Put
                            </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="longStrike">Long Strike</label>
                        <input
                            type="number"
                            name="expiry-date"
                            value={tradeData.longStrike}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="shortStrike">Short Strike</label>
                        <input
                            type="number"
                            name="shortStrike"
                            value={tradeData.shortStrike}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="openPrice">Open Price</label>
                        <input
                            type="number"
                            name="openPrice"
                            value={tradeData.openPrice}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="openComments">Open Comments</label>
                        <input
                            type="text"
                            name="openComments"
                            value={tradeData.comments}
                        />
                    </div>
                    <button className="form-button">Apply</button>
                </form>
            </div>
        </section>
    )
}

export default EditTradeModal