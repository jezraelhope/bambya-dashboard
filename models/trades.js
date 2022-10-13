const mongoose = require('mongoose')

const tradesSchema = new mongoose.Schema({
    sym: String,
    expiryDate: Date,
    spreadType: String,
    longStrike: Number,
    shortStrike: Number,
    contractsNumber: Number,
    openPrice: Number,
    openComments: String,
    closingData: {
        closePrice: Number,
        closeDate: Date,
        closeComments: String
    },
    owner: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
    
})

module.exports = mongoose.model("trades", tradesSchema)