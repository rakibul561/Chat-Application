// extrnall imports 

const express = require('express') 


const router = express.Router();

// login page 
router.get("/", loginController)


module.exports = router ; 