//+++++++++++++++++++++++++++++++++++++
//IMPORTS
//+++++++++++++++++++++++++++++++++++++

//NPM Imports
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const expressSession = require('express-session');

//Config Import
const config = require("./config");

//Model Imports
const Trade = require('./models/trades');
const User = require('./models/user')

//Route Imports
// const tradeRoutes = require('./routes/trade');
const authRoutes = require('./routes/auth');
const mainRoutes = require('./routes/main')


//+++++++++++++++++++++++++++++++++++++
//Config
//+++++++++++++++++++++++++++++++++++++

//Connect to DB
mongoose.connect(config.db.connection, {useNewUrlParser: true, useUnifiedTopology: true});

//Express Config
app.use(express.static('public'));
app.use(express.json({
	type: ["application/json", "text/plain"]
}))

//Express Session Config

app.use(expressSession({
	secret: "jdshfjdhldmfsdjfksdhjfkdssdfksdj sdofjp[ioie -394r sdfy989y3q dfh8ye",
	resave: false,
	saveUninitialized: false
}))


//Passport config
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));

//Route Config
//app.use("/", mainRoutes)
app.use("/", authRoutes)
app.use("/", mainRoutes)


//Main Routes
app.get("/", (req, res) => {
	res.json({message: "The connection is working!!!"});
});
//+++++++++++++++++++++++++++++++++++++
//Listen
//+++++++++++++++++++++++++++++++++++++

const port = process.env.PORT || 9001;

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});


