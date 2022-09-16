import React, {useState} from "react";

const AddTradeForm = () => {

    const [formData, setFormData] = useState({})

    const handleSubmit = e => {

        setFormData({
            //symbol: e.target.elements.symbol.value,
            [e.target.name]: e.target.value
        })
        
        e.preventDefault();
    }


    return(
        <form action="/trades" method="post" encType="text/json" className="add-trade-form">
            <h2>Add Trade</h2>
            <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input onChange={handleSubmit} type="date" name="expiryDate"/>
            </div>
            <div className="form-group">
                <label htmlFor="symbol">Ticker Symbol</label>
                <input onChange={handleSubmit}type="text" name="symbol"/>
            </div>
            <div className="form-group">
                <label htmlFor="numberContracts">Number of Contracts</label>
                <input onChange={handleSubmit} type="number" name="numberContracts"/>
            </div>
            <div className="form-group">
                <label htmlFor="spreadType">Spread Type</label>
                <input onChange={handleSubmit} type="text" name="spreadType"/>
            </div>
            <div className="form-group">
                <label htmlFor="longStrike">Long Strike</label>
                <input onChange={handleSubmit} type="number" name="expiry-date"/>
            </div>
            <div className="form-group">
                <label htmlFor="shortStrike">Short Strike</label>
                <input onChange={handleSubmit} type="number" name="shortStrike"/>
            </div>
            <div className="form-group">
                <label htmlFor="openPrice">Open Price</label>
                <input onChange={handleSubmit} type="number" name="openPrice"/>
            </div>
            <div className="form-group">
                <label htmlFor="openComments">Open Comments</label>
                <input onChange={handleSubmit} type="text" name="openComments"/>
            </div>
            <button type="submit">Apply</button>
        </form>
    )
}

export default AddTradeForm