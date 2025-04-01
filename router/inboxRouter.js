// extrnall imports 

const express = require('express')  

// internal imports 
const {getInbox} = require("../controller/inboxController")

const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse") 
// this is router used any page 
const router = express.Router();

// login page 
router.get("/", decorateHtmlResponse("inbox"), getInbox)


module.exports = router ; 