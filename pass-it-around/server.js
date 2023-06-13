////////////////////////
// Setup - Import deps and create app object
////////////////////////
const express = require("express")
const app = express()

//////////////////////
// Declare Middleware
//////////////////////

///////////////////////
// Declare Routes and Routers 
///////////////////////
// INDUCES - Index, New, Delete, Update, Create, Edit, Show

// index route
app.get("/", (req, res) => {
    res.send(`<h3>You have 99 bottles<h3>
    <a href="http://localhost:4001/98"><button>Take one down, pass it around<button></a>`)
})
// HAD TO NPM INSTALL EJS OR RENDER TO WORK

// subtract a bottle
app.get("/:bottles", (req, res) => {
    const bottles = req.params.bottles
    if (bottles > 0) {
        res.send(`<h3>You have ${bottles} bottle(s)<h3>
        <a href="http://localhost:4001/${bottles -1}"><button>Take one down, pass it around?</a>
        <a href="http://localhost:4001/99"><button>Start Again?</a>`)
    } else {
        res.send(`<h3> You have no more bottles
        <a href="http://localhost:4001/99"><button>Start Again?</a>`)
    }
})


///////////////////////////
// Server Listener
///////////////////////////
app.listen(4001, () => { 
    console.log("LISTENING ON PORT 4001")
})