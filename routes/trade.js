const express = require('express');
const router = express.Router();
const Trade = require('../models/trades');

//Index
router.get("/", async (req, res) => {
    try{
        const trades = await Trade.find().exec();
        res.send({trades})
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;
