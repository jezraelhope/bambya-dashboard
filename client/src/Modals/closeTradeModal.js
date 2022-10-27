import React, {useRef} from "react";
import cancel from "../assets/cancel.svg";

import "./styles/modals.css"

const CloseTradeModal = (props) => {

    const setModalVisibility = props.setModalVisibility;
    const setCloseTradeFormVisibility = props.setCloseTradeFormVisibility;
    const tradeData = props.tradeData

    const closePrice = useRef(0);
    const closeComments = useRef("");
    const closeDate = useRef(new Date().toJSON().slice(0,10))

    const hideMainModal = () => {
        setCloseTradeFormVisibility("hide-close-trade-form");
        setModalVisibility("hide-main-modal")
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        const closeTradeData = {
            expiryDate: tradeData.expiryDate,
            symbol: tradeData.symbol,
            contractsNumber: tradeData.contractsNumber,
            spreadType: tradeData.spreadType,
            longStrike: tradeData.longStrike,
            shortStrike: tradeData.shortStrike,
            openPrice: tradeData.openPrice,
            openComments: tradeData.openComments,
            closingData: {
                closeDate: closeDate.current.value,
                closePrice: closePrice.current.value,
                closeComments: closeComments.current.value,
                profit: closePrice.current.value - tradeData.openPrice
            }
            
        }

        try {
            fetch(`/close/${tradeData.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(closeTradeData)
            }).then(() => {
                console.log("trade closed!", closeTradeData)
            });

        } catch (err) {
            console.log(err)
        }

        props.setRefetch(true);
        e.target.reset();
        hideMainModal();
    }
    
    return(
        <section className={props.closeTradeFormVisibility}>
            <div className="modal-button-container">
                <button className="close-modal-button" onClick={hideMainModal}>
                    <img src={cancel} alt="cancel-button" />
                </button>
            </div>
            <div className="close-trade-form-container">
                <h2>Close Trade</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="closingDate">Closing Date</label>
                        <input
                            type="date"
                            ref={closeDate}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="closingPrice">Closing Price</label>
                        <input 
                            type="number"
                            ref={closePrice}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="closingComments">Closing Comments</label>
                        <input
                            type="text"
                            ref={closeComments}
                        />
                    </div>
                    <button type="submit" className="form-button">Close Trade</button>
                </form>
            </div>
        </section>
    )
}

export default CloseTradeModal