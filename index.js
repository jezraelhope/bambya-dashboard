//+++++++++++++++++++++++++++++++++++++
//IMPORTS
//+++++++++++++++++++++++++++++++++++++

//NPM Imports
const express = require('express');
const app = express();
const mongoose = require('mongoose')

//Config Import
const config = require("./config")

//Model Imports
const Trade = require('./models/trades');

//Route Imports
const tradeRoutes = require('./routes/trade');
const authRoutes = require('./routes/auth');
const mainRoutes = require('./routes/main')


//+++++++++++++++++++++++++++++++++++++
//Config
//+++++++++++++++++++++++++++++++++++++

//Connect to DB
mongoose.connect(config.db.connection, {useNewUrlParser: true, useUnifiedTopology: true});

//Route Config
app.use("/", mainRoutes)
app.use("/", authRoutes)
app.use("/", tradeRoutes)



//Main Routes
app.get("/", (req, res) => {
	res.send("This is the root");
});

//+++++++++++++++++++++++++++++++++++++
//Listen
//+++++++++++++++++++++++++++++++++++++

const port = 9001;

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});


