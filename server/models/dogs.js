const mongoose = require('mongoose');
const schema = mongoose.Schema;

const dogSchema = schema({
    size: String,
    breed: String,
    weight: Number,
    age: Number,
    color: String
});

module.exports = mongoose.model('Dog', dogSchema);