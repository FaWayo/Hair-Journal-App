const mongoose = require('mongoose');

const EntriesSchema = new mongoose.Schema({
    
    hairStatFront: Number,
    hairStatBack: Number,
    currentReg: String

}, {
    timestamps: true
});

module.exports = mongoose.model('Entries', EntriesSchema);