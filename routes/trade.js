const express = require('express');
const router = express.Router();
const Trade = require('../models/trades');

//Index
router.get("/", async (req, res) => {
    try{
        const trades = await Trade.find().exec();

        const d = new Date(trades[0].expiryDate)

        if(!!d.valueOf) {
            year = d.getFullYear();
            month = d.getMonth()+1;
            day = d.getDate()+1;
            console.log(year)
        }
        
        res.send({trades})
    } catch (err) {
        console.log(err)
    }
})

//Create
router.post("/", async (req, res) => {
    console.log(req.body, res.body)
    const newTrade = {
        sym: req.body.symbol,
        expiryDate: req.body.expiryDate,
        spreadType: req.body.spreadType,
        longStrike: req.body.longStrike,
        shortStrike: req.body.shortStrike,
        contractsNumber: req.body.contractsNumber,
        openPrice: req.body.openPrice,
        openComments: req.body.openComments,
        closingData: {}
    }
    
    try {
        const trade = await Trade.create(newTrade)
        req.redirect('/trades/${trade._id}')
    } catch(e) {
        res.redirect("/trades")
    }
})

module.exports = router;
