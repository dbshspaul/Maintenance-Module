const mongoose = require('mongoose');

const schema = mongoose.Schema({
    WarrentyInformations : [{ type: Schema.Types.ObjectId, ref: 'WarrentyInfo' }],



    name:{
        type: String,
        required: true
    }
});

const Site = module.exports = mongoose.model('Site', schema);