//  external imports
const express = require('express')
const dotenev = require('dotenv')
const mongoose = require('mongoose')
const path = require("path");
const cookieParser = require('cookie-parser');


// internal imports
const {notFoundHandler, errorHandler} = require("./middlewares/common/errorHandller")

// connecg express
dotenev.config();
const app = express();
  


// connect a mongo db 
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
app.use('/', loginRouter); 
app.use('/users', usersRouter); 
app.use('/inbox', inboxRouter); 


// 404 not found handler
  app.use(notFoundHandler )

//   common erro handler 
  app.use(errorHandler)



  // port is started 
 app.listen(process.env.PORT, () =>{
    console.log(`app listening to port ${process.env.PORT}`);
    
 })