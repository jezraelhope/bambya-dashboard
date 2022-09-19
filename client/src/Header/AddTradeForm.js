import React, {useState} from "react";

const AddTradeForm = () => {

    const [expiryDate, setExpiryDate] = useState(new Date())
    const [symbol, setSymbol] = useState('')
    const [contracts, setContactsNumber] = useState(0)
    const [spreadType, setSpreadType] = useState('Bull Call')
    const [longStrike, setLongStrike] = useState(0)
    const [shortStrike, setShortStrike] = useState(0)
    const [openPrice, setOpenPrice] = useState(0)
    const [openComments, setOpenComments] = useState("")


    const handleSubmit = e => {
        e.preventDefault();
        const formData = {
            expiryDate,
            symbol,
            contracts,
            spreadType,
            longStrike,
            shortStrike,
            openPrice,
            openComments
        }
        fetch('/trades', {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(formData)
        }).then(() => {
            console.log("new data added", formData)
        })
    }
    
    return(
        <form className="add-trade-form" onSubmit={handleSubmit}>
            <h2>Add Trade</h2>
            <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                    type="date"
                    name="expiryDate"
                    onChange={e => setExpiryDate(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="symbol">Ticker Symbol</label>
                <input 
                    type="text"
                    name="symbol"
                    onChange={e => setSymbol(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="numberContracts">Number of Contracts</label>
                <input
                    type="number"
                    name="contractsNumber"
                    onChange={e => setContactsNumber(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="spreadType">Spread Type</label>
                <input
                    type="text"
                    name="spreadType"
                    onChange={e => setSpreadType(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="longStrike">Long Strike</label>
                <input
                    type="number"
                    name="expiry-date"
                    onChange={e => setLongStrike(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="shortStrike">Short Strike</label>
                <input
                    type="number"
                    name="shortStrike"
                    onChange={e => setShortStrike(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="openPrice">Open Price</label>
                <input
                    type="number"
                    name="openPrice"
                    onChange={e => setOpenPrice(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="openComments">Open Comments</label>
                <input
                    type="text"
                    name="openComments"
                    onChange={e => setOpenComments(e.target.value)}
                />
            </div>
            <button>Apply</button>
        </form>
    )
}

export default AddTradeForm