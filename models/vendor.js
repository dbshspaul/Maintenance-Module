const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:{
        type: String,
        required: true
    }
});

const Vendor = module.exports = mongoose.model('Vendor', schema);