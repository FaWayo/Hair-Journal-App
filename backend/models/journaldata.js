const mongoose = require('mongoose');

const JournalSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    
    hairStatFront:{
                   type: Number,
                   required: true
                  },
    hairStatBack:{ type: Number,
                 required: true
                },
    currentReg:
    { type: String,
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Journals', JournalSchema);