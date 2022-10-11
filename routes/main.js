const express = require('express');
const router = express.Router();
const Trade = require('../models/trades');
const request = require('request');
const config = require('../config');

const monthWords = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}

// //Alpha Advantage Config

// let ticker = "TSLA";
// let url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&apikey=${config.alphaAdvantageAPIKey}`

// request.get({
//     url: url,
//     json: true,
//     headers: {'User-Agent': 'request'}
//   }, (err, res, data) => {
//     if (err) {
//       console.log('Error:', err);
//     } else if (res.statusCode !== 200) {
//       console.log('Status:', res.statusCode);
//     } else {
//       // data is successfully parsed as a JSON object:
//       console.log(data);
//     }
// });

//Index
router.get("/", async (req, res) => {
    try{
        const trades = await Trade.find().exec();
        const refactoredTrades = trades.reduce((acc, trade) => {
            const d = new Date(trade.expiryDate)
            let year = null;
            let month = null;
            let day= null;

            if(!!d.valueOf) {
                year =  d.getFullYear();
                month = d.getMonth()+1;
                day = d.getDate()+1;
            }    
            
            if(!acc[year]) {
                acc[year] = {};
            }
            if(!acc[year][monthWords[month]]) {
                acc[year][monthWords[month]] = {};
            }
            if(!acc[year][monthWords[month]][day]) {
                acc[year][monthWords[month]][day] = [];
            }
            acc[year][monthWords[month]][day].push({
                symbol: trade.sym,
                contractsNumber: trade.contractsNumber,
                spreadType: trade.spreadType,
                longStrike: trade.longStrike,
                shortStrike: trade.shortStrike,
                openPrice: trade.openPrice,
                comments: trade.openComments,
                id: trade._id,
                date: trade.expiryDate
            })
            return acc
        }, {})
        
        res.send(refactoredTrades)
    } catch (err) {
        console.log(err)
    }
})

//Create
router.post("/", async (req, res) => {
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

//Edit

router.put("/:id", async (req, res) => {
    const tradeBody = {
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
        const editedTrade = await Trade.findByIdAndUpdate(req.params.id, tradeBody, {new:true}).exec();
        res.send(editedTrade)
        console.log(editedTrade)
    } catch (e) {
        console.log(err)
    }
})


//Delete
router.delete("/:id", async (req,res) => {
    try {
        const deletedTrade = await Trade.findByIdAndDelete(req.params.id).exec();
        res.send(deletedTrade)
    } catch (err) {
        res.redirect("back")
    }
})

module.exports = router;