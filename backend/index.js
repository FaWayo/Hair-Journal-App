const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors())

const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const journalRouter = require('./controllers/journaldata');
const userRouter = require('./controllers/user');

const passport = require("passport");


const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

require('dotenv').config()

const PORT = process.env.PORT || 4000

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());



app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept")
    next()
})




app.use(express.json())




mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
.then(() => {
    console.log('Successful connection!')
})
.catch((err) => {
    console.log(err)
})

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

app.use('/journals', journalRouter)
app.use('/users', userRouter)

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})

module.exports = app;