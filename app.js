const express = require('express')
const dotenev = require('dotenv')
const mongoose = require('mongoose')
const path = require("path");


const cookieParser = require('cookie-parser');


// connecg express
dotenev.config();
const app = express();
  



mongoose.connect('')
.then( () => console.log('connection succesfully '))
.catch(err => console.log(err)
) 


// request parsers 
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// set view engine 
app.set("view engine", "ejs")

// set static folder 
app.use(express.static(path.join(__dirname, "public")));

// parse cookies 
app.use(cookieParser(process.env.COOKIE_SECRET ))

// routing setup 


// error handalinig 

 app.listen(process.env.PORT, () =>{
    console.log(`app listening to port ${process.env.PORT}`);
    
 })