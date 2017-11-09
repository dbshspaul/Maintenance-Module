const mongoose = require('mongoose');
require('mongoose-double')(mongoose);

var SchemaTypes = mongoose.Schema.Types;

const schema = mongoose.Schema({
    /*sites : [{ type: Schema.Types.ObjectId, ref: 'Site' }],
    devices : [{ type: Schema.Types.ObjectId, ref: 'Device' }],
    vendors : [{ type: Schema.Types.ObjectId, ref: 'Vendor' }],
    amcContractors : [{ type: Schema.Types.ObjectId, ref: 'Contractor' }],*/


    start_date:{
        type : Date, 
        default: Date.now,
        required: true
    },
    end_date:{
        type : Date, 
        default: Date.now,
        required: true
    },
    cost:{
        type: SchemaTypes.Double,
        required: true
    },
    file_path:{
        type: String,
        required: true
    },
    auto_renewal:{
        type: Boolean, 
        default: true,
        required: true
    },
    reminder_date:{
        type : Date, 
        default: Date.now,
        required: true
    },
    send_to:{
        type: String,
        required: true
    },
    send_via:{
        type: String,
        enum : ['SMS', 'email'],
        required: true
    }
});

const WarrentyInfo = module.exports = mongoose.model('WarrentyInfo', schema);