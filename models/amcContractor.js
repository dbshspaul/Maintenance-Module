const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:{
        type: String,
        required: true
    }
});

const Contractor = module.exports = mongoose.model('Contractor', schema);