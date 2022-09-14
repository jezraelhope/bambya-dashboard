const mongoose = require('mongoose')

const tradesSchema = new mongoose.Schema({
    sym: String,
    expiryDate: Date,
    spreadType: String,
    longStrike: String,
    shortStrike: String,
    contractsNumber: Number,
    openPrice: Number,
    closePrice: Number,
    closingDate: Date,
    profit: Number,
    comments, String
})

module.exports = mongoose.model("trades", tradesSchema)