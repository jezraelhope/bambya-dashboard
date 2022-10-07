import React, {useEffect, useState} from "react";
import cancel from "../assets/cancel.svg";

import "./styles/modals.css"

const EditTradeModal = (props) => {
    const setModalVisibility = props.setModalVisibility;
    const setEditFormVisibility = props.setEditFormVisibility;
    const tradeData = props?.tradeData;
    const date = `${tradeData.date}`;

    const [expiryDate, setExpiryDate] = useState(tradeData?.expiryDate)
    const [symbol, setSymbol] = useState(tradeData?.symbol);
    const [contractsNumber, setContractsNumber] = useState(tradeData?.contractsNumber)
    const [spreadType, setSpreadType] = useState(tradeData?.SpreadType)
    const [longStrike, setLongStrike] = useState(tradeData?.longStrike)
    const [shortStrike, setShortStrike] = useState(tradeData?.shortStrike)
    const [openPrice, setOpenPrice] = useState(tradeData?.openPrice)
    const [openComments, setOpenComments] = useState(tradeData?.openComments)

    useEffect(() => {
        setExpiryDate(tradeData.expiryDate);
        setSymbol(tradeData.symbol);
        setContractsNumber(tradeData.contractsNumber);
        setSpreadType(tradeData.spreadType);
        setLongStrike(tradeData.longStrike);
        setShortStrike(tradeData.shortStrike);
        setOpenPrice(tradeData.openPrice);
        setOpenComments(tradeData.openComments)
    }, [])
    

    const hideMainModal = () => {
        setEditFormVisibility("hide-edit-trade-form");
        setModalVisibility("hide-main-modal")
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        const formData = {
            expiryDate,
            symbol,
            contractsNumber,
            spreadType,
            longStrike,
            shortStrike,
            openPrice,
            openComments
        }

        console.log(formData)

        try {
            let res = await fetch(`/trades/${tradeData.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(formData)
            }).then(() => {
                console.log("trade edited!", formData)
            });

        } catch (err) {
            console.log(err)
        }

        e.target.reset();
        hideMainModal();
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
                <form className="edit-trade-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="expiryDate">Expiry Date</label>
                        <input
                            type="date"
                            name="expiryDate"
                            value={date.slice(0,10)}
                            onChange={e => setExpiryDate(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="symbol">Ticker Symbol</label>
                        <input 
                            type="text"
                            name="symbol"
                            value={symbol}
                            onChange={e => setSymbol(e.target.symbol)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numberContracts">Number of Contracts</label>
                        <input
                            type="number"
                            name="contractsNumber"
                            value={contractsNumber}
                            onChange={e => setContractsNumber(e.target.contractsNumber)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="spreadType">Spread Type</label>
                        <select name="spreadType" id="spreadType" onChange={e => setSpreadType(e.target.spreadType)}>
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
                            value={longStrike}
                            onChange={e => setLongStrike(e.target.longStrike)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="shortStrike">Short Strike</label>
                        <input
                            type="number"
                            name="shortStrike"
                            value={shortStrike}
                            onChange={e => setShortStrike(e.target.shortStrike)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="openPrice">Open Price</label>
                        <input
                            type="number"
                            name="openPrice"
                            value={openPrice}
                            onChange={e => setOpenPrice(e.target.openPrice)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="openComments">Open Comments</label>
                        <input
                            type="text"
                            name="openComments"
                            value={openComments}
                            onChange={e => setOpenComments(e.target.openComments)}
                        />
                    </div>
                    <button type="submit" className="form-button">Apply</button>
                </form>
            </div>
        </section>
    )
}

export default EditTradeModal