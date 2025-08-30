const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required:true,
        trim:true,
    },
    email:{
        type: String,
        lowercase:true
    },
    contact:{
        type:String,
        required:true,
        trim:true,
        minlength:10,
        maxlength:10
    },
    instaUrl:{
        type:String,
        default:null
    },
    youtubeUrl:{
        type:String,
        default:null
    },
    avatar:{
        type:String,
        default: `${process.env.BASE_URL || 'http://localhost:4000'}/static/avatar_1.avif`
    },

},{
    timestamps:true
})

const User = mongoose.model('user', userSchema);

module.exports = User;