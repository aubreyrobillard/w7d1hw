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

// app.get("/tip/:total/:tipPercentage", (req, res) => {
//     const total = req.params.total
//     const tipPercentage = req.params.tipPercentage
//     const tipAmount = ((tipPercentage/total)*100)
//     res.send(`Your total is $${total}, and the tip percentage is ${tipPercentage}%, therfore you should tip $${tipAmount}`)
// })

app.get("/magic/:phrase", (req, res) => {
    const phrase = req.params.phrase
    const arr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const outcome = arr[Math.floor(Math.random()*arr.length)]
    res.send(`Let's see what the magic 8 ball thinks of your question ${phrase} Magic 8 ball says... <h1>${outcome}</h1>`)
})

///////////////////////////
// Server Listener/ TURN ON SERVER/ ALWAYS THE LAST THING
///////////////////////////
// this app should start listening for requests
app.listen(4000, () => {
    console.log("LISTENING ON PORT 4000")
})