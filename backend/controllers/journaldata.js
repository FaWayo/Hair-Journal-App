const journalRouter = require('express').Router()
const Journal = require('../models/journaldata')

// Getting all notes
journalRouter.get('/', (request, response, next) => {
        Journal.find({}).then(res => {
        response.status(200).send(res)
        next()
    })
})


// Create and Save a new Entry
journalRouter.post = ('/', async(request, response, next) => {
    const{ hairStatBack, hairStatFront, currentReg } = request.body
    console.log(request.body)

     if(hairStatBack && hairStatFront && currentReg) {
    // Create an entry
    const journalCount = await Journals.countDocuments()
    const newJournal = new Journal({
               id: journalCount + 1,
               hairStatFront: hairStatFront,
               hairStatBack: hairStatBack,
               currentReg: currentReg
        
    });
    // Save Entry in the database
    
    newJournal.save()
    .then( res => {
        response.status(201).send({message: 'successfully added!', res})
    })
    .catch(err => {
        console.log(err)
    })
} else {
    response.status(400).send({message: 'You are missing a field'})
}
})

module.exports = journalRouter