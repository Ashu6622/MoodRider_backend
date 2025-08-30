const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({

    name:{
        type: String,
        required:true,
        trim:true,
        default:"admin"
    },
    email:{
        type: String,
        lowercase:true
    },
    uid:{
        type:String
    },
    password:{
        type:String,
        default:null
    }

},{
    timestamps:true
})

const Admin = mongoose.model('admin', adminSchema);

module.exports = Admin;