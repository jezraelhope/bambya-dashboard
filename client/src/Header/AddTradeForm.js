import React, { useRef } from 'react'
import cancel from '../assets/cancel.svg'

const AddTradeForm = (props) => {
    const symbolRef = useRef('')
    const contractsNumberRef = useRef(0)
    const spreadTypeRef = useRef('')
    const longStrikeRef = useRef(0)
    const shortStrikeRef = useRef(0)
    const openPriceRef = useRef(0)
    const openCommentsRef = useRef('')

    const expiryDateRef = useRef(new Date())

    const handleSubmit = (e) => {
        e.preventDefault()

        let spreadType = spreadTypeRef.current.value
        if (spreadType === '--Select Spread Type Below--') {
            spreadType = ''
        } else {
            spreadType = spreadTypeRef.current.value
        }

        const formData = {
            expiryDate: expiryDateRef.current.value,
            symbol: symbolRef.current.value,
            contractsNumber: contractsNumberRef.current.value,
            spreadType,
            longStrike: longStrikeRef.current.value,
            shortStrike: shortStrikeRef.current.value,
            openPrice: openPriceRef.current.value,
            openComments: openCommentsRef.current.value,
        }

        fetch('/trades', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        }).then(() => {
            console.log('new data added', formData)
        })

        e.target.reset()
        props.setToggleAddTrade('hide')
        props.setHideAllMenus({ addTrade: 'hide' })
        props.setRefetch(true)
    }

    const handleChange = () => {
        props.setToggleAddTrade('hide')
        props.setHideAllMenus({ addTrade: 'hide' })
    }

    const sidemenuClass = props?.hideAllMenus.addTrade || 'hide'

    return (
        <section className={sidemenuClass} onClick={(e) => e.stopPropagation()}>
            <div className="button-container">
                <button className="close-form-button" onClick={handleChange}>
                    <img src={cancel} alt="cancel-button" />
                </button>
            </div>
            <div className="add-trade-form-container">
                <h2>Add Trade</h2>
                <form className="add-trade-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="expiryDate">Expiry Date</label>
                        <input type="date" ref={expiryDateRef} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="symbol">Ticker Symbol</label>
                        <input type="text" ref={symbolRef} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numberContracts">
                            Number of Contracts
                        </label>
                        <input type="number" ref={contractsNumberRef} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="spreadType">Spread Type</label>
                        <select ref={spreadTypeRef} id="spreadType">
                            <option selected disabled>
                                --Select Spread Type Below--
                            </option>
                            <option value="Bull Call">Bull Call</option>
                            <option value="Bear Put">Bear Put</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="longStrike">Long Strike</label>
                        <input type="number" ref={longStrikeRef} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="shortStrike">Short Strike</label>
                        <input type="number" ref={shortStrikeRef} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="openPrice">Open Price</label>
                        <input type="number" ref={openPriceRef} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="openComments">Open Comments</label>
                        <input type="text" ref={openCommentsRef} />
                    </div>
                    <button className="form-button">Apply</button>
                </form>
            </div>
        </section>
    )
}

export default AddTradeForm
