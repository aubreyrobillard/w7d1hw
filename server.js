////////////////////////
// Setup - Import deps and create app object
////////////////////////
require('dotenv').config() //loads the variables in the .env into the process.env object. Now we'll never need it again
const express = require("express") //import the express library
const morgan = require("morgan") //import the morgan library
const PORT = process.env.PORT //getting the PORT from .env file
const app = express() //express application 

//////////////////////
// Declare Middleware
//////////////////////
app.use(morgan("dev")) // sets up out logging middleware
app.use(express.static("public")) // treat the public folder as a static file server

///////////////////////
// Declare Routes and Routers 
///////////////////////
// INDUCES - Index, New, Delete, Update, Create, Edit, Show

/// LISTENER ////
app.listen (PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`)
})