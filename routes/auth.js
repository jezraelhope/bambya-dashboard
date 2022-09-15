const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');

//Sign Up - New
router.get('/signup', (req,res) => {
   res.render('signup')
})


//Sign Up - Create
router.post('/kj', async (req, res) => {
    try{
        const newUser = await User.register(new User({
            email: req.body.email,
            username: req.body.username
        }), req.body.password);

        //flash messaging for successful sign up

        //authenticate user using passport.js
        //redirect to trades page

    
    } catch (err){
        res.redirect("back")
    }
});

module.exports = router;