const express = require('express')
require('dotenv').config()
const cors = require('cors')
const route = require('./routes')
//db connection'
require('./db')

//create server
const inventory = express()

//cretae middleware
inventory.use(cors())
inventory.use(express.json())

//use routes
inventory.use(route)


//create port
PORT = process.env.PORT || 4000

//listen to port 
inventory.listen(PORT,()=>{
    try {
        console.log(`Server running suceessfully at PORT: ${PORT}`);
        
        
    } catch (error) {
        console.log(error);
        
    }
})