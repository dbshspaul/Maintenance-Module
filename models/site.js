const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:{
        type: String,
        required: true
    }
});

const Site = module.exports = mongoose.model('Site', schema);