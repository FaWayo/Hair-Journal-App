const entryRouter = require('express').Router()
const Entries = require('../models/jEntries')

// Getting all notes
entryRouter.get('/', (request, response, next) => {
    Entries.find({}).then(res => {
        response.status(200).send(res)
        next()
    })
})


// Create and Save a new Entry
entryRouter.post = ('/', async(req, res, next) => {
    const{ hairStatBack, hairStatFront, currentReg } = request.body
    console.log(request.body)

    // Create an entry7
    const entryCount = await Entries.countDocuments()
    const newEntry = new Entry({
        hairStatFront: hairStatFront,
        hairStatBack: hairStatBack,
        currentReg: currentReg
        
    });

    // Validate request
    if(!req.body.hairStatFront) {
        return res.status(400).send({
            message: "fields cannot be empty"
        });
    }


    // Save Entry in the database
    newEntry.save()
    .then(res => {
        response.status(201).send({message:'succes!', res});
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Entry."
        })
    });
})


module.exports = entryRouter;