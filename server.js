////////////////////////
// Setup - Import deps and create app object
////////////////////////
// require finds the library in nodes library folder and find what the library exports and return it (bring in things from the outside)
const express = require("express") //return express library
// create express application
const app = express()
    // console.log(app) // logs app operation object (to confirm express app works)

//////////////////////
// Declare Middleware
//////////////////////

///////////////////////
// Declare Routes and Routers 
///////////////////////
// INDUCES - Index, New, Delete, Update, Create, Edit, Show
// app.method("/url", (req, res) => {})
// req = request object (details about the request)
// res = response object (has function for sending response)
// app.get("/greeting", (req, res) => {
//     // res.send("HOWDY STRANGER");
//     console.log(req.query)
//     const name = req.query.name;
//     res.send(`Oh, hey there ${name}, didn't see you there... this is awkward`)
// })

app.get("/tip/:total/:tipPercentage", (req, res) => {
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage
    const tipAmount = ((tipPercentage/total)*100)
    res.send(`Your total is $${total}, and the tip percentage is ${tipPercentage}%, therfore you should tip $${tipAmount}`)
})

///////////////////////////
// Server Listener/ TURN ON SERVER/ ALWAYS THE LAST THING
///////////////////////////
// this app should start listening for requests
app.listen(4000, () => {
    console.log("LISTENING ON PORT 4000")
})