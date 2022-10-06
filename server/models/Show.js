const mongoose = require('mongoose');
const { Schema } = mongoose;

const showSchema = {
    venue: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        trim: true
    },
    showDate: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String
    }
}

const Show = mongoose.model('Show', showSchema);

module.exports = Show;