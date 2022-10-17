const express = require('express');
const router = express.Router();
const Trade = require('../models/trades');

//closing trade

router.put("/:id", async (req, res) => {
    const closeTradeBody = {
        sym: req.body.symbol,
        expiryDate: req.body.expiryDate,
        spreadType: req.body.spreadType,
        longStrike: req.body.longStrike,
        shortStrike: req.body.shortStrike,
        contractsNumber: req.body.contractsNumber,
        openPrice: req.body.openPrice,
        openComments: req.body.openComments,
        closingData: {
            closeDate: req.body.closingData.closeDate,
            closePrice: req.body.closingData.closePrice,
            closeComments: req.body.closingData.closeComments,
            profit: req.body.closingData.profit
        }
        
    }
    try {
        const closedTrade = await Trade.findByIdAndUpdate(req.params.id, closeTradeBody, {new:true}).exec();
        res.send(closedTrade)
        console.log(closedTrade)
    } catch (e) {
        console.log(e)
    }
})


module.exports = router;