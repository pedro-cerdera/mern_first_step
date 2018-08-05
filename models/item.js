const moongose = require('mongoose');
const Schema = moongose.Schema;


//Create Schema
const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = item = moongose.model('item',itemSchema);