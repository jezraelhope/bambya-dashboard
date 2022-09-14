const express = require('express');
const app = express();
const mongoose = require('mongoose')
const port = 9001;

//+++++++++++++++++++++++++++++++++++++
//Config
//+++++++++++++++++++++++++++++++++++++
const config = require("./config")

//Connect to DB
mongoose.connect(config.db.connection, {useNewUrlParser: true, useUnifiedTopology: true});









//+++++++++++++++++++++++++++++++++++++
//Routes
//+++++++++++++++++++++++++++++++++++++


//Main Routes
app.get("/", (req, res) => {
	res.send("This is the root");
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});


