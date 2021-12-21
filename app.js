const express = require('express');
const app =express();
const http= require('http');
const ejs = require('ejs');
const port=8000;
// fs= require('fs');
// signup = null;
// signup = fs.readFileSync('./views/SignUp.ejs', 'utf-8');

const server= http.createServer();
const usersRouter=require('./routes/user');
const User = require("./models/userschema");
const mongoose = require("mongoose");
app.set('view engine', 'ejs');
app.set('views', './views');


server.listen( port,function(err){
if(err){
    console.log(err);
    return;
}
console.log("Server is runnning:", port);
});

// app.use('/sign-up',function(req,res){
//     console.log('signup started');
//     return res.render('SignUp');
// });

app.use('/user', usersRouter);

// app.get("/signup", function(req,res) {
//     return res.render("./views/SignUp.ejs");
// });