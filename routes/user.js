const User = require("../models/userschema");
const express= require('express');
const mongoose = require("mongoose");
const router= express.Router();
// const bcrypt = require('bcrypt');
const db = require('../Config/Mongoose');

// router.get('/signup', function(req,res){
//     return res.render("../views/SignUp");
// })
router.post("/signup", (req,res)=> {

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password:req.body.password,
    });
    user.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message:"user created"
        });
    })
    .catch(err => {
        console.log(error);
        res.status(500).json({
            error: err
        });
    });
});
// // get the sign up data
// module.exports.create = function(req, res){
//     if (req.body.password != req.body.confirm_password){
//         return res.redirect('back');
//     } 

//     User.findOne({email: req.body.email}, function(err, user){
//         if(err){console.log('error in finding user in signing up'); return}

//         if (!user){
//             User.create(req.body, function(err, user){
//                 if(err){console.log('error in creating user while signing up'); return}

//                 return res.redirect('/sign-in');
//             })
//         }else{
//             return res.redirect('back');
//         }

//     });
// }

module.exports = router;